import React from "react";
import styled from "styled-components";

const Finnsweet = "{Finnsweet";

const Nav = styled.li`
  display: flex;
  background: #1c1e53;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
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
`;

const Li = styled.li`
  color: #bbbbcb;
  text-decoration: none;
`;
const A = styled.a`
  text-decoration: none;
  color: #bbbbcb;
  padding: 4px 5px;
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
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
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
    </Nav>
  );
};

export default Navbar;
