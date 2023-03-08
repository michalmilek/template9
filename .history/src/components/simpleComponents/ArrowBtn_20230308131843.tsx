import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

const ArrowBtn = ({
  text,
  fz,
  fw,
  ah,
  aw,
}: {
  text: string;
  fz: number;
  fw: number;
  ah: number;
  aw: number;
}) => {
  const ArrowButton = styled.button`
    font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    font-style: normal;
    font-weight: ${fw};
    font-size: ${fz}px;
    line-height: 28px;
    cursor: pointer;
  `;

  const StyledIcon = styled(ArrowIcon)`
    height: ${ah}px;
    width: ${aw}px;
  `;

  return (
    <ArrowButton>
      {text}
      <StyledIcon />
    </ArrowButton>
  );
};

export default ArrowBtn;
