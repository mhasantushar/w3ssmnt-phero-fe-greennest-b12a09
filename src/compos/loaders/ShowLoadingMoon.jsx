import React from "react";
import { MoonLoader } from "react-spinners";

const ShowLoadingMoon = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <MoonLoader size={64} color={"#403F3F"} />
    </div>
  );
};

export default ShowLoadingMoon;
