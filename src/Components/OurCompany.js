import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdDirectionsBoat } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

function OurCompany() {
  return (
    <div>
      <div className="my-6 flex flex-col text-center justify-center gap-2">
        <p className="text-xl font-extralight">Our Company</p>
        <p className="font-bold text-4xl">Container in Numbers</p>
        <div className="flex justify-center">
          <div className=" w-14 border-b-[6px] border-subMain"></div>
        </div>
      </div>
      <div className="mx-8">
        <div className="absolute flex justify-center">
          <div className=" grid grid-cols-4 gap-4 mx-20">
            <div className="flex flex-col text-white p-12 items-center bg-main">
              <h1 className="text-3xl font-bold">1,026</h1>
              <p className="text-xl font-medium">Employees</p>
              <MdNavigateNext className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-white p-12 items-center bg-subMain">
              <h1 className="text-3xl font-bold">120</h1>
              <p className="text-xl font-medium">Vessels</p>
              <MdNavigateNext className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-white p-12 items-center bg-main2">
              <h1 className="text-3xl font-bold">146</h1>
              <p className="text-xl font-medium">Routers</p>
              <MdNavigateNext className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-white p-12 items-center bg-main3">
              <h1 className="text-3xl font-bold">67</h1>
              <p className="text-xl font-medium">Nations</p>
              <MdNavigateNext className="w-6 h-6" />
            </div>
          </div>
        </div>

        <img className="" src={"./ourcompany.png"} alt="Our Company" />
      </div>
    </div>
  );
}

export default OurCompany;
