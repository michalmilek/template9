import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";
import JohnSmithCEO from "%PUBLIC_URL%/Images/TeamImages/JohnSmithCEO.png";

const data = [
  {
    img: "Images/TeamImages/JohnSmithCEO.png",
    name: "John Smith",
    job: "CEO",
  },
  {
    img: "Images/TeamImages/JohnSmithCEO.png",
    name: "Simon Adams",
    job: "CTO",
  },
  {
    img: "Images/TeamImages/JohnSmithCEO.png",
    name: "Paul Jones",
    job: "Design Lead",
  },
  {
    img: "Images/TeamImages/JohnSmithCEO.png",
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
      <article></article>
    </Section>
  );
};

export default OurTeam;
