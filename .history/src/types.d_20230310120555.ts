/* import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    theme: {
      colors: {
        bgPrimary1: string;
        bgPrimary2: string;
        bgPrimary3: string;
        bgSecondary1: string;
        iconsButtonsLightBlue: string;
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
 */


type buttonColor =
  | "buttonYellow"
  | "bgPrimary1"
  | "bgPrimary2"
  | "bgPrimary3"
  | "bgSecondary1"
  | "iconsButtons"
  | "buttonYellow"
  | "listItem"
  | "darkBlue"
  | "black";

type fontSize = "s" | "md" | "lg" | "xl" | "2xl";

//type borderSize = "s" | "md" | "lg" | "xl" | "2xl";

type borderRadius = "sm" | "md" | "lg" | "xl" | "2xl";

type btnType = "submit" | "reset";