import React from "react";
import { Link } from "react-router-dom";
import { HiLogin } from "react-icons/hi";

function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <Link to={"/"} className="flex items-center gap-2 mx-6">
            <img
              className="w-10 h-8 md:w-20 md:h-16"
              src="/box.png"
              alt="logo"
            />
            <p className="font-bold text-sm md:font-2xl font-sans text-main">
              CONTAINER
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-3 mx-6">
          <div className="font-bold text-subMain text-sm md:text-base">
            We'r hiring
          </div>
          <div className="border border-r-1 border-gray-300 h-6 "></div>
          <Link
            to={"/login"}
            className="flex items-center gap-2 px-3 py-2 bg-subMain rounded text-white"
          >
            <HiLogin />
            <p className="font-medium text-sm md:text-base">Login</p>
          </Link>
        </div>
      </div>
      <div className="bg-main h-14"></div>
    </div>
  );
}

export default Header;
