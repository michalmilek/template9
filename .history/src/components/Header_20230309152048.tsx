import React from "react";
import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import ArrowBtn from "./simpleComponents/ArrowBtn";

const Header = () => {
  const NavDivSectionTwo = styled.header`
    position: relative;
    display: flex;
    color: #fff;
    width: 100vw;
    background: #1c1e53;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem 60px;
    padding-top: 100px;
    overflow: hidden;
    @media (max-width: 1100px) {
      padding: 100px 3rem;
    }
    @media (max-width: 768px) {
      padding: 100px 20px;
    }
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

    @media (max-width: 768px) {
      width: 440px;
    } ;
  `;

  const H1 = styled.h1`
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 54px;
    line-height: 74px;
    font-weight: 600;
    z-index: 100;
    @media (max-width: 768px) {
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 150%;
      /* or 48px */

      /* White */

      color: #ffffff;
    } ;
  `;

  const P = styled.p`
    text-align: left;
    color: #bbbbcb;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
    z-index: 100;
    @media (max-width: 768px) {
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
    @media (max-width: 768px) {
      padding: 8px 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 32px;
      /* identical to box height, or 229% */

      /* DARK */

      color: #1b1c2b;
    } ;
  `;

  const ViewPricingBtn = styled.button`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border: none;
    color: #fff;
    z-index: 100;
  `;

  const NavDivSectionTwoTwo = styled.div`
    @media (max-width: 768px) {
      width: 100%;
      overflow: hidden;
    } ;
  `;
  const IllustrationImg = styled.img`
    @media (max-width: 1100px) {
      transform: scale(0.8);
    }
    @media (max-width: 768px) {
      position: absolute;
      left: 25%;
      top: 25%;
      z-index: 0;
      opacity: 0.4;
    } ;
  `;

  return (
    <NavDivSectionTwo>
      <NavDivSectionTwoOne>
        <H1>Building stellar websites for early startups</H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </P>
        <ButtonsDiv>
          <ArrowBtn
            text="View our work"
            borderRadius="md"
            background="buttonYellow"
          />
          <ArrowBtn
            text="View Pricing"
            color="bgPrimary1"
            isArrow
          />
        </ButtonsDiv>
      </NavDivSectionTwoOne>
      <NavDivSectionTwoTwo>
        <IllustrationImg
          src="./Illustration.png"
          alt="illustration"
        />
      </NavDivSectionTwoTwo>
    </NavDivSectionTwo>
  );
};

export default Header;
