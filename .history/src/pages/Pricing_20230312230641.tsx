import FAQ from "components/FAQ";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GlobalStyle from "globalStyles";
import React from "react";

const Pricing = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <main>
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
