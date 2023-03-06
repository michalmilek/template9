import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 303px;
`;

const CardNumber = styled.div`
  border: none;
  background: #5239fa;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  /* Dark blue */

  color: #282938;
`;

const CardDesc = styled.p`
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

type Props = {
  title: string;
  index: number;
};

const AboutUsCard = ({ title, index }: Props) => {
  return (
    <Card>
      <CardNumber>0{index}</CardNumber>
      <CardTitle>{title}</CardTitle>
      <CardDesc>
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
      </CardDesc>
    </Card>
  );
};

export default AboutUsCard;
