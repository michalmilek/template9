import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

const TeamCard = ({ img, name, job }: TeamCard) => {
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: ${({ theme }) => theme.colors.bgPrimary1};
    padding: 30px 40px;
    min-width: 296px;
  `;
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `;
  return (
    <CardContainer>
      <img
        src={img}
        alt={name}
      />
      <div>
        <Typography
          text={name}
          type="h3"
          color="darkBlue"
          fontSize="2xl"
        />
        <Typography
          text={job}
          type="p"
          color="darkBlue"
          opacity={0.7}
          fontWeight={400}
        />
      </div>
    </CardContainer>
  );
};

export default TeamCard;
