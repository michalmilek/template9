import React from "react";
import Typography from "./simpleComponents/Typography";
import { ReactComponent as PointerIcon } from "../commons/assets/icons/PointerIcon.svg";
import Button from "./simpleComponents/Button";
import styled from "styled-components";

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary2};
  width: clamp(300px, 27vw, 400px);
  height: clamp(500px, 35vw, 800px);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
  margin-bottom: 40px;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 60px 0;
`;

const ListItemAvailable = styled.ul`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledPointerIconAvailable = styled(PointerIcon)`
  fill: ${({ theme }) => theme.colors.greenIcon};
`;

const ListItemUnavailable = styled.ul`
  color: ${({ theme }) => theme.colors.darkBlue};
  opacity: 0.7;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledPointerIconUnavailable = styled(PointerIcon)`
  fill: ${({ theme }) => theme.colors.darkBlue};
  opacity: 0.7;
`;

const PricingCard = () => {
  return (
    <CardContainer>
      <TitleContainer>
        <Typography
          type="h2"
          text="$299"
          fontSize="3xl"
          fontWeight={600}
        />
        <Typography
          type="span"
          text="Per Design"
          color="RoyalBlue"
          fontWeight={400}
        />
      </TitleContainer>

      <Typography
        type="h3"
        fontSize="xl"
        text="Landing Page"
        color="darkBlue"
      />
      <Typography
        type="p"
        text="When you’re ready to go beyond prototyping in Figma, "
        color="darkBlue"
        opacity={0.7}
      />

      <ListContainer>
        <ListItemAvailable>
          <StyledPointerIconAvailable /> All limited links
        </ListItemAvailable>
        <ListItemAvailable>
          <StyledPointerIconAvailable /> All limited links
        </ListItemAvailable>
        <ListItemAvailable>
          <StyledPointerIconAvailable /> All limited links
        </ListItemAvailable>
        <ListItemUnavailable>
          <StyledPointerIconUnavailable /> All limited links
        </ListItemUnavailable>
      </ListContainer>
      <Button
        text="Get started"
        variant="secondary"
      />
    </CardContainer>
  );
};

export default PricingCard;
