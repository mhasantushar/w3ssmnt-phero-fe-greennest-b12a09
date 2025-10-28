import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import ShowLoadingHash from "../compos/loaders/ShowLoadingHash";

const PrivateRouter = ({ children }) => {
  const { loggedInUser, pageIsLoading } = useContext(AuthContext);

  const intendedLocation = useLocation();
  // console.log(intendedLocation);

  if (pageIsLoading) {
    return <ShowLoadingHash />;
  }

  if (!loggedInUser) {
    // return <Navigate to="/auth/login" />
    return <Navigate to="/auth/signin" state={intendedLocation.pathname} />;
  }

  return children;
};

export default PrivateRouter;
