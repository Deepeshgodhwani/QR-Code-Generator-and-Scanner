import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

function QrScanner() {
  const [result, setresult] = useState("");
  const toast = useToast();

  const uploadePicture = async (e) => {
    try {
      let box = document.getElementById("box");
      box.innerText = "Scanning QR Code...";
      let borderBox = document.getElementById("borderBox");
      borderBox.style.borderColor="rgb(11,133,255)"
      borderBox.style.color="rgb(11,133,255)"
      let file = e.target.files[0];
      if (!file) return;
      let formData = new FormData();
      formData.append("file", file);
      let response = await fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result[0].symbol[0].error) {
        toast({
          description: "Couldn't scan QR Code",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
        box.innerText = "Drag and drop or upload your image";
      } else {
        setresult(result[0].symbol[0].data);
        box.innerText = "Drag and drop or upload your image";
      }
    } catch (error) {
      toast({
        description: "Internal Server Error",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      let box = document.getElementById("box");
      box.innerText = "Drag and drop or upload your image";
    }
  };

  const onDrag = () => {
    let box = document.getElementById("box");
    let borderBox = document.getElementById("borderBox");
    borderBox.style.borderColor="rgb(255,108,55)"
    borderBox.style.color="rgb(255,108,55)"
    box.innerText = "Drop image here";
    
  };

  const dragEnd = () => {
    let box = document.getElementById("box");
    box.innerText = "Drag and drop or upload your image";
    let borderBox = document.getElementById("borderBox");
    borderBox.style.borderColor="rgb(11,133,255)"
    borderBox.style.color="rgb(11,133,255)"
  };

  return (
    <div className="space-x-2 z-10 h-[100vh] bg-[rgb(219,226,255)]   flex justify-center items-center">
      <div className=" rounded-md  bg-white shadow-xl flex  justify-center items-center  w-[35rem] h-96 ">
        <div id="borderBox" className="h-80 font-bold text-lg  border-2 border-[rgb(11,133,255)] border-dotted relative space-y-2 text-[rgb(11,133,255)] rounded-md flex justify-center items-center flex-col w-[90%]">
          <i className="fas text-[4rem] fa-cloud-upload"></i>
          <p id="box">Drag and drop or upload your image</p>
          <input
            title=""
            onDragOver={onDrag}
            onDrop={uploadePicture}
            onChange={uploadePicture}
            onDragLeave={dragEnd}
            className="absolute w-[100%] h-[100%] border-2 border-green-400 opacity-0"
            type={"file"}
          ></input>
        </div>
      </div>
      {
        <div className="space-y-2 rounded-md shadow-xl h-96 py-6 px-6 w-96 bg-white">
          <div className="border-[1px] max-w-[26rem] text-black px-8 py-4 h-72 border-gray-500 ">
            {result}
          </div>
          <div className="flex justify-between">
            <div
              onClick={() => {
                navigator.clipboard.writeText(result);
              }}
              className="text-white w-[48%] font-bold text-lg space-x-3 h-12 flex cursor-pointer justify-center items-center rounded-md bg-[rgb(80,161,59)]"
            >
              {" "}
              Copy
            </div>
            <div
              onClick={() => {
                setresult("");
              }}
              className="text-white w-[48%] font-bold text-lg space-x-3 h-12 flex cursor-pointer justify-center items-center rounded-md bg-[rgb(51,135,184)]"
            >
              Clear
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default QrScanner;
