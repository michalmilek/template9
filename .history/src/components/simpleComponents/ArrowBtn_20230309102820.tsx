import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

interface Btn extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  isArrow?: boolean;
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
}: Btn) => {
  const ArrowButton = styled.button`
    font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    ${({ color }) =>
      color == "yellow" &&
      css`
        color: ${({ theme }) => theme.colors.buttonYellow};
      `}
    font-style: normal;
    font-weight: ${fontSize ? fontSize : 500};
    font-size: 16px;
    line-height: 28px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.05);
    }
  `;

  ArrowButton.defaultProps = {
    theme: {
      fontSize: {
        md: 16,
      },
    },
  };

  const StyledIcon = styled(ArrowIcon)`
    height: ${arrowHeight ? arrowHeight : 30}px;
    width: ${arrowWidth ? arrowWidth : 30}px;
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
