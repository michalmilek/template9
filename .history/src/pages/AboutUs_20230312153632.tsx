import AboutUsSecondPageSection from "components/AboutUsSecondPage/AboutUsSecondPageSection";
import MissionVision from "components/MissionVision";
import Navbar from "components/Navbar";
import WorkingWithUs from "components/WorkingWithUs";
import GlobalStyle from "globalStyles";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Navbar />
        <main>
          <AboutUsSecondPageSection />
          <MissionVision />
          <WorkingWithUs />
        </main>
      </div>
    </>
  );
};

export default AboutUs;
