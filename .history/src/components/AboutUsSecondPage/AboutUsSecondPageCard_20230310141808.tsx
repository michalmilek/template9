import Typography from "components/simpleComponents/Typography";
import React from "react";
import { ReactComponent as ProcessCardHeader } from "../../commons/assets/icons/ProcessCardHeader.svg";

const AboutUsSecondPageCard = () => {
  return (
    <div>
      <ProcessCardHeader />

      <Typography
        type="h4"
        text="Planning"
        fontSize="xl"
      />
    </div>
  );
};

export default AboutUsSecondPageCard;
