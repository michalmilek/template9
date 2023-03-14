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

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: ButtonVariants;
}

const CustomButton = styled.button`
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  font-weight: ${(props) => props.theme.fontSize[600]};
  font-size: ${(props) => props.theme.fontSize.md};
  padding: 15px 51px;
  //width: 50%;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: none;
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
      color: ${({ theme }) => theme.colors.bgPrimary1};
      border: 1px solid ${({ theme }) => theme.colors.bgPrimary4};
      font-weight: 500;
      font-size: 16px;
      padding: 15px 40px;

      :hover {
        transform: none;
        background: ${({ theme }) => theme.colors.bgPrimary1};
        color: ${({ theme }) => theme.colors.bgSecondary1};
      }
    `};
`;

const Button = ({ variant, text }: ButtonInterface) => {
  return <CustomButton variant={variant}>{text}</CustomButton>;
};

export default Button;
