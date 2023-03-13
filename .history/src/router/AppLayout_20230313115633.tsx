import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GlobalStyle from "globalStyles";
import React from "react";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
