import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

const MissionVision = () => {
  const BackgroundContainer = styled.div`
    background: ${({ theme }) => theme.colors.bgPrimary6};
  `;
  const Article = styled.article`
    padding: 120px 10rem;
    display: flex;
    flex-direction: column;
    gap: 60px;
  `;

  const SingleArticle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 40px;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
  `;
  const SingleArticleReverse = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 40px;

    @media (max-width: 1100px) {
      flex-direction: column-reverse;
    }
  `;

  const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
  const Img = styled.div`
    max-width: 50%;
  `;

  return (
    <BackgroundContainer>
      <Article>
        <SingleArticle>
          <TextContainer>
            <Typography
              type="span"
              text="Our Mission"
              color="darkBlue"
            />
            <Typography
              type="h2"
              text="Inspire, Innovate, Share"
              color="darkBlue"
              fontSize="3xl"
              lineHeight={56}
            />
            <Typography
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              color="darkBlue"
              fontWeight={400}
            />
          </TextContainer>
          <Img
            src="./Images/MissionVisionImage1.png"
            alt="Mission Vision 1"
          />
        </SingleArticle>
        <SingleArticleReverse>
          <TextContainer>
            <Typography
              type="span"
              text="Our Vision"
              color="darkBlue"
            />
            <Typography
              type="h2"
              text="Laser focus"
              color="darkBlue"
              fontSize="3xl"
              lineHeight={56}
            />
            <Typography
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              color="darkBlue"
              fontWeight={400}
            />
          </TextContainer>
          <Img
            src="Images/MissionVisionImage2.png"
            alt="Womens at the meeting"
          />
        </SingleArticleReverse>
      </Article>
    </BackgroundContainer>
  );
};

export default MissionVision;
