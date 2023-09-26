import React from "react";
import { useForm } from "react-hook-form";
import InputController from "./input-controller";

function CardWithTitle({
  className,
  cardTitle,
  cardBody,
  cardIcon,
  cardPercentage,
}: any) {
  const { control } = useForm({});
  return (
    <div
      className={`rounded-3xl dark:bg-[#1E1F25] bg-white shadow-sm shadow-black ${className}`}
    >
      <div className="flex justify-between text-2xl font-semibold p-4 ">
        <div className="  flex gap-4">
          {cardIcon}
          <p className=" text-[#8C97A8]">{cardTitle}</p>
        </div>
        <p>{cardPercentage}</p>
      </div>
      {cardBody}
    </div>
  );
}

export default CardWithTitle;
