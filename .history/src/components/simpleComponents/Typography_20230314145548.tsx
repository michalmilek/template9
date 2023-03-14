import React from "react";
import styled from "styled-components";
import { getColor, getFontSize } from "./getProps";

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
    mobileFontSize,
  } = props;

  console.log(text);

  const Text = styled[type]`
    color: ${getColor(color)};
    font-weight: ${fontWeight ? fontWeight : 500};
    line-height: ${lineHeight ? `${lineHeight}px` : "28px"};
    opacity: ${opacity ? opacity : 1};
    padding: ${padding ? padding : 0};
    font-size: ${getFontSize(fontSize)};

    @media (max-width: 1100px) {
      font-size: ${mobileFontSize
        ? getFontSize(mobileFontSize)
        : getFontSize(fontSize)};
    }
  `;

  return <Text>{text}</Text>;
};

export default Typography;
