import React from "react";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import styled from "styled-components";
import { Section } from "styled-icons/fa-solid";
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

const SectionOne_H2 = styled.article`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
`;

const SectionOne_P = styled.article`
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: left;
  row-gap: 50px;
  column-gap: 60px;
  max-width: 900px;
  padding-right: 10rem;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  } ;
`;

const AboutUs = () => {
  return (
    <AboutUsArticle>
      <SectionOne>
        <SectionOne_H2>How we work</SectionOne_H2>
        <SectionOne_P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </SectionOne_P>
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
