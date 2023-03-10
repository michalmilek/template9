import React from "react";
import styled from "styled-components";
import AboutUsSecondPageSectionArticleOne from "./AboutUsSecondPageSectionArticleOne";

const AboutUsSecondPageSection = () => {
  const Section = styled.section`
    background: ${({ theme }) => theme.colors.bgPrimary1};
  `;

  return (
    <Section>
      <AboutUsSecondPageSectionArticleOne />
    </Section>
  );
};

export default AboutUsSecondPageSection;
