import React from "react";
import Typography from "./simpleComponents/Typography";

const PricingCard = () => {
  return (
    <div>
      <div>
        <Typography
          type="h2"
          text="$299"
        />
        <Typography
          type="span"
          text="Per Design"
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
    </div>
  );
};

export default PricingCard;
