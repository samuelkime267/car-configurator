"use client";

import React from "react";
import { Arrow, Color } from "@/components/icons";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { carsColor } from "@/data/cars.data";
import { cn } from "@/lib/utils";
import { currentModelType } from "@/typings";

type ControlsProps = {
  carColor: string;
  curModel: currentModelType;
  setCarColor: React.Dispatch<React.SetStateAction<string>>;
  setCurModel: React.Dispatch<React.SetStateAction<currentModelType>>;
};

export default function Controls({
  carColor,
  setCarColor,
  setCurModel,
}: ControlsProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[3] p-4 flex items-center justify-between">
      <Button
        btnType="secondary"
        className="md:flex max-md:!px-2.5"
        onClick={() => {
          setCurModel((curModel) =>
            curModel === "ferrari"
              ? "bugatti"
              : curModel === "bugatti"
              ? "audi"
              : "ferrari"
          );
        }}
      >
        <Arrow className="w-6 md:w-8 h-6 md:h-8 -rotate-90" />
        <p className="hidden md:block">previous</p>
      </Button>

      <div className="bg-pri/20 rounded-full p-2 flex items-center justify-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="secondary !py-4">
            <Color className="w-6 h-6" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white/50 backdrop-blur min-w-52 w-full max-w-52">
            {carsColor.map(({ color, name }, i) => {
              const isCurColor = color === carColor;
              return (
                <Button
                  key={i}
                  onClick={() => setCarColor(color)}
                  className={cn(
                    "flex items-center justify-start gap-2 mb-1 p-1 w-full rounded-full duration-300 hover:bg-white",
                    {
                      "bg-white": isCurColor,
                    }
                  )}
                >
                  <div
                    style={{ backgroundColor: color }}
                    className="w-6 h-6 rounded-full border border-black"
                  />
                  <p className="capitalize text-lg font-medium">{name}</p>
                </Button>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button btnType="primary">Buy now</Button>
      </div>

      <Button
        btnType="secondary"
        className="md:flex max-md:!px-2.5"
        onClick={() => {
          setCurModel((curModel) =>
            curModel === "audi"
              ? "bugatti"
              : curModel === "bugatti"
              ? "ferrari"
              : "audi"
          );
        }}
      >
        <p className="hidden md:block">next</p>
        <Arrow className="w-6 md:w-8 h-6 md:h-8 rotate-90" />
      </Button>
    </div>
  );
}
