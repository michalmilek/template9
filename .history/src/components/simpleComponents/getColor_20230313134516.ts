export function getColor(color: string | undefined) {
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
