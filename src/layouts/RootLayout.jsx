import React from "react";
import RootHeader from "../compos/RootHeader";
import RootFooter from "../compos/RootFooter";
import { Outlet, useNavigation } from "react-router";
import LPane from "../compos/LPane";
import RPane from "../compos/RPane";
import CircleForRootLayout from "../compos/loaders/CircleForRootLayout";
import BookConsaltation from "../compos/BookConsaltation";

const RootLayout = () => {
  const { pageState } = useNavigation();

  return (
    <div>
      <header className="w-11/12 mx-auto">
        <RootHeader />
      </header>

      <main className="w-11/12 mx-auto min-h-[calc(100dvh-381px)] grid grid-cols-12 my-10 gap-6">
        <aside className="col-span-2 sticky top-10 h-fit">
          <LPane />
        </aside>

        <section className="col-span-8">
          {pageState == "loading" ? <CircleForRootLayout /> : <Outlet />}
          <div className="mt-16">
            <BookConsaltation/>
          </div>
        </section>

        <aside className="col-span-2 sticky top-10 h-fit">
          <RPane />
        </aside>
      </main>

      <footer>
        <RootFooter />
      </footer>
    </div>
  );
};

export default RootLayout;
