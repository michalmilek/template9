import Typography from "components/simpleComponents/Typography";
import React from "react";
import styled from "styled-components";
import { ReactComponent as ProcessCardHeader } from "../../commons/assets/icons/ProcessCardHeader.svg";

const AboutUsSecondPageCard = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  const CardDiv = styled.div`
    max-width: 272px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const CardDivTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;
  return (
    <CardDiv>
      <ProcessCardHeader />

      <CardDivTextDiv>
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
      </CardDivTextDiv>
    </CardDiv>
  );
};

export default AboutUsSecondPageCard;
