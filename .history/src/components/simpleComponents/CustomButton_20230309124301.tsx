import styled from "styled-components";

import React from "react";

const CustomButton = ({ textColor }: { textColor?: string }) => {
  /* font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    ${color}; */

  const Button = styled.button`
    font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    color: ${textColor === "buttonYellow"
      ? ({ theme }) => theme.colors.buttonYellow
      : textColor === "bgPrimary1"
      ? ({ theme }) => theme.colors.bgPrimary1
      : textColor === "bgPrimary2"
      ? ({ theme }) => theme.colors.bgPrimary2
      : textColor === "bgPrimary3"
      ? ({ theme }) => theme.colors.bgPrimary3
      : textColor === "bgSecondary1"
      ? ({ theme }) => theme.colors.bgSecondary1
      : textColor === "iconsButton"
      ? ({ theme }) => theme.colors.iconsButton
      : textColor === "buttonYellow"
      ? ({ theme }) => theme.colors.buttonYellow
      : textColor === "listItem"
      ? ({ theme }) => theme.colors.listItem
      : textColor === "darkBlue"
      ? ({ theme }) => theme.colors.darkBlue
      : "#000"};
  `;

  return <Button>CustomButton</Button>;
};

export default CustomButton;
