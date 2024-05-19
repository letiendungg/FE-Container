import React from "react";
import Layout from "./Layout/Layout";
import { useLocation } from "react-router-dom";
function Schedule() {
  const query = new URLSearchParams(useLocation().search);
  const from = query.get("from");
  const to = query.get("to");

  return (
    <Layout>
      <div>Schedule</div>
    </Layout>
  );
}

export default Schedule;
