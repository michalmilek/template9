import React from "react";
import styled, { css } from "styled-components";

/* const variantOptions = {
  primary: {
    backgroundColor: ({theme}) => theme.colors.buttonYellow,
    color: ({theme}) => theme.colors.black,
  },
  secondary: {
    backgroundColor: ({theme}) => theme.colors.bgSecondary1,
    color: ({theme}) => theme.colors.bgPrimary1,
  },
}; */

type ButtonVariants = "primary" | "secondary";

const CustomButton = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  font-weight: ${(props) => props.theme.fontSize.md};
  font-size: ${(props) => props.theme.fontSize[600]};
  display: block;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${({ theme }) => theme.colors.buttonYellow};
      color: ${({ theme }) => theme.colors.black};
    `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.colors.bgSecondary1};
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
`;

const Button = ({ variant }: ButtonVariants) => {
  return <CustomButton variant={variant}>Button</CustomButton>;
};

export default Button;
