import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TitleAndSub from "../TitleAndSub";
import ScheduleSearch from "./Landing/ScheduleSearch";
import TrackingSearch from "./Landing/TrackingSearch";
import QuickQuote from "./Landing/QuickQuote";
import FindRouter from "./Landing/FindRouter";

function Landing() {
  return (
    <div className="flex flex-col ">
      <TitleAndSub sub="Container" title="We make Global Trade happen" />
      <div className="grid grid-cols-2 gap-6 my-6 mx-20">
        <ScheduleSearch />
        <TrackingSearch />
        <QuickQuote />
        <FindRouter />
      </div>
    </div>
  );
}

export default Landing;
