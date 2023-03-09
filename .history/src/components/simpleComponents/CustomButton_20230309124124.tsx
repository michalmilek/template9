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
    color: ${(props) =>
      textColor === "buttonYellow"
        ? ({ theme }) => theme.colors.bgPrimary
        : props.color === "bgPrimary1"
        ? ({ theme }) => theme.colors.bgPrimary1
        : props.color === "bgPrimary2"
        ? ({ theme }) => theme.colors.bgPrimary2
        : props.color === "bgPrimary3"
        ? ({ theme }) => theme.colors.bgPrimary3
        : props.color === "bgSecondary1"
        ? ({ theme }) => theme.colors.bgSecondary1
        : props.color === "iconsButton"
        ? ({ theme }) => theme.colors.iconsButton
        : props.color === "buttonYellow"
        ? ({ theme }) => theme.colors.buttonYellow
        : props.color === "listItem"
        ? ({ theme }) => theme.colors.listItem
        : props.color === "darkBlue"
        ? ({ theme }) => theme.colors.darkBlue
        : "#000"};
  `;

  return <Button>CustomButton</Button>;
};

export default CustomButton;
