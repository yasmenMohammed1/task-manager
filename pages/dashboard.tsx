import React from "react";
import CardWithTitle from "./shared/components/CardWithTitle";
import star from "@public/Group 16.png";
import Image from "next/image";
import LineChart from "./shared/components/LineChart";
function dashboard() {
  return (
    <div className="grid grid-cols-3 p-8 gap-3">
      {[1, 2, 3].map((e) => (
        <CardWithTitle
          cardTitle={"title"}
          cardBody={
            <div className="  p-6 relative items-center justify-center flex ">
              <LineChart className={"w-1/2"} />
              <div>
                <span className="text-black font-semibold flex gap-2">
                  10 <p className="text-green-500 z-50">More</p>
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
  );
}

export default dashboard;
