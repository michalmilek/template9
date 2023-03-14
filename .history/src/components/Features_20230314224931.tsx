import React from "react";
import styled from "styled-components";
import FeaturesCard from "./FeaturesCard";

import { ReactComponent as TimerIcon } from "../commons/assets/icons/TimerIcon.svg";
import { ReactComponent as UsersIcon } from "../commons/assets/icons/UsersIcon.svg";
import { ReactComponent as TemplateCustomizationIcon } from "../commons/assets/icons/TemplateCustomizationIcon.svg";
import { ReactComponent as SupportIcon } from "../commons/assets/icons/SupportIcon.svg";
import { ReactComponent as HandsOnApproachIcon } from "../commons/assets/icons/HandsOnApproachIcon.svg";
import { ReactComponent as AcceptIcon } from "../commons/assets/icons/AcceptIcon.svg";

const data = [
  {
    title: "Uses Client First",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: <UsersIcon />,
  },
  {
    title: "Two Free Revision Round",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: <AcceptIcon />,
  },
  {
    title: "Template Customization",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: <TemplateCustomizationIcon />,
  },
  {
    title: "24/7 Support",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: <SupportIcon />,
  },
  {
    title: "Quick Delivery",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: <TimerIcon />,
  },
  {
    title: "Hands-on approach",
    desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: <HandsOnApproachIcon />,
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const FeaturesArticleP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;

  /* Dark blue */

  color: #282938;
`;
const FeaturesArticleH1 = styled.h1`
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

const FeaturesArticleCardDiv = styled.section`
  padding-top: 47px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 80px;
  row-gap: 80px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1135px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Features = () => {
  return (
    <FeaturesArticle>
      <FeaturesArticleP>Features</FeaturesArticleP>
      <FeaturesArticleH1>
        Design that solves problems, one product at a time
      </FeaturesArticleH1>

      <FeaturesArticleCardDiv>
        {data.map((card) => (
          <FeaturesCard
            title={card.title}
            desc={card.desc}
            icon={card.icon}
          />
        ))}
      </FeaturesArticleCardDiv>
    </FeaturesArticle>
  );
};

export default Features;
