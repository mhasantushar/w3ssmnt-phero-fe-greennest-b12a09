import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import AuthProfile from "../pages/AuthProfile";
import PlantDetailsWrap from "../pages/PlantDetailsWrap";
import AuthLayout from "../layouts/AuthLayout";
import AuthRegister from "../pages/AuthRegister";
import AuthSignIn from "../pages/AuthSignIn";
import PrivateRouter from "./PrivateRouter";
import HomeCategPlants from "../pages/HomeCategPlants";
import DotForDefaultRouter from "../compos/loaders/DotForDefRouter";
import PlantsRedirect from "../pages/PlantsRedirect";

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
        path: "/category/:categId",
        element: <HomeCategPlants />,
        loader: () => fetch("../plants-details.json"),
        hydrateFallbackElement: <DotForDefaultRouter />,
      },
    ],
  },
  {
    path: "/plants",
    element: <PlantsRedirect/>,
  },
  {
    path: "/plant/:plantId",
    element: (
      <PrivateRouter>
        <PlantDetailsWrap />
      </PrivateRouter>
    ),
    loader: () => fetch("../plants-details.json"),
    hydrateFallbackElement: <DotForDefaultRouter />,
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
        element: (
          <PrivateRouter>
            <AuthProfile />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error 404!</h2>,
  },
]);

export default DefaultRouter;

