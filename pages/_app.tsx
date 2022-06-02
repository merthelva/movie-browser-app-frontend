import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../store";
import { GlobalStyles, ThemeProvider } from "../globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
