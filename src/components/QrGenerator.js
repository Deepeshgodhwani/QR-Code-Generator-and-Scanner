import React, { useState } from "react";

import loadScan from "../Images/loadScan.png";
import { CircularProgress } from "@chakra-ui/react";
let prevVal;

function QrGenerator() {
  const [src, setsrc] = useState("");
  const [value, setvalue] = useState("");
  const [loading, setloading] = useState(false);

  const genQr = () => {
    if (!value || prevVal === value) {
      return;
    }
    let input = document.getElementById("input");
    input.innerText = "Generating ...";
    setsrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`
    );
    setloading(true);
    prevVal = value;
  };

  const visible = () => {
    setloading(false);
    let input = document.getElementById("input");
    let element = document.getElementById("result");
    element.style.display = "block";
    input.innerText = "Generate QR code";
  };

  return (
    <div className="flex justify-center pt-10 bg-[rgb(219,226,255)]  items-center h-[100vh]">
      <div className="   text-black flex  space-x-2  z-10 ">
        <div className="bg-white w-[35rem] space-y-4 px-8 shadow-xl rounded-lg py-4">
          <div className=" flex justify-center">
            <p className="font-extrabold text-2xl text-[rgb(27,41,75)] w-64 rounded-lg py-2 text-center ">
              QR Code Generator
            </p>
          </div>
          <textarea
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            value={value}
            className="w-[100%]  placeholder:text-[rgb(167,167,167)] text-xl py-[30px] font-bold rounded-md px-4 
          text-black   outline-none border-[2px]  resize-none"
            maxLength={272}
            rows={"7"}
            type={"text"}
            placeholder="Enter your website, text here"
          />
          <div
            id="input"
            onClick={genQr}
            className="w-[100%] text-white  text-lg  h-12 cursor-pointer font-bold flex justify-center items-center 
        rounded-md bg-[rgb(3,169,244)]"
          >
            Generate QR code
          </div>
        </div>
        <div
          id="result"
          className="space-y-4 px-4 relative  rounded-lg w-72 py-6 shadow-xl bg-white "
        >
          <div className="w-[100%] h-80 flex justify-center items-center border-[1px] border-gray-500">
            {src && <img alt="" onLoad={visible} className="w-40" src={src} />}
            {!src && <img alt="" src={loadScan} className="w-40" />}
          </div>
          {loading && (
            <div className="absolute top-36 left-[7.5rem]">
              <CircularProgress isIndeterminate color="green.300" />
            </div>
          )}

          <div className="  text-white font-bold space-x-3 h-12 flex cursor-pointer justify-center items-center rounded-md bg-[rgb(144,197,45)]">
            <i className="fa-sharp fa-solid text-2xl fa-circle-down"></i>

            <div className="text-center -space-y-1">
              <p>Download</p>
              <p className="text-xs text-[rgb(240,243,235)]">PNG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;
