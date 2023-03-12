import React from "react";
import Typography from "./simpleComponents/Typography";

const TeamCard = ({ img, name, job }: TeamCard) => {
  return (
    <div>
      <img
        src={img}
        alt={name}
      />
      <Typography
        text={name}
        type="h3"
        color="darkBlue"
      />
      <Typography
        text={job}
        type="p"
        color="darkBlue"
        opacity={0.7}
      />
    </div>
  );
};

export default TeamCard;
