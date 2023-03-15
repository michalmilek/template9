import React from "react";
import PricingCard from "./PricingCard";
import Typography from "./simpleComponents/Typography";

const PricingOffer = () => {
  return (
    <section>
      <Typography
        text="Our Pricing Plans"
        type="h1"
        fontSize="4xl"
        color="darkBlue"
      />
      <Typography
        text="When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them."
        type="p"
        color="darkBlue"
        opacity={0.7}
      />
      <PricingCard />
    </section>
  );
};

export default PricingOffer;
