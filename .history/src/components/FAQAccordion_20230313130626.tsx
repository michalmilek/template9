import React, { useState } from "react";
import styled, { css } from "styled-components";
import { height } from "styled-system";

type Props = {
  title: string;
  desc: string;
  index: number;
};

interface FAQAccordionQuestionAnswerProps {
  isActive: boolean;
}

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
  const FAQAccordionQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0, 1, 0, 1);
  `;

  const FAQAccordionQuestionAnswer = styled.p<FAQAccordionQuestionAnswerProps>`
    padding-top: 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.6s ease;
    opacity: 0;

    ${FAQAccordionQuestionDiv}:hover & {
      max-height: 9999px;
      opacity: 1;
    }
  `;

  return (
    <FAQAccordionQuestionDiv onClick={() => setIsActive((prev) => !prev)}>
      <FAQAccordionQuestionDivContentDiv>
        <FAQAccordionQuestionDivContentDivindex>
          0{index + 1}
        </FAQAccordionQuestionDivContentDivindex>
        <FAQAccordionQuestionContainer>
          <h2>{title}</h2>
          <FAQAccordionQuestionAnswer isActive={isActive}>
            {desc}
          </FAQAccordionQuestionAnswer>
        </FAQAccordionQuestionContainer>
      </FAQAccordionQuestionDivContentDiv>
      {isActive ? <span>&times;</span> : <span>+</span>}
    </FAQAccordionQuestionDiv>
  );
};

export default FAQ_Accordion;
