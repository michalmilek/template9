import Footer from "components/Footer";
import Navbar from "components/Navbar";
import GlobalStyle from "globalStyles";

import { Outlet } from "react-router-dom";

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
