import React from "react";
import styled from "styled-components";

const H6Text = (props: TextInterface) => {
  const { text, color, fontSize, lineHeight, fontWeight, opacity, padding } =
    props;

  console.log(text);

  const H6Text = styled.h6`
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
      : "#000"};
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
  return <H6Text>{text}</H6Text>;
};

export default H6Text;
