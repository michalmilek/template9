import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import AboutUs from "pages/AboutUs";
import Pricing from "pages/Pricing";

export const ROUTES = {
  HOME: "/",
  ABOUTUS: "/about-us",
  PRICING: "/pricing",
};

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
]);
 */
