import Typography from "components/simpleComponents/Typography";
import React from "react";
import styled from "styled-components";

const AboutUsSecondPageSectionArticleTwo = () => {
  const Div = styled.div`
    padding: 60px 10rem;
  `;
  const Article = styled.article`
    background: ${({ theme }) => theme.colors.bgPrimary5};
    display: flex;
    flex-direction: column;
  `;

  const ArticleDiv = styled.div`
    padding: 60px 60px 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
  const ArticleDivDiv = styled.div`
    display: flex;
  `;
  return (
    <Div>
      <Article>
        <ArticleDiv>
          <Typography
            text="Who we are"
            type="span"
            color="darkBlue"
          />
          <div>
            <Typography
              text="Goal focussed"
              type="h3"
              fontSize="3xl"
              color="darkBlue"
              fontWeight={600}
            />
            <Typography
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              type="p"
              lineHeight={28}
              color="darkBlue"
              opacity={0.7}
            />
          </div>
          <div>
            <Typography
              text="Goal focussed"
              type="h3"
              fontSize="3xl"
              color="darkBlue"
              fontWeight={600}
            />
            <Typography
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              type="p"
              lineHeight={28}
              color="darkBlue"
              opacity={0.7}
            />
          </div>
        </ArticleDiv>
        <img
          src="./Images/AboutUsSecondPage/ObjectivesPhoto.png"
          alt="Leader targetting objectives"
        />
      </Article>
    </Div>
  );
};

export default AboutUsSecondPageSectionArticleTwo;
