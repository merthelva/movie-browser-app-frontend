import { AppContext, AppInitialProps } from "next/app";

import { END, ISagaStore, wrapper } from "../store";
import { MainLayout } from "../layouts";
import { cookie } from "../lib/utilities";
import { CookieType } from "../lib/constants";
import { UserActions } from "../store/slices/user";
import { AppPropsWithLayout } from "./app.types";
import { GlobalStyles, ThemeProvider, Variables } from "../globals";
function MyApp({ Component, pageProps }: AppPropsWithLayout & AppInitialProps) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
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
