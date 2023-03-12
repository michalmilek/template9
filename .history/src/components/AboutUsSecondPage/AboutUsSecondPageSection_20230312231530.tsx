import React from "react";
import styled from "styled-components";
import AboutUsSecondPageSectionArticleOne from "./AboutUsSecondPageSectionArticleOne";
import AboutUsSecondPageSectionArticleThree from "./AboutUsSecondPageSectionArticleThree";
import AboutUsSecondPageSectionArticleTwo from "./AboutUsSecondPageSectionArticleTwo";

const AboutUsSecondPageSection = () => {
  const Section = styled.section`
    background: ${({ theme }) => theme.colors.bgPrimary1};
  `;

  return (
    <Section>
      <AboutUsSecondPageSectionArticleOne />
      <AboutUsSecondPageSectionArticleTwo />
      <AboutUsSecondPageSectionArticleThree />
    </Section>
  );
};

export default AboutUsSecondPageSection;
