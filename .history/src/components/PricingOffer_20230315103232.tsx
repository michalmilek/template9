import React from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";
import Typography from "./simpleComponents/Typography";

const Section = styled.section`
  padding: 60px 10rem;
`;

const Article = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const PricingOffer = () => {
  return (
    <Section>
      <Typography
        text="Our Pricing Plans"
        type="h1"
        fontSize="4xl"
        color="darkBlue"
        fontWeight={600}
      />
      <Typography
        text="When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them."
        type="p"
        color="darkBlue"
        opacity={0.7}
      />
      <Article>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </Article>
    </Section>
  );
};

export default PricingOffer;
