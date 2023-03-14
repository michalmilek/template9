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
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  font-weight: ${(props) => props.theme.fontSize[600]};
  font-size: ${(props) => props.theme.fontSize.md};
  padding: 12px 26px;
  width: 50%;
  display: block;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${({ theme }) => theme.colors.buttonYellow};
      color: ${({ theme }) => theme.colors.bgSecondary1};
    `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.colors.bgSecondary1};
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
  ${(props) =>
    props.variant === "contactBtn" &&
    css`
      background: ${({ theme }) => theme.colors.bgSecondary1};
      color: ${({ theme }) => theme.colors.darkBlue};
    `};
`;

const Button = ({ variant }: { variant: ButtonVariants }) => {
  return <CustomButton variant={variant}>Button</CustomButton>;
};

export default Button;
