import React from "react";
import Layout from "./Layout/Layout";
import { useLocation } from "react-router-dom";
import FindSchedule from "../Components/Schedule/FindSchedule";
import ScheduleTop from "../Components/Schedule/ScheduleTop";
function Schedule() {
  const query = new URLSearchParams(useLocation().search);
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");

  return (
    <Layout>
      <div className="mx-8 my-4">
        <ScheduleTop />
        <FindSchedule from={from} to={to} date={date} />
      </div>
    </Layout>
  );
}

export default Schedule;
