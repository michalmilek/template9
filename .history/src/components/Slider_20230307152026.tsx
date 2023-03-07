import ArrowsIcon from "icons/ArrowsIcon";
import React from "react";
import styled from "styled-components";

const SliderArticle = styled.article`
  display: flex;
  background: #f4f6fc83;
  flex-direction: row;
  font-family: "Poppins";
  padding: 60px 10rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 20px 20px;
    flex-direction: column;
    gap: 40px;
  }
`;

const SliderArticleSectionOne = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const SliderArticleSectionOneH1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 56px;
  /* or 147% */

  /* Dark blue */

  color: #000;
  opacity: 1;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    /* or 36px */

    /* Dark blue */

    color: #282938;
  }
`;

const SliderArticleSectionOneP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Dark blue */

  color: #282938;

  opacity: 0.7;
`;

const SliderArticleSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 843px;
  gap: 45px;

  @media (max-width: 768px) {
  }
`;

const SliderArticleSectionOneH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* or 150% */

  /* Dark blue */

  color: #282938;

  @media (max-width: 768px) {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    /* or 200% */

    text-align: center;

    /* Dark blue */

    color: #282938;
  }
`;

const SliderArticleSectionTwoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SliderArticleSectionTwoDivDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const SliderArticleSectionTwoDivDivImg = styled.img`
  border-radius: 50%;
`;

const SliderArticleSectionTwoDivDivPerson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const SliderArticleSectionTwoDivDivName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  /* Dark blue */

  color: #282938;
`;
const SliderArticleSectionTwoDivDivJob = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  /* identical to box height, or 233% */

  /* Dark blue */

  color: #282938;
`;

const Slider = () => {
  return (
    <SliderArticle>
      <SliderArticleSectionOne>
        <SliderArticleSectionOneH1>
          What our clients say about us
        </SliderArticleSectionOneH1>
        <SliderArticleSectionOneP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </SliderArticleSectionOneP>
      </SliderArticleSectionOne>
      <SliderArticleSectionTwo>
        <SliderArticleSectionOneH2>
          "The best agency we’ve worked with so far. They understand our product
          and are able to add new features with a great focus."
        </SliderArticleSectionOneH2>
        <SliderArticleSectionTwoDiv>
          <SliderArticleSectionTwoDivDiv>
            <SliderArticleSectionTwoDivDivImg
              src="./Avatar.png"
              alt="avatar"
            />
            <SliderArticleSectionTwoDivDivPerson>
              <SliderArticleSectionTwoDivDivName>
                Jenny Wilson
              </SliderArticleSectionTwoDivDivName>
              <SliderArticleSectionTwoDivDivJob>
                Vice President
              </SliderArticleSectionTwoDivDivJob>
            </SliderArticleSectionTwoDivDivPerson>
          </SliderArticleSectionTwoDivDiv>
          <ArrowsIcon />
        </SliderArticleSectionTwoDiv>
      </SliderArticleSectionTwo>
    </SliderArticle>
  );
};

export default Slider;
