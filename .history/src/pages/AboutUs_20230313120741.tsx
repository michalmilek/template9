import AboutUsSecondPageSection from "components/AboutUsSecondPage/AboutUsSecondPageSection";
import MissionVision from "components/MissionVision";
import OurTeam from "components/OurTeam";
import WorkingWithUs from "components/WorkingWithUs";
import React from "react";

const AboutUs = () => {
  return (
    <main>
      <AboutUsSecondPageSection />
      <MissionVision />
      <WorkingWithUs />
      <OurTeam />
    </main>
  );
};

export default AboutUs;
