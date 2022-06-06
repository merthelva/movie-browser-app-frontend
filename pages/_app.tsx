import App, { AppInitialProps } from "next/app";

import { wrapper } from "../store";
import { MainLayout } from "../layouts";
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
    //store.dispatch(GenresActions.fetchGenresRequest());

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);
