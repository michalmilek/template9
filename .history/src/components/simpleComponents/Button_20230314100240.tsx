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

type ButtonVariants = "primary" | "secondary" | "contactBtn";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: ButtonVariants;
}

const CustomButton = styled.button`
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  font-weight: ${(props) => props.theme.fontSize[600]};
  font-size: ${(props) => props.theme.fontSize.md};
  padding: 12px 26px;
  width: 50%;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  ${({ variant }: { variant: ButtonVariants }) =>
    variant === "primary" &&
    css`
      background: ${({ theme }) => theme.colors.buttonYellow};
      color: ${({ theme }) => theme.colors.bgSecondary1};
    `};

  ${({ variant }: { variant: ButtonVariants }) =>
    variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.colors.bgSecondary1};
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
  ${({ variant }: { variant: ButtonVariants }) =>
    variant === "contactBtn" &&
    css`
      background: ${({ theme }) => theme.colors.bgSecondary1};
      color: ${({ theme }) => theme.colors.darkBlue};
    `};
`;

const Button = ({ variant }: { variant: ButtonVariants }) => {
  return (
    <CustomButton
      variant={variant}
      text>
      Button
    </CustomButton>
  );
};

export default Button;