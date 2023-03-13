export function getColor(color: buttonColor | undefined) {
  switch (color) {
    case "buttonYellow":
      return ({ theme }: { theme: ThemeInterface }) =>
        theme.colors.buttonYellow;
    case "bgPrimary1":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.bgPrimary1;
    case "bgPrimary2":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.bgPrimary2;
    case "bgPrimary3":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.bgPrimary3;
    case "darkBlue":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.darkBlue;
    case "black":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.black;
    case "transparent":
      return "transparent";
    default:
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.darkBlue;
  }
}
export function getFontSize(fontSize: fontSize) {
  switch (fontSize) {
    /* ${fontSize === "md"
      ? ({ theme }) => theme.fontSize.md
      : fontSize === "s"
      ? ({ theme }) => theme.fontSize.s
      : fontSize === "lg"
      ? ({ theme }) => theme.fontSize.lg
      : fontSize === "xl"
      ? ({ theme }) => theme.fontSize.xl
      : fontSize === "2xl"
      ? ({ theme }) => theme.fontSize["2xl"]
    case "buttonYellow": */
    case "s":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize.s;
    case "lg":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize.lg;
    case "xl":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize.xl;
    case "md":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize.md;
    case "2xl":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize["2xl"];
    case "3xl":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize["3xl"];
    case "4xl":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize["4xl"];
    case "5xl":
      return ({ theme }: { theme: ThemeInterface }) => theme.fontSize["5xl"];
    default:
      return "16px";
  }
}

"sm" | "md" | "lg" | "xl" | "2xl" | "full";

export function getBorderRadius(borderRadius: borderRadius | undefined) {
  switch (borderRadius) {
    case "sm":
      return ({ theme }: { theme: ThemeInterface }) => theme.borderRadius.sm;
    case "md":
      return ({ theme }: { theme: ThemeInterface }) => theme.borderRadius.md;
    case "lg":
      return ({ theme }: { theme: ThemeInterface }) => theme.borderRadius.lg;
    case "xl":
      return ({ theme }: { theme: ThemeInterface }) => theme.borderRadius.xl;
    case "2xl":
      return ({ theme }: { theme: ThemeInterface }) =>
        theme.borderRadius["2xl"];
    case "bgPrimary2":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.bgPrimary2;
    case "bgPrimary3":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.bgPrimary3;
    case "darkBlue":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.darkBlue;
    case "black":
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.black;
    case "transparent":
      return "transparent";
    default:
      return ({ theme }: { theme: ThemeInterface }) => theme.colors.darkBlue;
  }
}
