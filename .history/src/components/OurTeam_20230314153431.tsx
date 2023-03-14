import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";
import TeamCard from "./TeamCard";

const data = [
  {
    img: "Images/TeamImages/JohnSmithCEO.png",
    name: "John Smith",
    job: "CEO",
  },
  {
    img: "Images/TeamImages/SimonAdamsCTO.png",
    name: "Simon Adams",
    job: "CTO",
  },
  {
    img: "Images/TeamImages/PaulJonesDesignLead.png",
    name: "Paul Jones",
    job: "Design Lead",
  },
  {
    img: "Images/TeamImages/SaraHardinPM.png",
    name: "Sara Hardin",
    job: "Project Manager",
  },
];

const OurTeam = () => {
  const Section = styled.section`
    background: ${({ theme }) => theme.colors.bgPrimary2};
    padding: 120px 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 120px;
    width: 100%;

    @media (max-width: 1400px) {
      padding: 120px 3rem;
    }

    @media (max-width: 768px) {
      padding: 120px 20px;
    }
  `;

  const Article = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    width: 100%;

    @media (max-width: 1400px) {
      display: grid;
      justify-content: space-between;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    }
  `;

  return (
    <Section>
      <Typography
        text="Meet our team"
        type="h2"
        fontSize="4xl"
        color="darkBlue"
        fontWeight={600}
      />
      <Article>
        {data.map((item) => (
          <TeamCard
            img={item.img}
            name={item.name}
            job={item.job}
          />
        ))}
      </Article>
    </Section>
  );
};

export default OurTeam;
