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
            {currentUser ? <FaUser /> : <HiLogin />}
            <p className="font-medium text-sm md:text-base">
              {currentUser ? currentUser.fullName : "Login"}
            </p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center bg-main h-14">
        <div className="flex col-span-3 ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              ` font-bold px-8 text-white text-sm  border-r-2 border-white`
            }
          >
            {({ isActive }) => (
              <p className={isActive ? "border-b-4 border-subMain" : ""}>
                Home
              </p>
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
          <Input
            type={"text"}
            placeholder={"Enter to search...."}
            bg={true}
            suffix={<FaSearch className="w-4 h-4 text-white " />}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
