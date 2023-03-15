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

const data = [
  {
    price: "$299",
    designType: "Per Design",
    title: "Landing Page ",
    desc: "When you’re ready to go beyond prototyping in Figma, ",
    available: ["All limited links", "Own analytics platform", "Chat support"],
    unavailable: ["Optimize hashtags", "Unlimited users"],
    btn: "Get started",
  },
  {
    variant: "secondary",
    price: "$399",
    designType: "Multi Design",
    title: "Website Page ",
    desc: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    available: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    btn: "Get started",
  },
  {
    price: "$499 +",
    designType: "Per Design",
    title: "Complex Project",
    desc: "When you’re ready to go beyond prototyping in Figma",
    available: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
      "Assist and Help",
    ],
    btn: "Contact us",
  },
];

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
        {data.map((item) => (
          <PricingCard
            variant={item.variant}
            item={item}
          />
        ))}
      </Article>
    </Section>
  );
};

export default PricingOffer;
