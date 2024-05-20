import React from "react";
import { FaRoute } from "react-icons/fa";
import { Select } from "../../../shared/input";
import OptionNation from "../../../Data/OptionNation";
import { useForm } from "react-hook-form";
function FindRouter() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-gray rounded">
      <div className="flex flex-col gap-2 px-4 py-6">
        <div className="flex gap-4 items-center  ">
          <FaRoute className="w-6 h-6 text-slate-600" />
          <p className="text-xl font-light">Find Router</p>
        </div>
        <div className="flex gap-2 items-center">
          <Select name="from-router" label={"From"} options={OptionNation} />
          <Select name="to-router" label={"To"} options={OptionNation} />
          <button className="px-4 py-2 bg-subMain text-white rounded-md mt-6">
            Find
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindRouter;
