import Typography from "components/simpleComponents/Typography";
import React from "react";

const AboutUsSecondPageSectionArticleOne = () => {
  return (
    <article>
      <div>
        <Typography
          text="About us"
          fontSize="md"
          type="span"
        />
        <Typography
          text="Our designs solve problems"
          type="h2"
          fontSize="5xl"
          lineHeight={74}
          fontWeight={600}
          opacity={0.7}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <img
        src="./Images/AboutUsSecondPage/Image1.png"
        alt="Team working in office"
      />
    </article>
  );
};

export default AboutUsSecondPageSectionArticleOne;
