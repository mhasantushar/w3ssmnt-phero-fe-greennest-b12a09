import React from "react";
import { CircleLoader } from "react-spinners";

const ShowLoadingCircle = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <CircleLoader size={64} color={"#403F3F"} />
    </div>
  );
};

export default ShowLoadingCircle;
