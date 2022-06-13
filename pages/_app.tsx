import App, { AppInitialProps } from "next/app";

import { wrapper } from "../store";
import { MainLayout } from "../layouts";
import { cookie } from "../lib/utilities";
import { AuthMode, CookieType } from "../lib/constants";
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
  (store) => async (context) => {
    const userId = cookie.get("userId", CookieType.STRING, context.ctx);
    const token = cookie.get("token", CookieType.STRING, context.ctx);
    const authMode = cookie.get("authMode", CookieType.NUMBER, context.ctx);

    let isAuthenticated = false;
    if (+authMode === AuthMode.SIGNUP) {
      isAuthenticated = !!userId;
    } else if (+authMode === AuthMode.LOGIN) {
      isAuthenticated = !!token;
    }
    userId && store.dispatch(UserActions.setUserId(userId));
    store.dispatch(UserActions.setIsAuthenticated(isAuthenticated));

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);
