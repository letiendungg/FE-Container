import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdDirectionsBoat } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import TitleAndSub from "../TitleAndSub";
function OurCompany() {
  return (
    <div>
      <TitleAndSub sub={"Our Company"} title={"Container in Numbers"} />
      <div className="mx-8 relative">
        <div className="absolute flex justify-center top-[50%] left-[12%]">
          <div className=" grid grid-cols-4 gap-4 mx-20">
            <Link
              to="/about-company"
              className="flex flex-col hover:underline text-white p-12 items-center bg-main"
            >
              <h1 className="text-3xl font-bold">1,026</h1>
              <p className="text-xl font-medium">Employees</p>
              <MdNavigateNext className="w-6 h-6" />
            </Link>
            <Link
              to="/about-company"
              className="flex flex-col hover:underline text-white p-12 items-center bg-subMain"
            >
              <h1 className="text-3xl font-bold">120</h1>
              <p className="text-xl font-medium">Vessels</p>
              <MdNavigateNext className="w-6 h-6" />
            </Link>
            <Link
              to="/about-company"
              className="flex flex-col text-white p-12  hover:underline items-center bg-main2"
            >
              <h1 className="text-3xl font-bold">146</h1>
              <p className="text-xl font-medium">Routers</p>
              <MdNavigateNext className="w-6 h-6" />
            </Link>
            <Link
              to="/about-company"
              className="flex flex-col text-white p-12 hover:underline items-center bg-main3"
            >
              <h1 className="text-3xl font-bold">67</h1>
              <p className="text-xl font-medium">Nations</p>
              <MdNavigateNext className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <img className="w-full" src={"./ourcompany.png"} alt="Our Company" />
      </div>
    </div>
  );
}

export default OurCompany;
