import React from "react";
import styled from "styled-components";
import { Bars } from "@styled-icons/fa-solid/Bars";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "router/ROUTES";
import Button from "./simpleComponents/Button";
import { useNavigate } from "react-router-dom";

const Finnsweet = "{Finnsweet";

const FullNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1c1e53;
  color: #fff;
  font-family: "Poppins";
  justify-content: center;
  align-items: space-between;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10rem;
  @media (max-width: 1100px) {
    padding: 20px 3rem;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    justify-content: start;
    gap: 20px;
  }
`;

const Span = styled.span`
  color: #fff;
  font-size: 1.3rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Li = styled.li`
  color: #bbbbcb;
  text-decoration: none;

  @media (max-width: 900px) {
    font-size: 12px;
  } ;
`;
const A = styled.a`
  text-decoration: none;
  color: #bbbbcb;
  padding: 0 5px;
  transition: all 0.2s ease;
  :hover {
    color: #fff;
  }
`;

const HomeA = styled.a`
  text-decoration: none;
  color: #fff;
`;

const WhiteBars = styled(Bars)`
  color: #bbbbcb;
  height: 20px;
  width: 20px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  } ;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #bbbbcb;
    padding: 0 5px;
    transition: all 0.2s ease;
    :hover {
      color: #fff;
    }
    &.active {
      color: #fff;
    }
  `;
  return (
    <FullNav>
      <NavDiv>
        <WhiteBars />
        <Span>{Finnsweet}</Span>
        <Div>
          <Ul>
            <Li>
              <StyledLink to={ROUTES.HOME}>Home</StyledLink>
            </Li>
            <Li>
              <StyledLink to={ROUTES.ABOUTUS}>About Us</StyledLink>
            </Li>

            <Li>
              <StyledLink to={ROUTES.PRICING}>Pricing</StyledLink>
            </Li>
            <Li>
              <A href="#pricing">Features</A>
            </Li>
            <Li>
              <A href="#faq">FAQ</A>
            </Li>
            <Li>
              <A href="#blog">Blog</A>
            </Li>
          </Ul>
          <Link to={ROUTES.CONTACTUS}>
            <Button
              text="Contact us"
              variant="contactBtn"
            />
          </Link>
        </Div>
      </NavDiv>
    </FullNav>
  );
};

export default Navbar;
