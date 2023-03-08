import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

const ArrowBtn = () => {
  const ArrowButton = styled.button`
    font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  `;

  const StyledIcon = styled(ArrowIcon)`
    height: 40px;
    width: 40px;
  `;

  return (
    <ArrowButton>
      View more
      <StyledIcon />
    </ArrowButton>
  );
};

export default ArrowBtn;
