import React from "react";
import styled from "styled-components";
import ContactUsForm from "./ContactUsForm";
import Typography from "./simpleComponents/Typography";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 120px 15rem 60px;

  @media (max-width: 1400px) {
    padding: 120px 8rem 60px;
  }

  @media (max-width: 800px) {
    padding: 120px 1rem 60px;
  }
`;

const ContactUsComp = () => {
  return (
    <Section>
      <Typography
        type="h1"
        text="Contact us"
        fontSize="4xl"
        color="darkBlue"
      />
      <Typography
        type="p"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        color="darkBlue"
        opacity={0.7}
        maxWidth="562px"
      />
      <ContactUsForm />
    </Section>
  );
};

export default ContactUsComp;
