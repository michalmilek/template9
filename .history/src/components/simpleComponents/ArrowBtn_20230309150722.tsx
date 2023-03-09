import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

interface Btn extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  fontSize?: fontSize;
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  borderRadius?: string;
  background?: buttonColor | "transparent";
  color?: buttonColor;
  isArrow?: boolean;
  arrowHeight?: number | 30;
  arrowWidth?: number | 30;
  border?: boolean;
  px?: number | 2 | 4 | 6 | 8 | 10;
  py?: number | 2 | 4 | 6 | 8 | 10;
}

type buttonColor =
  | "buttonYellow"
  | "bgPrimary1"
  | "bgPrimary2"
  | "bgPrimary3"
  | "bgSecondary1"
  | "iconsButton"
  | "buttonYellow"
  | "listItem"
  | "darkBlue" 
  | "black";

type fontSize = 
"sm"| "md"
  | "lg"
  | "xl"
  | "2xl"

const ArrowBtn = ({
  text,
  fontSize,
  fontWeight,
  py,
  px,
  border,
  background,
  borderRadius,
  arrowHeight,
  arrowWidth,
  color,
  isArrow,
  ...p
}: Btn) => {


  const ArrowButton = styled.button`
    font-family: "Poppins";
    display: flex;
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
      : color === "iconsButton"
      ? ({ theme }) => theme.colors.iconsButton
      : color === "listItem"
      ? ({ theme }) => theme.colors.listItem
      : color === "darkBlue"
      ? ({ theme }) => theme.colors.darkBlue
      : color === "black"
      ? ({ theme }) => theme.colors.darkBlue
      : "transparent"};
    border: none;
    gap: 20px;
    padding: ${py ? py : 0} ${px ? px : 0};
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
    font-weight: ${fontWeight ? fontWeight : 500};
    font-size: ${fontSize === "md"
      ? ({ theme }) => theme.fontSize.md
      : fontSize === "sm"
      ? ({ theme }) => theme.fontSize.sm
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
      : background === "iconsButton"
      ? ({ theme }) => theme.colors.iconsButton
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
      : color === "iconsButton"
      ? ({ theme }) => theme.colors.iconsButton
      : color === "listItem"
      ? ({ theme }) => theme.colors.listItem
      : color === "darkBlue"
      ? ({ theme }) => theme.colors.darkBlue
      : "#000"};
  `;

  return (
    <ArrowButton>
      {text}
      {isArrow && <StyledIcon />}
    </ArrowButton>
  );
};

export default ArrowBtn;


  // ${({ color }) =>
  //  color &&
   // css`
    //       color: ${({ theme }) => theme.colors[color]};
  // `}
//`;