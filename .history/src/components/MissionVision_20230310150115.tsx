import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

const MissionVision = () => {
  const BackgroundContainer = styled.div`
    background: ${({ theme }) => theme.colors.bgPrimary6};
  `;
  const Article = styled.article`
    padding: 60px 10rem;
    display: flex;
    flex-direction: column;
    gap: 60px;
  `;

  return (
    <BackgroundContainer>
      <Article>
        <div>
          <div>
            <Typography
              type="span"
              text="Our Mission"
              color="darkBlue"
            />
            <Typography
              type="h2"
              text="Inspire, Innovate, Share"
              color="darkBlue"
              fontSize="3xl"
              lineHeight={56}
            />
            <Typography
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              color="darkBlue"
              fontWeight={400}
            />
          </div>
          <img
            src="./Images/MissionVisionImage1.png"
            alt="Mission Vision 1"
          />
        </div>
        <div>
          <div>
            <Typography
              type="span"
              text="Our Vision"
              color="darkBlue"
            />
            <Typography
              type="h2"
              text="Laser focus"
              color="darkBlue"
              fontSize="3xl"
              lineHeight={56}
            />
            <Typography
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              color="darkBlue"
              fontWeight={400}
            />
          </div>
          <img
            src="./Images/MissionVisionImage2.png"
            alt="Womens at the meeting"
          />
        </div>
      </Article>
    </BackgroundContainer>
  );
};

export default MissionVision;
