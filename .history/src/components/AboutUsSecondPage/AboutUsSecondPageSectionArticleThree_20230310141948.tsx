import Typography from "components/simpleComponents/Typography";
import React from "react";
import AboutUsSecondPageCard from "./AboutUsSecondPageCard";

const AboutUsSecondPageSectionArticleThree = () => {
  return (
    <article>
      <Typography
        type="h1"
        fontSize="4xl"
        text="The process we follow"
        fontWeight={600}
        color="darkBlue"
      />
      <div>
        <AboutUsSecondPageCard />
      </div>
    </article>
  );
};

export default AboutUsSecondPageSectionArticleThree;
