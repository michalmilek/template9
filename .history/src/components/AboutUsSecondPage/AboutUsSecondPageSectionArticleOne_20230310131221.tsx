import Typography from "components/simpleComponents/Typography";
import React from "react";
import styled from "styled-components";

const AboutUsSecondPageSectionArticleOne = () => {
  const AboutUsSecondPageArticle1 = styled.article`
    padding: 46px 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
  `;

  const AboutUsSecondPageArticle1Div = styled.div`
    display: flex;
    padding-top: 15px 0 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
  `;
  const StyledTypography = styled(Typography)`
    padding-top: 30px;
  `;

  return (
    <AboutUsSecondPageArticle1>
      <AboutUsSecondPageArticle1Div>
        <Typography
          text="About us"
          fontSize="md"
          type="span"
        />
        <Typography
          text="Our designs solve problems"
          type="h2"
          fontSize="5xl"
          lineHeight={74}
          fontWeight={600}
        />
        <Typography
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
          type="p"
          opacity={0.7}
          color="darkBlue"
          fontWeight={400}
        />
      </AboutUsSecondPageArticle1Div>
      <img
        src="./Images/AboutUsSecondPage/Image1.png"
        alt="Team working in office"
      />
    </AboutUsSecondPageArticle1>
  );
};

export default AboutUsSecondPageSectionArticleOne;
