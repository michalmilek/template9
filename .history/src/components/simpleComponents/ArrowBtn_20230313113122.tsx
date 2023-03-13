import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

interface Btn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fontSize?: fontSize;
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  borderRadius?: borderRadius;
  background?: buttonColor | "transparent";
  color?: buttonColor;
  isArrow?: boolean;
  arrowHeight?: number | 30;
  arrowWidth?: number | 30;
  border?: boolean;
  //type?: btnType;
  px?: number | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20;
  py?: number | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20;
  width?: number | 10 | 25 | 40 | 50 | 60 | 75 | 100;
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
    background: ${color === "buttonYellow"
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
      : "transparent"};
    border: none;
    gap: 20px;
    padding: ${py ? py : 0}px ${px ? px : 0}px;
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
      : "#000"};

    /* color: ${(props) => {
      if (props.color === "yellow") {
        return ({ theme }) => theme.colors.buttonYellow;
      } else if (props.color === "bgPrimary1") {
        return ({ theme }) => theme.colors.bgPrimary1;
      } else if (props.color === "bgPrimary2") {
        return ({ theme }) => theme.colors.bgPrimary2;
      } else if (props.color === "bgPrimary3") {
        return ({ theme }) => theme.colors.bgPrimary3;
      } else if (props.color === "bgSecondary1") {
        return ({ theme }) => theme.colors.bgSecondary1;
      } else if (props.color === "iconsButtons") {
        return ({ theme }) => theme.colors.iconsButtons;
      } else if (props.color === "listItem") {
        return ({ theme }) => theme.colors.listItem;
      } else if (props.color === "black") {
        return ({ theme }) => theme.colors.black;
      } else if (props.color === "darkBlue") {
        return ({ theme }) => theme.colors.darkBlue;
      }
    }}; */

    border: ${border ? "1px solid #a9a7a7" : ""};
    font-style: normal;
    width: ${width ? `${width}%` : "auto"};
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
      : "16px"};
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
    background: ${background === "buttonYellow"
      ? ({ theme }) => theme.colors.buttonYellow
      : background === "bgPrimary1"
      ? ({ theme }) => theme.colors.bgPrimary1
      : background === "bgPrimary2"
      ? ({ theme }) => theme.colors.bgPrimary2
      : background === "bgPrimary3"
      ? ({ theme }) => theme.colors.bgPrimary3
      : background === "bgSecondary1"
      ? ({ theme }) => theme.colors.bgSecondary1
      : background === "iconsButtons"
      ? ({ theme }) => theme.colors.iconsButtons
      : background === "listItem"
      ? ({ theme }) => theme.colors.listItem
      : background === "darkBlue"
      ? ({ theme }) => theme.colors.darkBlue
      : background === "black"
      ? ({ theme }) => theme.colors.black
      : "transparent"};
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
    fill: ${color === "buttonYellow"
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
      : "#000"};
  `;

  return (
    <ArrowButton {...rest}>
      {text}
      {isArrow && <StyledIcon />}
    </ArrowButton>
  );
};

export default ArrowBtn;