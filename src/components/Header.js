import React from "react";
import { Link } from "react-router-dom";

import logo from "../Images/logo.png";

function Header() {
  return (
    <div className="flex -top-7 left-8 absolute z-20 ">
      <div>
        <Link to="/QR-Code-Generator-and-Scanner">
          <img alt="" className="w-72" src={logo}></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
