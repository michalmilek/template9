import Typography from "components/simpleComponents/Typography";
import React from "react";

const AboutUsSecondPageSectionArticleTwo = () => {
  return (
    <article>
      <div>
        <div>
          <Typography
            text="Who we are"
            type="span"
            color="darkBlue"
          />
          <Typography
            text="Goal focussed"
            type="h3"
            fontSize="3xl"
            color="darkBlue"
            fontWeight={600}
          />
          <Typography
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            type="p"
            lineHeight={28}
            color="darkBlue"
            opacity={0.7}
          />
        </div>
      </div>
    </article>
  );
};

export default AboutUsSecondPageSectionArticleTwo;
