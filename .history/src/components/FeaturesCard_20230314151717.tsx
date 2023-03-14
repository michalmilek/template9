import React from "react";
import styled from "styled-components";


type Props = {
  title: string;
  desc: string;
  icon: JSX.Element;
  background?: "white" | "grey";
};

const FeaturesCardDivH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  /* Dark blue */

  color: #282938;
`;
const FeaturesCardDivP = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Dark blue */

  color: #282938;

  opacity: 0.7;
`;

const FeaturesCard = ({ title, desc, icon, background }: Props) => {
  const FeaturesCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-family: "Poppins";
    max-height: 316px;
    max-width: 405px;
    background: ${background === "grey"
      ? ({ theme }) => theme.colors.bgPrimary2
      : "#fff"};
    padding: 40px;
    gap: 20px;
  `;

  return (
    <FeaturesCardDiv>
      {icon}
      <FeaturesCardDivH2>{title}</FeaturesCardDivH2>
      <FeaturesCardDivP>{desc}</FeaturesCardDivP>
    </FeaturesCardDiv>
  );
};

export default FeaturesCard;
