import React from "react";
import styled from "styled-components";
import AboutUsSecondPageSectionArticleOne from "./AboutUsSecondPageSectionArticleOne";
import AboutUsSecondPageSectionArticleTwo from "./AboutUsSecondPageSectionArticleTwo";

const AboutUsSecondPageSection = () => {
  const Section = styled.section`
    background: ${({ theme }) => theme.colors.bgPrimary1};
  `;

  return (
    <Section>
      <AboutUsSecondPageSectionArticleOne />
      <AboutUsSecondPageSectionArticleTwo />
    </Section>
  );
};

export default AboutUsSecondPageSection;
