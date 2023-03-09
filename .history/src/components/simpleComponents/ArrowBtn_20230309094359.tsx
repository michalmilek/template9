import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";
import { theme } from "../../utils/theme";

interface Btn extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  fontSize?: number;
  fontWeight?: number;
  //TODO: color?: {({ theme }) => theme.colors.secondary3}
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
    color: ${({ theme }) => theme.colors.bgPrimary1};
    font-style: normal;
    font-weight: ${fontSize ? fontSize : 500};
    font-size: ${(props) => props.theme.fontSize.md}px;
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
