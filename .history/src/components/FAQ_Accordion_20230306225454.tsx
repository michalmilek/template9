import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  desc: string;
  index: number;
};

const FAQ_Accordion_QuestionDiv = styled.div`
  display: flex;
  min-width: 843px;
  justify-content: space-between;
  padding-left: 10px;
  padding: 0 0 30px 10px;
  border-bottom: 2px solid #ececf1;
`;

const FAQ_Accordion_QuestionDiv_ContentDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 60px;
`;
const FAQ_Accordion_QuestionDiv_ContentDiv_index = styled.span`
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
  return (
    <FAQ_Accordion_QuestionDiv>
      <FAQ_Accordion_QuestionDiv_ContentDiv>
        <FAQ_Accordion_QuestionDiv_ContentDiv_index>
          0{index + 1}
        </FAQ_Accordion_QuestionDiv_ContentDiv_index>
        <div>
          <h2>{title}</h2>
          <p>{isActive ? desc : null}</p>
        </div>
      </FAQ_Accordion_QuestionDiv_ContentDiv>
      {isActive ? <span>&times;</span> : <span>+</span>}
    </FAQ_Accordion_QuestionDiv>
  );
};

export default FAQ_Accordion;
