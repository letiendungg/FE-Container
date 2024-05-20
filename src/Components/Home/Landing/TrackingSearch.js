import React from "react";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { Input } from "../../../shared/input";

function TrackingSearch() {
  return (
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
    </div>
  );
}

export default TrackingSearch;
