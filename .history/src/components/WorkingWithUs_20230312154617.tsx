import React from "react";
import Typography from "./simpleComponents/Typography";
//import {ReactComponent as }

/* const data = [{
    icon: ,
    title: "The benefits of working with us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
}]
 */
const WorkingWithUs = () => {
  return (
    <section>
      <Typography
        text={`The benefits of working with us`}
        type="h2"
        fontSize="4xl"
        lineHeight={56}
        color="darkBlue"
      />
      <article></article>
    </section>
  );
};

export default WorkingWithUs;
