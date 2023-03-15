import React from "react";
import Typography from "./simpleComponents/Typography";
import { ReactComponent as PointerIcon } from "../commons/assets/icons/PointerIcon.svg";
import Button from "./simpleComponents/Button";
import styled from "styled-components";

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary2};
  width: clamp(350px, 27vw, 500px);
  height: clamp(350px, 35vw, 800px); ;
`;

const PricingCard = () => {
  return (
    <CardContainer>
      <div>
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
      </div>

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

      <div>
        <PointerIcon /> All limited links
      </div>
      <Button
        text="Get started"
        variant="secondary"
      />
    </CardContainer>
  );
};

export default PricingCard;
