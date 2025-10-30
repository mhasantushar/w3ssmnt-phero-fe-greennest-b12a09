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

      <main className="w-11/12 mx-auto mb-12 min-h-[calc(100dvh-381px)]">
        <Outlet />
      </main>

      <footer>
        <RootFooter />
      </footer>
    </div>
  );
};

export default AuthLayout;
