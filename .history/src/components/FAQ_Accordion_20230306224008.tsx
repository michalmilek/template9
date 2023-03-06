import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  desc: string;
  index: number;
};

const FAQ_Accordion_QuestionDiv = styled.div`
  display: flex;
`;

const FAQ_Accordion_QuestionDiv_ContentDiv = styled.div`
  display: flex;
`;

const FAQ_Accordion = ({ title, desc, index }: Props) => {
  return (
    <FAQ_Accordion_QuestionDiv>
      <FAQ_Accordion_QuestionDiv_ContentDiv>
        <span>0{index + 1}</span>
        <div>
          <h2>{title}+</h2>
          <p>{desc}</p>
        </div>
      </FAQ_Accordion_QuestionDiv_ContentDiv>
      <span>&times;</span>
    </FAQ_Accordion_QuestionDiv>
  );
};

export default FAQ_Accordion;
