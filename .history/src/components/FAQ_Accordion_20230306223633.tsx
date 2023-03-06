import React from "react";

type Props = {
  title: string;
  desc: string;
  index: number;
};

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
