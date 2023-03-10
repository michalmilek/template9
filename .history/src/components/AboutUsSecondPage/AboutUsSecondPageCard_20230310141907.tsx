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
        color="darkBlue"
      />
      <Typography
        type="p"
        color="darkBlue"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
      />
    </div>
  );
};

export default AboutUsSecondPageCard;
