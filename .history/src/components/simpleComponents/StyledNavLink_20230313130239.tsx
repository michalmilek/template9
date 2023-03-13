import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = ({ to }: { to: string }) => {
  const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
  })`
    text-decoration: none;
    color: #bbbbcb;
    padding: 0 5px;
    transition: all 0.2s ease;
    :hover {
      color: #fff;
    }

    &.${activeClassName} {
      color: #fff;
    }
  `;

  return (
    <StyledNavLink
      to={to}
      activeClassName="any">
      StyledNavLink
    </StyledNavLink>
  );
};

export default StyledNavLink;
