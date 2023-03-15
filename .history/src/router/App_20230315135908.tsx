import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Home from "pages/Home";
import Pricing from "pages/Pricing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import { ROUTES } from "./ROUTES";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUTUS,
        element: <AboutUs />,
      },
      {
        path: ROUTES.PRICING,
        element: <Pricing />,
      },
      {
        path: ROUTES.CONTACTUS,
        element: <ContactUs />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
