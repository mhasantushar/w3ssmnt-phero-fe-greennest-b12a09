import React from "react";
import { DotLoader} from "react-spinners";

const DotForDefaultRouter = () => {
  return (
    <div className="min-h-[calc(100dvh-350px)] flex justify-center items-center">
      <DotLoader size={64} color={"#403F3F"} />
    </div>
  );
};

export default DotForDefaultRouter;
