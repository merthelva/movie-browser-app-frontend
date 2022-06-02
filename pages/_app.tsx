//import { Provider } from "react-redux";

//import { store } from "../store";
import { MainLayout } from "../layouts";
import { AppPropsWithLayout } from "./app.types";
import { GlobalStyles, ThemeProvider, Variables } from "../globals";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
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

export default MyApp;
