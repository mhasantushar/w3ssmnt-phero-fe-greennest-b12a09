import React from "react";
import { HashLoader } from "react-spinners";

const ShowLoadingHash = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <HashLoader size={64} color={"#403F3F"} />
    </div>
  );
};

export default ShowLoadingHash;
