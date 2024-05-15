import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../../shared/input";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="grid grid-cols-4 items-center bg-main h-14">
      <div className="flex col-span-3 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            ` font-bold px-8 text-white text-sm  border-r-2 border-white`
          }
        >
          {({ isActive }) => (
            <p className={isActive ? "border-b-4 border-subMain" : ""}>Home</p>
          )}
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive }) =>
            `${
              isActive && "border-b-4 border-subMain"
            } font-bold px-8 text-white text-sm  border-r-2 border-white`
          }
        >
          {({ isActive }) => (
            <p className={isActive ? "border-b-4 border-subMain" : ""}>
              Services & Information
            </p>
          )}
        </NavLink>
        <NavLink
          to={"/about-us"}
          className={({ isActive }) =>
            `font-bold px-8 text-white text-sm  border-r-2 border-white`
          }
        >
          {({ isActive }) => (
            <p className={isActive ? "border-b-4 border-subMain" : ""}>
              Our Company
            </p>
          )}
        </NavLink>
        <NavLink
          to={"/online-bussiness"}
          className={({ isActive }) => `font-bold px-8 text-white text-sm  `}
        >
          {({ isActive }) => (
            <p className={isActive ? "border-b-4 border-subMain" : ""}>
              Online Bussiness Suite
            </p>
          )}
        </NavLink>
      </div>
      <div className="flex items-center justify-end">
        <input
          type="text"
          placeholder="Enter Application to search..."
          className="rounded-lg bg-main mx-4 w-full text-white focus:border-white"
        />
        <FaSearch className="text-white absolute right-8" />
      </div>
    </div>
  );
}

export default Navbar;
