import AboutUsSecondPageSection from "components/AboutUsSecondPage/AboutUsSecondPageSection";
import Footer from "components/Footer";
import MissionVision from "components/MissionVision";
import Navbar from "components/Navbar";
import OurTeam from "components/OurTeam";
import WorkingWithUs from "components/WorkingWithUs";
import GlobalStyle from "globalStyles";
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
