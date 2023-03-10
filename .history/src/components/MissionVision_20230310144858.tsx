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
        </div>
      </div>
      <div></div>
    </article>
  );
};

export default MissionVision;
