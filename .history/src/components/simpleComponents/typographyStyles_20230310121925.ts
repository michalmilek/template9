import styled from "styled-components";

export const H1 = styled.h1`
  color: ${color === "buttonYellow"
    ? ({ theme }) => theme.colors.buttonYellow
    : color === "bgPrimary1"
    ? ({ theme }) => theme.colors.bgPrimary1
    : color === "bgPrimary2"
    ? ({ theme }) => theme.colors.bgPrimary2
    : color === "bgPrimary3"
    ? ({ theme }) => theme.colors.bgPrimary3
    : color === "bgSecondary1"
    ? ({ theme }) => theme.colors.bgSecondary1
    : color === "iconsButtons"
    ? ({ theme }) => theme.colors.iconsButtons
    : color === "listItem"
    ? ({ theme }) => theme.colors.listItem
    : color === "darkBlue"
    ? ({ theme }) => theme.colors.darkBlue
    : color === "black"
    ? ({ theme }) => theme.colors.darkBlue
    : "#000"}; ;
`;
