import React, { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { Input, Select } from "../shared/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMdPricetags } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import OptionNation from "../Data/OptionNation";

function Landing() {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <div className="flex flex-col ">
      <div className="my-6 flex flex-col text-center justify-center gap-2">
        <p className="text-xl font-extralight">Container</p>
        <p className="font-bold text-4xl">We make Global Trade happen</p>
        <div className="flex justify-center">
          <div className=" w-14 border-b-[6px] border-subMain"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 my-6 mx-20">
        <div className="bg-gray rounded">
          <div className="flex flex-col gap-2 px-4 py-6">
            <div className="flex gap-4 items-center  ">
              <MdCalendarMonth className="w-6 h-6 text-slate-600" />
              <p className="text-xl font-light">Schedules</p>
            </div>
            <div className="flex gap-2 items-center">
              <Input label={"From"} placeholder="Location" type="text" />
              <Input label={"To"} placeholder="Location" type="text" />
              <div className="mt-6">
                <DatePicker
                  selected={selectedDate}
                  className="w-32"
                  showIcon
                  onChange={(date) => setSelectedDate(date)}
                />
              </div>
              <button className="px-4 py-2 bg-subMain text-white rounded-md mt-6">
                Find
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray rounded">
          <div className="flex flex-col gap-2 px-4 py-6">
            <div className="flex gap-4 items-center  ">
              <LiaMapMarkedAltSolid className="w-6 h-6 text-slate-600" />
              <p className="text-xl font-light">Tracking</p>
            </div>
            <div className="flex gap-2 items-center">
              <Input
                label={"Entern a Container-/ No Application ...."}
                placeholder="Container-/ No Application ...."
                type="text"
              />
              <button className="px-4 py-2 bg-subMain text-white rounded-md mt-6">
                Track
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray rounded">
          <div className="flex flex-col gap-2 px-4 py-6">
            <div className="flex gap-4 items-center  ">
              <IoMdPricetags className="w-6 h-6 text-slate-600" />
              <p className="text-xl font-light">Quick Quotes</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="flex-1">
                Your container shipping quote in 30 seconds.
              </p>
              <button className="px-4 py-2 bg-subMain text-white rounded-md ">
                GET a Quote
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray rounded">
          <div className="flex flex-col gap-2 px-4 py-6">
            <div className="flex gap-4 items-center  ">
              <FaRoute className="w-6 h-6 text-slate-600" />
              <p className="text-xl font-light">Find Router</p>
            </div>
            <div className="flex gap-2 items-center">
              <Select
                name="from-router"
                label={"From"}
                options={OptionNation}
              />
              <Select name="to-router" label={"To"} options={OptionNation} />
              <button className="px-4 py-2 bg-subMain text-white rounded-md mt-6">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
