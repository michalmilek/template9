import Typography from "components/simpleComponents/Typography";
import React from "react";

const AboutUsSecondPageSectionArticleOne = () => {
  return (
    <article>
      <div>
        <span>About us</span>
        <Typography
          text="Our designs solve problems"
          type="h2"
          fontSize="md"
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
