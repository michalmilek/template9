import React from "react";
import Typography from "./simpleComponents/Typography";
import { ReactComponent as HandsOnApproachIcon } from "../commons/assets/icons/HandsOnApproachIcon.svg";
import { ReactComponent as TemplateCustomizationIcon } from "../commons/assets/icons/TemplateCustomizationIcon.svg";
import { ReactComponent as UsersIcon } from "../commons/assets/icons/UsersIcon.svg";
import FeaturesCard from "./FeaturesCard";
import styled from "styled-components";

const data = [
  {
    icon: <HandsOnApproachIcon />,
    title: "The benefits of working with us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: <TemplateCustomizationIcon />,
    title: "The benefits of working with us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: <UsersIcon />,
    title: "The benefits of working with us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
];

const WorkingWithUs = () => {
  const Section = styled.section`
    padding: 60px 10rem;
  `;

  const CardArticle = styled.article`
    display: flex;
    gap: 30px;
  `;

  return (
    <Section>
      <Typography
        text={`The benefits of working with us`}
        type="h2"
        fontSize="4xl"
        lineHeight={56}
        color="darkBlue"
      />
      <CardArticle>
        {data.map((item) => (
          <FeaturesCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
            background="grey"
          />
        ))}
      </CardArticle>
    </Section>
  );
};

export default WorkingWithUs;
