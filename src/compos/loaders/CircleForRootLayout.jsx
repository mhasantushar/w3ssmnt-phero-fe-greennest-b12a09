import React from "react";
import { CircleLoader } from "react-spinners";

const CircleForRootLayout = () => {
  return (
    <div className="min-h-[calc(100dvh-381px)] flex justify-center items-center">
      <CircleLoader size={64} color={"#403F3F"} />
    </div>
  );
};

export default CircleForRootLayout;
