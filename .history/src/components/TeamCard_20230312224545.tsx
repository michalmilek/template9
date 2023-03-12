import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

const TeamCard = ({ img, name, job }: TeamCard) => {
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  `;
  return (
    <CardContainer>
      <img
        src={img}
        alt={name}
      />
      <Typography
        text={name}
        type="h3"
        color="darkBlue"
      />
      <Typography
        text={job}
        type="p"
        color="darkBlue"
        opacity={0.7}
      />
    </CardContainer>
  );
};

export default TeamCard;
