import React from "react";
import styled from "styled-components";
import { Bars } from "@styled-icons/fa-solid/Bars";

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

const Button = styled.button`
  border: solid 1px #7d7d7e;
  border-radius: 30px;
  padding: 15px 40px;
  background: transparent;
  color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #1c1e53;
  }

  @media (max-width: 768px) {
    display: none;
  } ;
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
  return (
    <FullNav>
      <NavDiv>
        <WhiteBars />
        <Span>{Finnsweet}</Span>
        <Div>
          <Ul>
            <Li>
              <HomeA href="/">Home</HomeA>
            </Li>
            <Li>
              <A href="#aboutus">About us</A>
            </Li>

            <Li>
              <A href="#features">Features</A>
            </Li>
            <Li>
              <A href="#pricing">Pricing</A>
            </Li>
            <Li>
              <A href="#faq">FAQ</A>
            </Li>
            <Li>
              <A href="#blog">Blog</A>
            </Li>
          </Ul>
          <Button>Contact us</Button>
        </Div>
      </NavDiv>
    </FullNav>
  );
};

export default Navbar;
