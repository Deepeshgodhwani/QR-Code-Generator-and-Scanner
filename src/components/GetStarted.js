import React, { useState } from "react";

import { Link } from "react-router-dom";
import gen from "../Images/gen.webp";
import scan from "../Images/scan.png";
import Loader from "./Loader";

function GetStarted() {
  const [loading, setloading] = useState(true);

  const toggleLoading = () => {
    setloading(false);
  };

  return (
    <div className="flex  space-x-28 bg-[rgb(219,226,255)] justify-center items-center h-[100vh]">
      {loading && <Loader />}
      <div className="flex space-y-10 justify-center flex-col items-center ">
        <img className="w-52" onLoad={toggleLoading} alt="" src={gen}></img>
        <Link to="/gerator">
          <div className=" w-52 font-bold text-white h-12 flex cursor-pointer justify-center items-center rounded-3xl bg-[rgb(243,81,70)]">
            Generate QR code
          </div>
        </Link>
      </div>
      <div className="flex space-y-10  flex-col items-center border-2  ">
        <img alt="" className="w-52" src={scan}></img>
        <Link to="/scanner">
          <div className=" w-52  font-bold text-white h-12 flex cursor-pointer justify-center items-center rounded-3xl bg-[rgb(83,64,255)]">
            Scan QR code
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
