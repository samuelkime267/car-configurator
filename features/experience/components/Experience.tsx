"use client";

import { OrbitControls, Environment } from "@react-three/drei";
import Models from "./Models";
import useLeva from "@/hooks/useLeva";
import Lights from "./Lights";
import Floor from "./Floor";
import { currentModelType } from "@/typings";
import { useEffect, useState } from "react";

export default function Experience() {
  const [currentModel, setCurrentModel] = useState<currentModelType>("bugatti");
  const { bgColor, ...values } = useLeva(currentModel);

  useEffect(() => {
    const handleClick = () => {
      if (currentModel === "audi") setCurrentModel("bugatti");
      if (currentModel === "bugatti") setCurrentModel("ferrari");
      if (currentModel === "ferrari") setCurrentModel("audi");
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [currentModel]);

  return (
    <>
      <Environment background files={"/sky.hdr"} />
      <color attach="background" args={[bgColor]} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <Lights {...values} />
      <Models {...values} currentModel={currentModel} />
      <Floor {...values} />
    </>
  );
}
