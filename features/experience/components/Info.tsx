import React from "react";
import { carDetails } from "@/data/cars.data";
import { formatToDollarPrice } from "@/lib/format";
import { currentModelType } from "@/typings";

type InfoProps = {
  curModel: currentModelType;
};

export default function Info({ curModel }: InfoProps) {
  const { name, price } = carDetails.find(({ tag }) => tag === curModel) || {};

  return (
    <div className="fixed top-[4.75rem] left-0 w-full z-[2] p-4 md:pt-8">
      <div className="flex items-start justify-start md:items-center md:justify-between flex-col md:flex-row gap-2 md:gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-pri md:max-w-[20pc]">
          {name}
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-[2.7rem] font-bold uppercase text-pri max-w-[25pc]">
          {price && formatToDollarPrice(price)}
        </h1>
      </div>
    </div>
  );
}
