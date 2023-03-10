import Typography from "components/simpleComponents/Typography";
import React from "react";
import styled from "styled-components";
import { ReactComponent as ProcessCardHeader } from "../../commons/assets/icons/ProcessCardHeader.svg";

const AboutUsSecondPageCard = () => {
  const CardDiv = styled.div`
    max-width: 272px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const CardDivTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;
  return (
    <CardDiv>
      <ProcessCardHeader />

      <div>
        <Typography
          type="h4"
          text="Planning"
          fontSize="xl"
          color="darkBlue"
        />
        <Typography
          type="p"
          color="darkBlue"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          opacity={0.7}
        />
      </div>
    </CardDiv>
  );
};

export default AboutUsSecondPageCard;
