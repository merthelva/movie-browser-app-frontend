import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      light: string;
      shadow: string;
      white: string;
      gray500: string;
      error: string;
      warning: string;
      success: string;
    };
  }
}
