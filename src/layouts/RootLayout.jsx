import React from "react";
import RootHeaderComp from "../compos/RootHeaderComp";
import RootFooterComp from "../compos/RootFooterComp";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <RootHeaderComp />
      </header>
      <main className="min-h-[calc(100dvh-285px)]">
        <Outlet/>
      </main>
      <footer>
        <RootFooterComp />
      </footer>
    </div>
  );
};

export default RootLayout;
