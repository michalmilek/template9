import React from "react";
import PricingCard from "./PricingCard";
import Typography from "./simpleComponents/Typography";

const PricingOffer = () => {
  return (
    <section>
      <Typography
        text="Our Pricing Plans"
        type="h1"
      />
      <Typography
        text="When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them."
        type="p"
      />
      <PricingCard />
    </section>
  );
};

export default PricingOffer;
