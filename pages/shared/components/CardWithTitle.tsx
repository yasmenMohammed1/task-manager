import React from "react";

function CardWithTitle({
  className,
  cardTitle,
  cardBody,
  cardIcon,
  cardPercentage,
}: any) {
  return (
    <div
      className={`rounded-md dark:bg-[#1E1F25] bg-white shadow-sm shadow-black ${className}`}
    >
      <div className="flex justify-between p-4 ">
        <div className="flex gap-4">
          {cardIcon}
          <p>{cardTitle}</p>
        </div>
        <p className="">{cardPercentage}</p>
      </div>
      {cardBody}
    </div>
  );
}

export default CardWithTitle;
