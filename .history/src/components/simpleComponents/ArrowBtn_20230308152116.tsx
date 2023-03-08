import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

interface Btn extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  isArrow?: boolean;
}

interface BtnWithArrow extends Btn {
  arrowHeight?: number;
  arrowWidth?: number;
}

const ArrowBtn = ({
  text,
  fontSize,
  fontWeight,
  arrowHeight,
  arrowWidth,
  color,
  isArrow,
  ...p
}: BtnWithArrow) => {
  const ArrowButton = styled.button`
    font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    color: ${color ? color : "#000"};
    font-style: normal;
    font-weight: ${fw ? fw : 500};
    font-size: ${fz ? fz : 16}px;
    line-height: 28px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.05);
    }
  `;

  const StyledIcon = styled(ArrowIcon)`
    height: ${ah ? ah : 30}px;
    width: ${aw ? aw : 30}px;
    fill: ${color ? color : "#000"};
  `;

  return (
    <ArrowButton>
      {text}
      {isArrow && <StyledIcon />}
    </ArrowButton>
  );
};

export default ArrowBtn;
