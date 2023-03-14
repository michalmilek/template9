import React from "react";
import { ReactComponent as ArrowIcon } from "../../commons/assets/icons/ArrowIcon.svg";
import styled, { css } from "styled-components";

type AnchorVariants = "white" | "gold" | "black" | "blue";

interface ArrowAnchorInterface
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "white" | "gold" | "black" | "blue";
  isArrow?: boolean;
  text: string;
}

const CustomArrowAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "white" &&
    css`
      background: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "blue" &&
    css`
      background: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.RoyalBlue};
      font-size: ${({ theme }) => theme.colors.md};
    `};
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "black" &&
    css`
      background: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.darkBlue};
    `};
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "gold" &&
    css`
      background: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.buttonYellow};
    `};
`;

const StyledIcon = styled(ArrowIcon)`
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "white" &&
    css`
      fill: ${({ theme }) => theme.colors.bgPrimary1};
    `};
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "blue" &&
    css`
      fill: ${({ theme }) => theme.colors.RoyalBlue};
    `};
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "black" &&
    css`
      fill: ${({ theme }) => theme.colors.darkBlue};
    `};
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "gold" &&
    css`
      fill: ${({ theme }) => theme.colors.buttonYellow};
    `};
`;

const ArrowAnchor = ({ text, isArrow, ...rest }: ArrowAnchorInterface) => {
  return (
    <CustomArrowAnchor {...rest}>
      {text}
      {isArrow && <StyledIcon />}
    </CustomArrowAnchor>
  );
};

export default ArrowAnchor;
