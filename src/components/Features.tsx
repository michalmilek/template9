import React from "react";
import styled from "styled-components";
import FeaturesCard from "./FeaturesCard";

const data = [
  {
    title: "Uses Client First",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    title: "Two Free Revision Round",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    title: "Template Customization",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    title: "24/7 Support",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    title: "Quick Delivery",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    title: "Hands-on approach",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
];

const FeaturesArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 10rem;
  background: #f4f6fc;
  font-family: "Poppins";
`;

const FeaturesArticle_p = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;

  /* Dark blue */

  color: #282938;
`;
const FeaturesArticle_h1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  /* or 133% */
  max-width: 630px;

  text-align: center;

  /* Dark blue */

  color: #282938;
`;

const FeaturesArticle_CardDiv = styled.section`
  padding-top: 47px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 24px;
`;

const Features = () => {
  return (
    <FeaturesArticle>
      <FeaturesArticle_p>Features</FeaturesArticle_p>
      <FeaturesArticle_h1>
        Design that solves problems, one product at a time
      </FeaturesArticle_h1>

      <FeaturesArticle_CardDiv>
        {data.map((card) => (
          <FeaturesCard
            title={card.title}
            desc={card.desc}
          />
        ))}
      </FeaturesArticle_CardDiv>
    </FeaturesArticle>
  );
};

export default Features;
