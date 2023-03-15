import { ReactComponent as ArrowsIcon } from "../commons/assets/icons/ArrowsIcon.svg";
import React, { useEffect, useRef, useState } from "react";
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
  max-width: 100vw;
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
    //align-content: start;
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
  justify-content: center;
  gap: 45px;

  @media (max-width: 768px) {
    padding: 0 20px;
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

  gap: 40px;

  @media (max-width: 1100px) {
    padding: 0 10rem;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  @media (max-width: 600px) {
    padding: 0 15rem;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  @media (max-width: 400px) {
    padding: 0 16rem;
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

const ArrowLDisabled = styled(ArrowLSlider)`
  cursor: pointer;
  transition: all 0.15s ease;

  :hover {
    transform: scale(1.1);
  }
`;
const ArrowRDisabled = styled(ArrowLSlider)`
  cursor: pointer;
  transition: all 0.15s ease;
  rotate: 180deg;

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
const ArrowL = styled(ArrowRSlider)`
  cursor: pointer;
  transition: all 0.15s ease;
  rotate: 180deg;

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const amount = data.length;

  useEffect(() => {
    console.log(currentIndex);
    console.log(amount);
  }, [currentIndex]);

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
          beforeChange={(currentSlide, nextSlide) => {
            setCurrentIndex(nextSlide);
          }}
          {...settings}>
          {data.map((item) => (
            <SliderArticleSectionTwoDivDivPerson>
              <Typography
                text={item.quote}
                type="h2"
                fontSize="2xl"
                fontWeight={500}
                lineHeight={56}
                mobileFontSize="xl"
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
                    mobileFontSize="ms"
                  />
                  <Typography
                    type="h4"
                    text={item.job}
                    fontSize="s"
                    mobileFontSize="s"
                  />
                </div>
              </SliderArticleSectionTwoDivDiv>
            </SliderArticleSectionTwoDivDivPerson>
          ))}
        </Slider>
        <ArrowContainer>
          {currentIndex === 0 ? (
            <ArrowLDisabled onClick={() => slider?.current?.slickPrev()} />
          ) : (
            <ArrowL onClick={() => slider?.current?.slickPrev()} />
          )}
          <ArrowR
            amount={amount}
            currentIndex={currentIndex}
            onClick={() => slider?.current?.slickNext()}
          />
        </ArrowContainer>
      </SliderArticleSectionTwo>
    </SliderArticle>
  );
};

export default SliderPart;
