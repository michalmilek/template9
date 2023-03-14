import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";
import {
  getBackground,
  getBorderRadius,
  getColor,
  getFontSize,
} from "./getProps";

interface Btn extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  fontSize?: fontSize;
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  borderRadius?: borderRadius;
  background?: buttonColor | "transparent";
  color?: buttonColor;
  isArrow?: boolean;
  arrowHeight?: 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;
  arrowWidth?: 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;
  border?: boolean;
  px?:
    | 2
    | 4
    | 6
    | 8
    | 10
    | 12
    | 14
    | 16
    | 18
    | 20
    | 22
    | 24
    | 26
    | 28
    | 30
    | 32
    | 34
    | 36;
  py?:
    | 2
    | 4
    | 6
    | 8
    | 10
    | 12
    | 14
    | 16
    | 18
    | 20
    | 22
    | 24
    | 26
    | 28
    | 30
    | 32
    | 34
    | 36;
  width?: 10 | 25 | 40 | 50 | 60 | 75 | 100;
  mobileFontSize?: fontSize;
}

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

const ArrowBtn = ({
  text,
  fontSize,
  fontWeight,
  py,
  px,
  width,
  border,
  background,
  borderRadius,
  arrowHeight,
  arrowWidth,
  color,
  isArrow,
  //type,
  mobileFontSize,
  ...rest
}: Btn) => {
  const ArrowButton = styled.a`
    font-family: "Poppins";
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    background: ${getColor(color)};
    border: none;
    gap: 20px;
    padding: ${py ? py : 0}px ${px ? px : 0}px;
    color: ${getColor(color)};
    border: ${border ? `1px solid ${getColor(color)}` : ""};
    font-style: normal;
    width: ${width ? `${width}%` : "auto"};
    font-weight: ${fontWeight ? fontWeight : 500};
    font-size: ${getFontSize(fontSize)};
    line-height: 28px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: ${getBorderRadius(borderRadius)};
    background: ${getBackground(background)};
    :hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      font-size: ${mobileFontSize
        ? `${mobileFontSize}px`
        : fontSize
        ? `${fontSize}px`
        : "16px"};
      white-space: nowrap;
    }
  `;

  const StyledIcon = styled(ArrowIcon)`
    height: ${arrowHeight ? arrowHeight : 30}px;
    width: ${arrowWidth ? arrowWidth : 30}px;
    fill: ${getColor(color)};
  `;

  return (
    <ArrowButton {...rest}>
      {text}
      {isArrow && <StyledIcon />}
    </ArrowButton>
  );
};

export default ArrowBtn;