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
    };
  }
}
