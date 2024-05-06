import React from "react";
import { Input, Select } from "../shared/input";

function Home() {
  const options = [
    { value: "123213", title: "123123" },
    // Add more options as needed
  ];

  return (
    <>
      <div className="text-blue-500">Home</div>
      <Input label={"123"} name={"hehe"} type={"text"} />
      <Select label={"1234"} options={options} />
    </>
  );
}

export default Home;
