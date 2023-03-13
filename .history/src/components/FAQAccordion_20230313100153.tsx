import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  desc: string;
  index: number;
};

const FAQAccordionQuestionDiv = styled.div`
  display: flex;
  min-width: 843px;
  justify-content: space-between;
  padding-left: 10px;
  padding: 0 0 30px 10px;
  border-bottom: 2px solid #ececf1;
  cursor: pointer;

  :last-of-type {
    border: none;
  }

  :not(:first-child) {
    padding-top: 25px;
  }

  @media (max-width: 1200px) {
    min-width: 100%;
    padding: 0;
  }
`;

const FAQAccordionQuestionDivContentDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 60px;
`;
const FAQAccordionQuestionDivContentDivindex = styled.span`
  font-style: normal;
  max-width: 24px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Royal Blue */

  color: #2405f2;
`;


const FAQ_Accordion = ({ title, desc, index }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const FAQAccordionQuestionAnswer = styled.p`
    padding-top: 20px;
    max-height: ${isActive ? "9999px" : "0px"};
  `;

  return (
    <FAQAccordionQuestionDiv onClick={() => setIsActive((prev) => !prev)}>
      <FAQAccordionQuestionDivContentDiv>
        <FAQAccordionQuestionDivContentDivindex>
          0{index + 1}
        </FAQAccordionQuestionDivContentDivindex>
        <div>
          <h2>{title}</h2>
          <FAQAccordionQuestionAnswer>
            {desc}
            {/*             {isActive ? desc : null}
             */}{" "}
          </FAQAccordionQuestionAnswer>
        </div>
      </FAQAccordionQuestionDivContentDiv>
      {isActive ? <span>&times;</span> : <span>+</span>}
    </FAQAccordionQuestionDiv>
  );
};

export default FAQ_Accordion;
