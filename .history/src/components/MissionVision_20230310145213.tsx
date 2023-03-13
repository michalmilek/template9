import React from "react";
import Typography from "./simpleComponents/Typography";

const MissionVision = () => {
  return (
    <article>
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
    </article>
  );
};

export default MissionVision;