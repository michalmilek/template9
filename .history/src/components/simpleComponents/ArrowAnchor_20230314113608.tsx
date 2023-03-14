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
  ${({ variant }: { variant: AnchorVariants }) =>
    variant === "white" &&
    css`
      background: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.bgSecondary1};
    `};
`;

const StyledIcon = styled(ArrowIcon)`
  fill: ${getColor(color)};
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
