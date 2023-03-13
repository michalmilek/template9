import React from "react";
import styled from "styled-components";

const Typography = (props: TextInterface) => {
  const {
    text,
    type,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    opacity,
    padding,
  } = props;

  console.log(text);
  
  function getColor(color: string | undefined) {
    switch (color) {
      case "buttonYellow":
        return ({ theme }: { theme: ThemeInterface }) =>
          theme.colors.buttonYellow;
      case "bgPrimary1":
        return ({ theme }: { theme: ThemeInterface }) =>
          theme.colors.bgPrimary1;
      case "bgPrimary2":
        return ({ theme }: { theme: ThemeInterface }) =>
          theme.colors.bgPrimary2;
      case "bgPrimary3":
        return ({ theme }: { theme: ThemeInterface }) =>
          theme.colors.bgPrimary3;
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
  const Text = styled[type]`
    color: ${getColor(color)};
    font-weight: ${fontWeight ? fontWeight : 500};
    line-height: ${lineHeight ? `${lineHeight}px` : "28px"};
    opacity: ${opacity ? opacity : 1};
    padding: ${padding ? padding : 0};
    font-size: ${fontSize === "md"
      ? ({ theme }) => theme.fontSize.md
      : fontSize === "s"
      ? ({ theme }) => theme.fontSize.s
      : fontSize === "lg"
      ? ({ theme }) => theme.fontSize.lg
      : fontSize === "xl"
      ? ({ theme }) => theme.fontSize.xl
      : fontSize === "2xl"
      ? ({ theme }) => theme.fontSize["2xl"]
      : fontSize === "3xl"
      ? ({ theme }) => theme.fontSize["3xl"]
      : fontSize === "4xl"
      ? ({ theme }) => theme.fontSize["4xl"]
      : fontSize === "5xl"
      ? ({ theme }) => theme.fontSize["5xl"]
      : "16px"};
  `;

  return <Text>{text}</Text>;
};

export default Typography;
