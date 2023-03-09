import styled from "styled-components";
import { color } from "styled-system";

import React from "react";

const CustomButton = () => {
  /* font-family: "Poppins";
    display: flex;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    gap: 20px;
    ${color}; */

  /* const Button = styled("button")(
      {
        fontFamily: "Poppins",
        display: 'flex',
        alignItems: 'center',
        background: "transparent",
        border: "none",
        gap: "20px",
        ${color},
        
      },
      variant({
        variants: {
          primary: {
            color: "white",
            bg: "tomato",
          },
          secondary: {
            color: "white",
            bg: "blue",
          },
        },
      })
    ); */

  const Button = styled.button`
    ${color}
  `;

  return <Button>CustomButton</Button>;
};

export default CustomButton;
