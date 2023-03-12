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
    padding: 60px 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
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
      <article>
        {data.map((item) => (
          <TeamCard
            img={item.img}
            name={item.name}
            job={item.job}
          />
        ))}
      </article>
    </Section>
  );
};

export default OurTeam;
