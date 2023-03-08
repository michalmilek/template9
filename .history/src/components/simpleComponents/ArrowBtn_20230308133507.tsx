import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

const ArrowBtn = ({
  text,
  fz,
  fw,
  ah,
  aw,
  color,
}: {
  text: string;
  fz?: number;
  fw?: number;
  ah?: number;
  aw?: number;
  color?: string;
}) => {
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
  `;

  const StyledIcon = styled(ArrowIcon)`
    height: ${ah ? ah : 30};
    width: ${aw ? aw : 30};
    fill: ${color ? color : "#000"};
  `;

  return (
    <ArrowButton>
      {text}
      <StyledIcon />
    </ArrowButton>
  );
};

export default ArrowBtn;
