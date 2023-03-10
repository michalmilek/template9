import React from "react";
import styled from "styled-components";

interface TextInterface {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: buttonColor;
  text: string;
  fontSize?: fontSize;
  lineHeight?: lineHeight;
  fontWeight?: fontWeight;
}

const Typography = (props: TextInterface) => {
  const { type, text, fontSize, lineHeight, fontWeight, color, ...rest } =
    props;

  const H1 = styled.h1`
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

  switch (type) {
    case "h1":
      return <H1 {...rest}>{text}</H1>;
    case "h2":
      return <h2 {...rest}>{text}</h2>;
    case "h3":
      return <h3 {...rest}>{text}</h3>;
    case "h4":
      return <h4 {...rest}>{text}</h4>;
    case "h5":
      return <h5 {...rest}>{text}</h5>;
    case "h6":
      return <h6 {...rest}>{text}</h6>;
    case "p":
      return <p {...rest}>{text}</p>;
    case "span":
      return <span {...rest}>{text}</span>;
    default:
      return null;
  }
};

export default Typography;
