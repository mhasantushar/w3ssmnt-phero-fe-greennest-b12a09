import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import HashForPrivRouter from "../compos/loaders/HashForPrivRouter";

const PrivateRouter = ({ children }) => {
  const { loggedInUser, pageIsLoading } = useContext(AuthContext);

  const intendedLocation = useLocation();
  // console.log(intendedLocation);

  if (pageIsLoading) {
    return <HashForPrivRouter />;
  }

  if (!loggedInUser) {
    // return <Navigate to="/auth/login" />
    return <Navigate to="/auth/signin" state={intendedLocation.pathname} />;
  }

  return children;
};

export default PrivateRouter;
