import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";

const ArrowBtn = () => {
  const ArrowButton = styled.button`
    display: flex;
    align-items: center;
    display: flex;
  `;

  return (
    <ArrowButton>
      View more
      <ArrowIcon />
    </ArrowButton>
  );
};

export default ArrowBtn;
