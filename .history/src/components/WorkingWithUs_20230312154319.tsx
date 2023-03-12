import React from "react";
import Typography from "./simpleComponents/Typography";

const WorkingWithUs = () => {
  return (
    <section>
      <Typography
        text={`The benefits of working ${(<br />)} with us`}
        type="h2"
        fontSize="4xl"
        lineHeight={56}
        color="darkBlue"
      />
    </section>
  );
};

export default WorkingWithUs;
