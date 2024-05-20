import React from "react";
import { IoMdPricetags } from "react-icons/io";

function QuickQuote() {
  return (
    <div className="bg-gray rounded">
      <div className="flex flex-col gap-2 px-4 py-6">
        <div className="flex gap-4 items-center  ">
          <IoMdPricetags className="w-6 h-6 text-slate-600" />
          <p className="text-xl font-light">Quick Quotes</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="flex-1">Your container shipping quote in 30 seconds.</p>
          <button className="px-4 py-2 bg-subMain text-white rounded-md ">
            GET a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickQuote;
