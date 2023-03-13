import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GlobalStyle from "globalStyles";
import React from "react";

const AppLayout = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
