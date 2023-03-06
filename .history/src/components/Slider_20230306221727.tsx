import React from "react";
import styled from "styled-components";

const SliderArticle = styled.article`
  display: flex;
  background: #f4f6fc83;
  font-family: "Poppins";
  padding: 60px 10rem;
  justify-content: space-between;
`;

const SliderArticleSectionOne = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SliderArticleSectionOne_h1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 56px;
  /* or 147% */

  /* Dark blue */

  color: #000;
  opacity: 1;
`;

const SliderArticleSectionOne_p = styled.p`
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
  gap: 40px;
`;

const SliderArticleSectionOne_h2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* or 150% */

  /* Dark blue */

  color: #282938;
`;

const SliderArticleSectionTwo_div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SliderArticleSectionTwo_divDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const SliderArticleSectionTwo_divDiv_Img = styled.img`
  border-radius: 50%;
`;

const SliderArticleSectionTwo_divDiv_person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const SliderArticleSectionTwo_divDiv_name = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  /* Dark blue */

  color: #282938;
`;
const SliderArticleSectionTwo_divDiv_job = styled.h4`
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
        <SliderArticleSectionOne_h1>
          What our clients say about us
        </SliderArticleSectionOne_h1>
        <SliderArticleSectionOne_p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </SliderArticleSectionOne_p>
      </SliderArticleSectionOne>
      <SliderArticleSectionTwo>
        <SliderArticleSectionOne_h2>
          "The best agency we’ve worked with so far. They understand our product
          and are able to add new features with a great focus."
        </SliderArticleSectionOne_h2>
        <SliderArticleSectionTwo_div>
          <SliderArticleSectionTwo_divDiv>
            <SliderArticleSectionTwo_divDiv_Img
              src="./Avatar.png"
              alt="avatar"
            />
            <SliderArticleSectionTwo_divDiv_person>
              <SliderArticleSectionTwo_divDiv_name>
                Jenny Wilson
              </SliderArticleSectionTwo_divDiv_name>
              <SliderArticleSectionTwo_divDiv_job>
                Vice President
              </SliderArticleSectionTwo_divDiv_job>
            </SliderArticleSectionTwo_divDiv_person>
          </SliderArticleSectionTwo_divDiv>
          <img
            src="./Arrows.png"
            alt="arrows"
          />
        </SliderArticleSectionTwo_div>
      </SliderArticleSectionTwo>
    </SliderArticle>
  );
};

export default Slider;
