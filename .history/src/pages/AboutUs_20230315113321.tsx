import AboutUsSecondPageSection from "components/AboutUsSecondPage/AboutUsSecondPageSection";
import MissionVision from "components/MissionVision";
import OurTeam from "components/OurTeam";
import { Main } from "components/styles";
import WorkingWithUs from "components/WorkingWithUs";
import React from "react";

const AboutUs = () => {
  return (
    <Main>
      <AboutUsSecondPageSection />
      <MissionVision />
      <WorkingWithUs />
      <OurTeam />
    </Main>
  );
};

export default AboutUs;
