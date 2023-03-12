import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

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
    <section>
      <Typography
        text="Meet our team"
        type="h2"
        fontSize="4xl"
        color="darkBlue"
        fontWeight={600}
      />
    </section>
  );
};

export default OurTeam;
