import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import AuthProfile from "../pages/AuthProfile";
import PlantDetails from "../pages/PlantDetails";
import AuthLayout from "../layouts/AuthLayout";
import AuthRegister from "../pages/AuthRegister";
import AuthSignIn from "../pages/AuthSignIn";

const DefaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/plant/",
        element: <PlantDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/register",
        element: <AuthRegister />,
      },
      {
        path: "/auth/signin",
        element: <AuthSignIn />,
      },
      {
        path: "/auth/profile",
        element: <AuthProfile />,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error 404!</h2>,
  },
]);

export default DefaultRouter;
