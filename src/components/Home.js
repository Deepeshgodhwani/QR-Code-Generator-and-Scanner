import React, { useState } from "react";

import img from "../Images/bg3.jpg";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Home() {
  const [loading, setloading] = useState(true);
    
  const ToggleLoading=()=>{
        setloading(false);
  }

  return (
    <>
       {loading &&<Loader/>}
    <div onLoad={ToggleLoading}>
      <img alt="" className="absolute w-full h-[100vh] z-0" src={img}></img>
      <div className="relative ">
        <div className="flex items-center mx-16 pt-16 -space-x-8 ">
          <p
            style={{ transform: "scale(.6, 1)" }}
            className="text-[rgb(30,247,255)] font-extrabold text-[12rem] "
          >
            QR
          </p>
          <div className="text-[rgb(37,44,198)] flex flex-col pt-6 -space-y-12 font-extrabold text-[5rem]">
            <p>SCAN</p>
            <p>CODE</p>
          </div>
        </div>
        <div className="pl-36 space-y-6">
          <div className=" text-[rgb(67,75,210)] -mb-10 font-semibold font-[calibri] text-lg leading-5 text-left w-96">
            Welcome to SCANTOR!. Our QR code generator and scanner tool is
            designed to simplify your life by allowing you to create and scan QR
            codes with ease.
          </div>
          <div className="text-[rgb(67,75,210)] text-4xl  font-extrabold">
            . . .
          </div>

          <div
            className=" px-4  text-black h-12 font-semibold flex cursor-pointer w-48 justify-center 
            items-center rounded-3xl bg-[rgb(30,247,255)]"
          >
            <Link to={"/QR-Code-Generator-and-Scanner/getStarted"}>Get Started</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
