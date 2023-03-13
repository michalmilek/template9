import React from "react";
import styled from "styled-components";
import { getColor } from "./getProps";

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
