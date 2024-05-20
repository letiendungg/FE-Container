import React, { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import DatePicker from "react-datepicker";
import { Input } from "../../../shared/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function ScheduleSearch() {
  const [selectedDate, setSelectedDate] = useState();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const findHandle = (data) => {
    data.date = selectedDate;
    navigate(`/schedule?to=${data.to}&from=${data.from}&date=${data.date}`);
  };
  return (
    <div className="bg-gray rounded">
      <form
        onSubmit={handleSubmit(findHandle)}
        className="flex flex-col gap-2 px-4 py-6"
      >
        <div className="flex gap-4 items-center  ">
          <MdCalendarMonth className="w-6 h-6 text-slate-600" />
          <p className="text-xl font-light">Schedules</p>
        </div>
        <div className="flex gap-2 items-center">
          <Input
            register={register("from")}
            label={"From"}
            placeholder="Location"
            type="text"
          />
          <Input
            register={register("to")}
            label={"To"}
            placeholder="Location"
            type="text"
          />
          <div className="mt-6">
            <DatePicker
              selected={selectedDate}
              className="w-32"
              showIcon
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-subMain text-white rounded-md mt-6"
          >
            Find
          </button>
        </div>
      </form>
    </div>
  );
}

export default ScheduleSearch;
