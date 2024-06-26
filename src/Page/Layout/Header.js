import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiLogin } from "react-icons/hi";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { Input } from "../../shared/input";
import { FaSearch } from "react-icons/fa";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
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
            <p className="font-bold text-sm md:text-lg font-sans text-blue-800">
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
            {currentUser ? <FaUser /> : <HiLogin />}
            <p className="font-medium text-sm md:text-base">
              {currentUser ? currentUser.fullName : "Login"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
