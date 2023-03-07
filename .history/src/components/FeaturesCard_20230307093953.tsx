import React from "react";
import styled from "styled-components";

const FeaturesCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-family: "Poppins";
  max-height: 316px;
  max-width: 405px;
  background: #fff;
  padding: 40px;
  gap: 20px;
`;

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

type Props = {
  title: string;
  desc: string;
};

const FeaturesCard = ({ title, desc }: Props) => {
  return (
    <FeaturesCardDiv>
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 10.8749C19.003 10.8749 21.4374 8.44047 21.4374 5.43745C21.4374 2.43443 19.003 0 16 0C12.9969 0 10.5625 2.43443 10.5625 5.43745C10.5625 8.44047 12.9969 10.8749 16 10.8749Z"
          fill="#2405F2"
        />
        <path
          d="M27 10.8749C28.8984 10.8749 30.4374 9.33593 30.4374 7.43747C30.4374 5.53901 28.8984 4 27 4C25.1015 4 23.5625 5.53901 23.5625 7.43747C23.5625 9.33593 25.1015 10.8749 27 10.8749Z"
          fill="#2405F2"
        />
        <path
          d="M4.99997 10.8749C6.89843 10.8749 8.43744 9.33593 8.43744 7.43747C8.43744 5.53901 6.89843 4 4.99997 4C3.10151 4 1.5625 5.53901 1.5625 7.43747C1.5625 9.33593 3.10151 10.8749 4.99997 10.8749Z"
          fill="#2405F2"
        />
        <path
          d="M8.3868 13.9615C7.03369 12.8528 5.80826 12.9996 4.24371 12.9996C1.90373 12.9996 0 14.8921 0 17.2177V24.0432C0 25.0532 0.824368 25.8745 1.83811 25.8745C6.21469 25.8745 5.68745 25.9537 5.68745 25.6857C5.68745 20.8491 5.11458 17.3022 8.3868 13.9615V13.9615Z"
          fill="#2405F2"
        />
        <path
          d="M17.4882 13.0249C14.7555 12.797 12.3802 13.0275 10.3314 14.7187C6.90288 17.4649 7.56268 21.1625 7.56268 25.6861C7.56268 26.8829 8.53642 27.8748 9.75141 27.8748C22.9439 27.8748 23.469 28.3003 24.2513 26.5679C24.5078 25.9821 24.4375 26.1682 24.4375 20.5636C24.4375 16.112 20.583 13.0249 17.4882 13.0249V13.0249Z"
          fill="#2405F2"
        />
        <path
          d="M27.7564 13.0004C26.1833 13.0004 24.9646 12.8552 23.6133 13.9623C26.8611 17.2783 26.3126 20.5832 26.3126 25.6865C26.3126 25.9562 25.8749 25.8753 30.0963 25.8753C31.1463 25.8753 32.0001 25.0247 32.0001 23.9791V17.2185C32.0001 14.8929 30.0963 13.0004 27.7564 13.0004Z"
          fill="#2405F2"
        />
      </svg>
      <FeaturesCardDivH2>{title}</FeaturesCardDivH2>
      <FeaturesCardDivP>{desc}</FeaturesCardDivP>
    </FeaturesCardDiv>
  );
};

export default FeaturesCard;
