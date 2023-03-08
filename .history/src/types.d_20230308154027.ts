import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    theme: {
      colors: {
        bgPrimary1: string;
        bgPrimary2: string;
        bgPrimary3: string;
        bgSecondary1: string;
        iconsButtons: string;
        buttonYellow: string;
        listItem: string;
        black: string;
        darkBlue: string;
      };
      fontSize: {
        s: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
      };
    };
  }
}
