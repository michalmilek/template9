import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

const ArrowBtn = () => {
  const ArrowButton = styled.button`
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    font-size: 16px;
    font-weight: 500;
  `;

  const StyledIcon = styled(ArrowIcon)`
    font-size: 30px;
  `;

  return (
    <ArrowButton>
      View more
      <ArrowIcon />
    </ArrowButton>
  );
};

export default ArrowBtn;
