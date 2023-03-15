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
        />
      </div>

      <Typography
        type="h3"
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
