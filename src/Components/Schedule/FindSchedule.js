import React, { useEffect, useState } from "react";
import { Input } from "../../shared/input";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

function FindSchedule({ from, to, date }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      to,
      from,
      date,
    },
  });
  const submitFind = (data) => {
    console.log(data);
    console.log("call api");
    //tra ve data
    //-> Set Data
  };
  const handlClear = () => {
    reset({
      to: "",
      from: "",
      date: "",
    });
  };
  useEffect(() => {
    setIsLoading(true);
    console.log("render");
    //call API
    setData([1, 2]);
    setIsLoading(false);
  }, [data]);
  return (
    <form className="flex flex-col gap-4  " onSubmit={handleSubmit(submitFind)}>
      <div className="bg-gray flex  gap-2 py-8 ">
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center  mx-6">
            <Input
              label={"Location Start *"}
              register={register("from")}
              small={true}
            />
          </div>
          <div className=" mx-6">
            <Input
              label={"Location End *"}
              small={true}
              register={register("to")}
            />
          </div>
          <div className=" mx-6 w-full">
            <DatePicker showIcon value={date} dateFormat="dd/MM/yyyy" />
          </div>
        </div>
        <div className="my-4">
          {isLoading ? (
            "Loading"
          ) : (
            <>
              {data.length > 0 ? (
                "data"
              ) : (
                <p className="text-center">
                  Not Schedule find for from{" "}
                  <span className="font-semibold">{from}</span> to{" "}
                  <span span className="font-semibold">
                    {to}{" "}
                  </span>
                  at <span className="font-semibold">{date}</span>
                </p>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex gap-4 justify-end mx-8">
        <button
          className="px-4 py-2 font-semibold bg-subMain text-white rounded transitions  hover:text-main hover:bg-white  hover:cursor-pointer"
          type="submit"
        >
          Find
        </button>
        <div
          className="px-4 py-2 font-semibold bg-subMain text-white rounded transitions  hover:text-main hover:bg-white  hover:cursor-pointer"
          onClick={handlClear}
        >
          Clear
        </div>
      </div>
    </form>
  );
}

export default FindSchedule;
