import React from "react";
import Typography from "./simpleComponents/Typography";
import { ReactComponent as PointerIcon } from "../commons/assets/icons/PointerIcon.svg";

const PricingCard = () => {
  return (
    <div>
      <div>
        <Typography
          type="h2"
          text="$299"
          fontSize="3xl"
          fontWeight={600}
        />
        <Typography
          type="span"
          text="Per Design"
          color="RoyalBlue"
          fontWeight={400}
        />
      </div>

      <Typography
        type="h3"
        fontSize="2xl"
        text="Landing Page"
      />
      <Typography
        type="p"
        text="When you’re ready to go beyond prototyping in Figma, "
      />

      <div>
        <PointerIcon /> All limited links
      </div>
    </div>
  );
};

export default PricingCard;
