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

const FAQ_Accordion = ({ title, desc, index }: Props) => {
  return (
    <div>
      <span>0{index + 1}</span>
      <div>
        <h2>{title}+</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FAQ_Accordion;
