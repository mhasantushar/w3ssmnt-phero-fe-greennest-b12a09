import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import RPaneCaring from "./RPaneCaring";
import RPaneExperts from "./RPaneExperts";

const RPane = () => {
  return (
    <div>
      <Suspense fallback={<BarLoader />}>
        <RPaneCaring />
        <RPaneExperts />
      </Suspense>
    </div>
  );
};

export default RPane;
