import { AppContext, AppInitialProps } from "next/app";
import NextProgress from "next-progress";

import { END, ISagaStore, wrapper } from "../store";
import { MainLayout } from "../layouts";
import { cookie } from "../lib/utilities";
import { Colors, CookieType } from "../lib/constants";
import { UserActions } from "../store/slices/user";
import { AppPropsWithLayout } from "./app.types";
import { GlobalStyles, ThemeProvider, Variables } from "../globals";
import { SEOHead } from "../components";

// in order to import fonts, https://fontsource.org/docs/guides/nextjs is used as suggested in
// https://stackoverflow.com/questions/69388400/nextjs-google-font-is-not-loading-or-displaying-on-the-website
import "@fontsource/acme";

function MyApp({ Component, pageProps }: AppPropsWithLayout & AppInitialProps) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <NextProgress
        height={5}
        color={Colors.DARK}
        options={{ showSpinner: false }}
      />
      <SEOHead metaProps={{ ...pageProps?.meta }} />
      <Variables />
      <GlobalStyles />
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }: AppContext) => {
      const userId = cookie.get("userId", CookieType.STRING, ctx);
      const authMode = cookie.get("authMode", CookieType.NUMBER, ctx);

      let isAuthenticated = authMode && +authMode >= 0;

      userId &&
        isAuthenticated &&
        store.dispatch(UserActions.setUserId(userId));
      store.dispatch(UserActions.setIsAuthenticated(isAuthenticated));

      // 2. Stop the saga if on server
      if (ctx.req && Component.getInitialProps) {
        store.dispatch(END);
        await (store as ISagaStore).sagaTask!.toPromise();
      }

      // 3. Return props
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
