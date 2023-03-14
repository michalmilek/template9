import { ReactComponent as ArrowsIcon } from "../commons/assets/icons/ArrowsIcon.svg";
import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import { ReactComponent as ArrowLSlider } from "../commons/assets/icons/ArrowLSlider.svg";
import { ReactComponent as ArrowRSlider } from "../commons/assets/icons/ArrowRSlider.svg";

const SliderArticle = styled.article`
  display: flex;
  background: #f4f6fc83;
  flex-direction: row;
  font-family: "Poppins";
  max-width: 100%;
  padding: 60px 10rem;
  gap: 60px;
  justify-content: space-between;
  @media (max-width: 1300px) {
    padding: 60px 3rem;
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
  @media (max-width: 900px) {
    padding: 60px 20px;
    align-content: start;
    flex-direction: column;
    gap: 70px;
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
    padding: 0 8rem;
  }
`;

const SliderArticleSectionOneH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  flex-wrap: wrap;
  /* or 150% */

  /* Dark blue */

  color: #282938;

  @media (max-width: 1500px) {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    /* or 200% */

    text-align: center;

    /* Dark blue */

    color: #282938;
  }
  @media (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    max-width: 80%;
  }
`;

const SliderArticleSectionTwoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 10rem;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;
const SliderArticleSectionTwoDivDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
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

interface Data {
  quote: string;
  img: string;
  name: string;
  job: string;
}

const data: Data[] = [
  {
    quote:
      "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    img: "./images/Avatar.png",
    name: "Jenny Wilson",
    job: "Vice president",
  },
  {
    quote:
      "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    img: "./images/Avatar.png",
    name: "Jenny Wilson",
    job: "Vice president",
  },
  {
    quote:
      "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    img: "./images/Avatar.png",
    name: "Jenny Wilson",
    job: "Vice president",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const SliderPart = () => {
  const slider = useRef(null);
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
        <SliderArticleSectionOneH2>{data[0].quote}</SliderArticleSectionOneH2>
        <Slider
          ref={slider}
          {...settings}>
          {data.map((item) => (
            <>
              <SliderArticleSectionTwoDiv>
                <SliderArticleSectionTwoDivDiv>
                  <SliderArticleSectionTwoDivDivImg
                    src={item.img}
                    alt="avatar"
                  />
                  <SliderArticleSectionTwoDivDivPerson>
                    <SliderArticleSectionTwoDivDivName>
                      {item.name}
                    </SliderArticleSectionTwoDivDivName>
                    <SliderArticleSectionTwoDivDivJob>
                      {item.job}
                    </SliderArticleSectionTwoDivDivJob>
                  </SliderArticleSectionTwoDivDivPerson>
                </SliderArticleSectionTwoDivDiv>
              </SliderArticleSectionTwoDiv>
            </>
          ))}
        </Slider>
        <ArrowLSlider />
        <ArrowRSlider />
      </SliderArticleSectionTwo>
    </SliderArticle>
  );
};

export default SliderPart;
