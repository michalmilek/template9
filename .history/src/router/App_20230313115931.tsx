import AboutUs from "pages/AboutUs";
import Home from "pages/Home";
import Pricing from "pages/Pricing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
