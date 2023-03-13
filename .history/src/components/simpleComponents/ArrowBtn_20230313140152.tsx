import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";
import { getColor, getFontSize } from "./getProps";

interface Btn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  //type?: btnType;
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
  const ArrowButton = styled.button`
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
    border: ${border ? "1px solid #a9a7a7" : ""};
    font-style: normal;
    width: ${width ? `${width}%` : "auto"};
    font-weight: ${fontWeight ? fontWeight : 500};
    font-size: ${getFontSize(fontSize)};
    line-height: 28px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: ${borderRadius === "sm"
      ? ({ theme }) => theme.borderRadius.sm
      : borderRadius === "md"
      ? ({ theme }) => theme.borderRadius.md
      : borderRadius === "lg"
      ? ({ theme }) => theme.borderRadius.lg
      : borderRadius === "xl"
      ? ({ theme }) => theme.borderRadius.xl
      : borderRadius === "2xl"
      ? ({ theme }) => theme.borderRadius["2xl"]
      : 0};
    background: ${getColor(color)};
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