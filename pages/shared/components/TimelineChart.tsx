import React, { useState } from "react";
import CardWithTitle from "./CardWithTitle";
import LineChart from "./LineChart";

const arrayOfAnalyses = ["Daily", "Weekly", "Monthly"];
function TimelineChart() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div
      className={`rounded-3xl w-full dark:bg-[#1E1F25] bg-white shadow-sm shadow-black `}
    >
      <div className="flex justify-between text-2xl font-semibold p-4 ">
        <p>Task Done</p>

        <div className="flex items-center gap-3 text-sm">
          {arrayOfAnalyses.map((nameOfData) => (
            <button
              className={`${
                activeTab === nameOfData
                  ? " border-b-2 text-[#1EA7FF] border-b-blue-400"
                  : ""
              } text-[#232360]  pb-2`}
              key={nameOfData}
              onClick={() => {
                setActiveTab(nameOfData);
              }}
            >
              {nameOfData}
            </button>
          ))}
        </div>
      </div>
      <div className="  p-6 relative items-center justify-center flex ">
        <LineChart className={"w-1/2"} />
      </div>
    </div>
  );
}

export default TimelineChart;
