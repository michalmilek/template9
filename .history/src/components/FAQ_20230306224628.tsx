import React, { useState } from "react";
import styled from "styled-components";
import FAQ_Accordion from "./FAQ_Accordion";

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

const FAQ_Article = styled.article`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 60px 10rem;
  font-family: "Poppins";
`;

const FAQ_Article_Section_One = styled.section`
  max-width: 328px;
`;
const FAQ_Article_Section_One_h1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 56px;
  /* or 147% */

  /* Dark blue */

  color: #282938;
`;
const FAQ_Article_Section_One_a = styled.a`
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

const FAQ_Article_Section_Two = styled.section`
  max-width: 843px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: space-between;
`;

const FAQ = () => {
  return (
    <FAQ_Article>
      <FAQ_Article_Section_One>
        <FAQ_Article_Section_One_h1>
          Frequently asked questions
        </FAQ_Article_Section_One_h1>
        <FAQ_Article_Section_One_a href="/">
          Contact us for more info
        </FAQ_Article_Section_One_a>
      </FAQ_Article_Section_One>
      <FAQ_Article_Section_Two>
        {data.map((item, index) => (
          <FAQ_Accordion
            key={item.title}
            title={item.title}
            desc={item.desc}
            index={index}
          />
        ))}
      </FAQ_Article_Section_Two>
    </FAQ_Article>
  );
};

export default FAQ;
