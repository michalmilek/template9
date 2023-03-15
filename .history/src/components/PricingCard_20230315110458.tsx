import React from "react";
import Typography from "./simpleComponents/Typography";
import { ReactComponent as PointerIcon } from "../commons/assets/icons/PointerIcon.svg";
import Button from "./simpleComponents/Button";
import styled, { css } from "styled-components";

type CardVariants = "primary" | "secondary";

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary2};
  width: clamp(300px, 27vw, 400px);
  height: clamp(500px, 35vw, 800px);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  ${({ variant }: { variant?: CardVariants }) =>
    variant === "secondary" &&
    css`
      background: ${({ theme }) => theme.colors.cardSecondary};
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
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
  z-index: 10;
`;

const ListItemAvailable = styled.ul`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ variant }: { variant?: CardVariants }) =>
    variant === "secondary" &&
    css`
      color: ${({ theme }) => theme.colors.bgPrimary1};
    `};
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

const CircleDiv = styled.div`
  background: ${({ theme }) => theme.colors.cardSecondaryCircle};
  height: 2000px;
  width: 2000px;
  border-radius: 50%;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const PricingCard = ({ variant }: any) => {
  return (
    <CardContainer variant={variant}>
      <TitleContainer>
        <Typography
          type="h2"
          text="$299"
          color={variant === "secondary" ? "bgPrimary1" : "darkBlue"}
          fontSize="3xl"
          fontWeight={600}
        />
        <Typography
          type="span"
          text="Per Design"
          color={variant === "secondary" ? "buttonYellow" : "RoyalBlue"}
          fontWeight={400}
        />
      </TitleContainer>

      <Typography
        type="h3"
        fontSize="xl"
        text="Landing Page"
        color={variant === "secondary" ? "bgPrimary1" : "darkBlue"}
      />
      <Typography
        type="p"
        text="When you’re ready to go beyond prototyping in Figma, "
        color={variant === "secondary" ? "bgPrimary1" : "darkBlue"}
        lineHeight={28}
        opacity={0.7}
      />

      <ListContainer>
        <ListItemAvailable variant="secondary">
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
        variant={variant === "secondary" ? "primary" : "secondary"}
      />
      <CircleDiv />
    </CardContainer>
  );
};

export default PricingCard;
