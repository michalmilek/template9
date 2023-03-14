import React from "react";
import Typography from "./simpleComponents/Typography";
import { ReactComponent as HandsOnApproachIcon } from "../commons/assets/icons/HandsOnApproachIcon.svg";
import { ReactComponent as TemplateCustomizationIcon } from "../commons/assets/icons/TemplateCustomizationIcon.svg";
import { ReactComponent as UsersIcon } from "../commons/assets/icons/UsersIcon.svg";
import FeaturesCard from "./FeaturesCard";
import styled from "styled-components";

  const HandsOnApproachIconStyled = styled(HandsOnApproachIcon)`
    height: 30px;
    width: 30px;
  `;

  const data = [
    {
      icon: <HandsOnApproachIconStyled />,
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
    `;

    const CardArticle = styled.article`
      display: flex;
      gap: 30px;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 1400px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
      }
      @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: space-between;
      }
    `;
    const Img = styled.img`
      width: 100%;
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
        <Img
          src="./Images/Clients.png"
          alt="Clients"
        />
      </Section>
    );
  };

export default WorkingWithUs;
