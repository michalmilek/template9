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
  | "black"
  | "transparent"
  | "RoyalBlue";

type fontSize =
  | "s"
  | "ms"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | undefined;

//type borderSize = "s" | "md" | "lg" | "xl" | "2xl";

type borderRadius = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

type btnType = "submit" | "reset";

type fontWeight = 400 | 500 | 600 | 700 | 800 | 900;
type lineHeight = 74 | 74 | 32 | 56 | 28 | 36;

type Opacity = 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9;

interface TextInterface {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: buttonColor;
  text: string;
  fontSize?: fontSize;
  lineHeight?: lineHeight;
  fontWeight?: fontWeight;
  opacity?: Opacity;
  padding?: string;
  mobileFontSize?: fontSize;
  maxWidth?: string;
}

interface TeamCard {
  img: string;
  name: string;
  job: string;
}

interface ThemeInterface {
  colors: {
    bgPrimary1: string;
    bgPrimary2: string;
    bgPrimary3: string;
    bgPrimary4: string;
    bgPrimary5: string;
    bgPrimary6: string;
    bgSecondary1: string;
    iconsButtons: string;
    buttonYellow: string;
    listItem: string;
    black: string;
    darkBlue: string;
    transparent: string;
    RoyalBlue: string;
  };
  fontSize: {
    s: string;
    ms: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
  };
  borderRadius: {
    sm: "5px";
    md: "10px";
    lg: "15px";
    xl: "20px";
    "2xl": "25px";
    full: "50%";
  };
}

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: UseFormRegister<{
    name: string;
    email: string;
    message: string;
    subject: string;
    subjectSelect: string;
  }>;
  errors?: FieldErrors<{
    name: string;
    email: string;
    subject: string;
    subjectSelect: string;
    message: string;
  }>;
}