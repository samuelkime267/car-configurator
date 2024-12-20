"use client";

import { useState } from "react";
import gsap from "gsap";
import { currentModelType } from "@/typings";

export default function useControls() {
  const [carColor, setCarColor] = useState("#000000");
  const [curModel, setCurModel] = useState<currentModelType>("audi");

  const getInfoControlEls = () => document.querySelectorAll(".details-show");
  const getInfoTextEls = () => document.querySelectorAll(".info-text");
  const getCanvas = () => document.getElementById("car-render");

  const orbitControlStart = () => {
    const els = getInfoControlEls();
    const canvas = getCanvas();
    if (!canvas) return;

    canvas.style.cursor = "grabbing";
    gsap.to(els, { opacity: 0 });
    gsap.set(els, { pointerEvents: "none" });
  };

  const orbitControlEnd = () => {
    const els = getInfoControlEls();
    const canvas = getCanvas();
    if (!canvas) return;

    canvas.style.cursor = "grab";
    gsap.to(els, { opacity: 1 });
    gsap.set(els, { pointerEvents: "auto" });
  };

  const handleNextModel = () => {
    setCurModel((curModel) =>
      curModel === "audi"
        ? "bugatti"
        : curModel === "bugatti"
        ? "ferrari"
        : "audi"
    );
  };
  const handlePrevModel = () => {
    setCurModel((curModel) =>
      curModel === "ferrari"
        ? "bugatti"
        : curModel === "bugatti"
        ? "audi"
        : "ferrari"
    );
  };
  const handleColor = (color: string) => {
    setCarColor(color);
  };

  return {
    orbitControlStart,
    orbitControlEnd,
    carColor,
    curModel,
    handleNextModel,
    handlePrevModel,
    handleColor,
  };
}
