import React from "react";
import styled from "styled-components";
import { Bars } from "@styled-icons/fa-solid/Bars";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

const Finnsweet = "{Finnsweet";

const FullNav = styled.nav`
  display: flex;
  flex-direction: column;
  background: #1c1e53;
  color: #fff;
  padding-bottom: 80px;
  font-family: "Poppins";
  justify-content: center;
  align-items: space-between;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10rem;
  @media (max-width: 640px) {
    padding: 20px 20px;
    justify-content: start;
    gap: 20px;
  } ;
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
  @media (max-width: 640px) {
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
  @media (max-width: 640px) {
    display: none;
  } ;
`;

const WhiteBars = styled(Bars)`
  color: #bbbbcb;
  height: 20px;
  width: 20px;
  display: none;
  @media (max-width: 640px) {
    display: block;
  } ;
`;

const NavDivSectionTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  padding-top: 100px;
  @media (max-width: 640px) {
    padding: 100px 20px 0;
  } ;
`;

const CustomArrowRight = styled(ArrowRight)`
  height: 20px;
  width: 20px;
  color: #fff;
`;

const NavDivSectionTwoOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 582px;
  gap: 35px;

  @media (max-width: 640px) {
    width: 440px;
  } ;
`;

const H1 = styled.h1`
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 54px;
  line-height: 74px;
  font-weight: 600;
  @media (max-width: 640px) {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
  } ;
`;

const P = styled.p`
  text-align: left;
  color: #bbbbcb;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  @media (max-width: 640px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
  } ;
`;

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 50px;
`;

const ViewOurWorkBtn = styled.button`
  background: #fcd980;
  border-radius: 41px;
  color: #000;
  padding: 10px 50px;
  font-family: "Poppins";
`;

const ViewPricingBtn = styled.button`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 16px;
  background: transparent;
  border: none;
  color: #fff;
`;

const NavDivSectionTwoTwo = styled.div`
  @media (max-width: 640px) {
    display: none;
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
      <NavDivSectionTwo>
        <NavDivSectionTwoOne>
          <H1>Building stellar websites for early startups</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </P>
          <ButtonsDiv>
            <ViewOurWorkBtn>View our work</ViewOurWorkBtn>
            <ViewPricingBtn>
              View Pricing <CustomArrowRight />
            </ViewPricingBtn>
          </ButtonsDiv>
        </NavDivSectionTwoOne>
        <NavDivSectionTwoTwo>
          <img
            src="./Illustration.png"
            alt="illustration"
          />
        </NavDivSectionTwoTwo>
      </NavDivSectionTwo>
    </FullNav>
  );
};

export default Navbar;
