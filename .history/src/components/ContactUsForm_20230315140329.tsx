import React from "react";
import Typography from "./simpleComponents/Typography";

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
