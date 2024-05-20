import React from "react";

function ScheduleTop() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <h1 className="text-3xl font-bold">Interactive Schedule</h1>
      <div className="flex flex-col gap-2">
        <p>
          To obtain your schedule, simply insert (type ahead) your start
          location, end location and the required time range. By default, the
          transport is preset to apply from / to carrier‘s corresponding
          container terminal or ramp.
        </p>
        <p>
          Alternatively, you may select 'Received at your door' and insert your
          desired location / inland point. If required, up to two via locations
          can be specified in addition. For a map-illustration of our service
          routes, you may also like to use our Interactive Service Finder.
        </p>
      </div>
    </div>
  );
}

export default ScheduleTop;
