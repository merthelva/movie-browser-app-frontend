import App, { AppInitialProps } from "next/app";
//import { Provider } from "react-redux";

//import { store } from "../store";
import { MainLayout } from "../layouts";
import { AppPropsWithLayout } from "./app.types";
import { GlobalStyles, ThemeProvider, Variables } from "../globals";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppPropsWithLayout & AppInitialProps) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      {/* <Provider store={store}> */}
      <Variables />
      <GlobalStyles />
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      {/* </Provider> */}
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    //store.dispatch({ type: "PRINT_TO_CONSOLE", payload: {} });

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);
