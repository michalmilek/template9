import React from "react";
import styled from "styled-components";
import FAQAccordion from "./FAQAccordion";

const data = [
  {
    title: "How much time does it take?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "What is your class naming convention?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "How do you communicate?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "I have a bigger project. Can you handle it?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "What is your class naming convention?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQArticle = styled.article`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 60px 10rem;
  font-family: "Poppins";
`;

const FAQArticleSectionOne = styled.section`
  max-width: 328px;
`;
const FAQArticleSectionOneH1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 56px;
  /* or 147% */

  /* Dark blue */

  color: #282938;
`;
const FAQArticleSectionOneA = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  text-decoration: none;
  /* identical to box height, or 178% */

  text-align: center;

  /* Royal Blue */

  color: #2405f2;

  opacity: 0.87;
`;

const FAQArticle_SectionTwo = styled.section`
  max-width: 843px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: space-between;
  gap: 10px;
`;

const FAQ = () => {
  return (
    <FAQArticle>
      <FAQArticleSectionOne>
        <FAQArticleSectionOneH1>
          Frequently asked questions
        </FAQArticleSectionOneH1>
        <FAQArticleSectionOneA href="/">
          Contact us for more info
        </FAQArticleSectionOneA>
      </FAQArticleSectionOne>
      <FAQArticle_SectionTwo>
        {data.map((item, index) => (
          <FAQAccordion
            key={item.title}
            title={item.title}
            desc={item.desc}
            index={index}
          />
        ))}
      </FAQArticle_SectionTwo>
    </FAQArticle>
  );
};

export default FAQ;