import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

const ArrowBtn = ({
  fz,
  fw,
  ah,
  aw,
}: {
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
  `;

  const StyledIcon = styled(ArrowIcon)`
    height: ${ah}px;
    width: ${aw}px;
  `;

  return (
    <ArrowButton>
      View more
      <StyledIcon />
    </ArrowButton>
  );
};

export default ArrowBtn;
