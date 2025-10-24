import React from "react";
import { DotLoader} from "react-spinners";

const ShowLoadingDot = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <DotLoader size={64} color={"#403F3F"} />
    </div>
  );
};

export default ShowLoadingDot;
