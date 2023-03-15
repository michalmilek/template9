import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GlobalStyle from "globalStyles";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const OutletStyled = styled(Outlet)`
  overflow-x: hidden;
`;

const AppLayout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
