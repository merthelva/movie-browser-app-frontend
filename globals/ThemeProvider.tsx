import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

interface IThemeProvider {
  children: ReactNode;
}

const GlobalTheme: React.FC<IThemeProvider> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalTheme;
