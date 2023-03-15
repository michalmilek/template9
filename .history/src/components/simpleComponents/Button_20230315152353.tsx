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

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
  variant: ButtonVariants;
}

type ButtonVariants = "primary" | "secondary" | "contactBtn";

const CustomButton = styled.button<ButtonInterface>`
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  font-weight: ${(props) => props.theme.fontSize[600]};
  font-size: ${(props) => props.theme.fontSize.md};
  padding: 15px 51px;
  display: block;
  white-space: nowrap;
  z-index: 10;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.ms};
    padding: 15px 30px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ variant }: { variant: ButtonVariants }) =>
    variant === "primary" &&
    css`
      background: ${({ theme }) => theme.colors.buttonYellow};
      color: ${({ theme }) => theme.colors.bgSecondary1};
    `};

  ${({ variant }: { variant: ButtonVariants }) =>
    variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
  ${({ variant }: { variant: ButtonVariants }) =>
    variant === "contactBtn" &&
    css`
      background: ${({ theme }) => theme.colors.bgSecondary1};
      color: ${({ theme }) => theme.colors.bgPrimary1};
      border: 1px solid ${({ theme }) => theme.colors.bgPrimary3};
      font-weight: 500;
      font-size: 16px;
      padding: 15px 40px;

      :hover {
        transform: none;
        background: ${({ theme }) => theme.colors.bgPrimary1};
        color: ${({ theme }) => theme.colors.bgSecondary1};
      }

      @media (max-width: 768px) {
        display: none;
      }
    `};
`;

const Button = ({ text, ...props }: ButtonInterface) => {
  return <CustomButton {...props}>{text}</CustomButton>;
};

export default Button;
