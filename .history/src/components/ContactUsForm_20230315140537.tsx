import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 120px 10rem 60px;
`;

const ContactUsForm = () => {
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
    </Section>
  );
};

export default ContactUsForm;
