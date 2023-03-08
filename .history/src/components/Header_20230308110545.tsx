import React from "react";

const Header = () => {
  return (
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
        <IllustrationImg
          src="./Illustration.png"
          alt="illustration"
        />
      </NavDivSectionTwoTwo>
    </NavDivSectionTwo>
  );
};

export default Header;
