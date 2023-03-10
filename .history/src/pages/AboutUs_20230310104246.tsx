import AboutUsSecondPageSection from "components/AboutUsSecondPage/AboutUsSecondPageSection";
import Navbar from "components/Navbar";
import GlobalStyle from "globalStyles";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Navbar />
        <main>
            <AboutUsSecondPageSection
        </main>
      </div>
    </>
  );
};

export default AboutUs;
