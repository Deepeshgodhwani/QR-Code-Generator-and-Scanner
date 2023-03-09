import React from "react";
import logo2 from "../Images/logo2.png";

function Loader() {
  return (
    <div className="w-[100%] flex bg-white items-center justify-center z-50 absolute h-[100vh]">
      <img alt="" className="w-60 h-60" src={logo2} />
    </div>
  );
}

export default Loader;
