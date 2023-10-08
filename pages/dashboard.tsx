import React from "react";
import CardWithTitle from "./shared/components/CardWithTitle";
import star from "@public/Group 16.png";
import Image from "next/image";
import LineChart from "./shared/components/LineChart";
import TimelineChart from "./shared/components/TimelineChart";
import TaskCard from "./shared/components/TaskCard";
function dashboard() {
  return (
    <div className="grid grid-cols-3 space-y-4 p-8 gap-3">
      <div className="flex gap-2 col-span-3 ">
        {[1, 2, 3].map((e) => (
          <CardWithTitle
            className=""
            cardTitle={"title"}
            cardBody={
              <div className="  p-6 relative items-center justify-center flex ">
                <LineChart className={"w-1/2"} />
                <div className="text-xl">
                  <span className="text-black font-bold flex gap-2">
                    10 <p className="text-green-500">More</p>
                  </span>
                  <p>from last week</p>
                </div>
              </div>
            }
            cardIcon={<Image src={star} alt="s" />}
            cardPercentage={"08"}
            key={e}
          />
        ))}
      </div>
      <div className="col-span-3">
        <TimelineChart />
      </div>
      <div className="space-y-2 col-span-3">
        {[1, 2, 3].map((a) => (
          <TaskCard key={a} />
        ))}
      </div>
    </div>
  );
}

export default dashboard;
