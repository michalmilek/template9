import React from "react";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import styled from "styled-components";
import AboutUsCard from "./AboutUsCard";

const data = [
  { title: "Strategy" },
  { title: "Wireframing" },
  { title: "Design" },
  { title: "Development" },
];

const AboutUsArticle = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 70px 10rem;
  font-family: "Poppins";
  background: #f4f6fc;
  @media (max-width: 1200px) {
    padding: 70px 3rem;
    gap: 80px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 70px 20px;
    gap: 80px;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  } ;
`;

const SectionOne = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  gap: 20px;
  max-width: 400px;
`;

const SectionOneH2 = styled.article`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
`;

const SectionOneP = styled.article`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Dark blue */

  color: #282938;

  opacity: 0.7;
`;

const GetInTouchBtn = styled.button`
  color: #2405f2;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const CustomArrowRight = styled(ArrowRight)`
  height: 20px;
  width: 20px;
  color: #2405f2;
`;

const SectionTwo = styled.article`
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: left;
  row-gap: 50px;
  column-gap: 60px;
  max-width: 900px;
  padding-right: 10rem;

  @media (max-width: 1400px) {
    padding-right: 0rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  } ;
`;

const AboutUs = () => {
  return (
    <AboutUsArticle>
      <SectionOne>
        <SectionOneH2>How we work</SectionOneH2>
        <SectionOneP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </SectionOneP>
        <GetInTouchBtn>
          Get in touch with us <CustomArrowRight />
        </GetInTouchBtn>
      </SectionOne>
      <SectionTwo>
        {data.map((card, index) => (
          <AboutUsCard
            title={card.title}
            index={index + 1}
            key={card.title}
          />
        ))}
      </SectionTwo>
    </AboutUsArticle>
  );
};

export default AboutUs;
