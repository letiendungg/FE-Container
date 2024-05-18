import React from "react";

function TitleAndSub({ title, sub }) {
  return (
    <div className="my-6 flex flex-col text-center justify-center gap-2">
      <p className="text-xl font-extralight">{sub}</p>
      <p className="font-bold text-4xl">{title}</p>
      <div className="flex justify-center">
        <div className=" w-14 border-b-[6px] border-subMain"></div>
      </div>
    </div>
  );
}

export default TitleAndSub;
