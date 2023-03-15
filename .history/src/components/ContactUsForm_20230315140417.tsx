import React from "react";
import styled from "styled-components";
import Typography from "./simpleComponents/Typography";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactUsForm = () => {
  return (
    <section>
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
    </section>
  );
};

export default ContactUsForm;
