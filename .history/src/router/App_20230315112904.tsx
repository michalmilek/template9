import AboutUs from "pages/AboutUs";
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
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
