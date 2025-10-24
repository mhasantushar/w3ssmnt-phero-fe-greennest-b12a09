import React from "react";
import RootHeader from "../compos/RootHeader";
import RootFooter from "../compos/RootFooter";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <RootHeader />
      </header>

      <main className="w-11/12 mx-auto min-h-[calc(100dvh-285px)]">
        <Outlet />
      </main>

      <footer>
        <RootFooter />
      </footer>
    </div>
  );
};

export default AuthLayout;
