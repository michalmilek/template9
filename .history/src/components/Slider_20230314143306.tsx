import { ReactComponent as ArrowsIcon } from "../commons/assets/icons/ArrowsIcon.svg";
import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import { ReactComponent as ArrowLSlider } from "../commons/assets/icons/ArrowLSlider.svg";
import { ReactComponent as ArrowRSlider } from "../commons/assets/icons/ArrowRSlider.svg";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Typography from "./simpleComponents/Typography";

const SliderArticle = styled.article`
  display: flex;
  background: #f4f6fc83;
  flex-direction: row;
  font-family: "Poppins";
  max-width: 100%;
  overflow: hidden;
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
  position: relative;
  max-width: 843px;
  gap: 45px;

  @media (max-width: 768px) {
    padding: 0 8rem;
  }
`;

const SliderArticleSectionTwoDivDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  align-items: center;
  justify-content: start;
  @media (max-width: 768px) {
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
  justify-content: space-between;
  max-width: 100%;

  gap: 40px;

  @media (max-width: 768px) {
    max-width: 400px;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 80%;
  right: 0%;

  @media (max-width: 1100px) {
    margin-top: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    top: auto;
    right: auto;
  }
`;

const ArrowL = styled(ArrowLSlider)`
  cursor: pointer;
  transition: all 0.15s ease;

  :hover {
    transform: scale(1.1);
  }
`;

const ArrowR = styled(ArrowRSlider)`
  cursor: pointer;
  transition: all 0.15s ease;

  :hover {
    transform: scale(1.1);
  }
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
      '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    img: "./images/Avatar.png",
    name: "Jenny Wilson",
    job: "Vice president",
  },
  {
    quote:
      '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    img: "./images/Avatar.png",
    name: "Jenny Wilson",
    job: "Vice president",
  },
  {
    quote:
      '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    img: "./images/Avatar.png",
    name: "Jenny Wilson",
    job: "Vice president",
  },
];

const SliderPart = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = useRef<any>(null);
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
        <Slider
          ref={slider}
          {...settings}>
          {data.map((item) => (
            <SliderArticleSectionTwoDivDivPerson>
              <Typography
                text={item.quote}
                type="h2"
                fontSize="2xl"
                fontWeight={500}
                lineHeight={56}
              />
              <SliderArticleSectionTwoDivDiv>
                <SliderArticleSectionTwoDivDivImg
                  src={item.img}
                  alt={item.name}
                />
                <div>
                  <Typography
                    type="h3"
                    text={item.name}
                    fontSize="md"
                  />
                  <Typography
                    type="h4"
                    text={item.job}
                    fontSize="s"
                  />
                </div>
              </SliderArticleSectionTwoDivDiv>
            </SliderArticleSectionTwoDivDivPerson>
          ))}
        </Slider>
        <ArrowContainer>
          <ArrowL onClick={() => slider?.current?.slickPrev()} />
          <ArrowR onClick={() => slider?.current?.slickNext()} />
        </ArrowContainer>
      </SliderArticleSectionTwo>
    </SliderArticle>
  );
};

export default SliderPart;
