"use client";

import { OrbitControls, Environment } from "@react-three/drei";
import Models from "./Models";
import useLeva from "@/hooks/useLeva";
import Lights from "./Lights";
import Floor from "./Floor";
import { currentModelType } from "@/typings";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

type ExperienceProps = {
  carColor: string;
  curModel: currentModelType;
};

export default function Experience({ carColor, curModel }: ExperienceProps) {
  const { bgColor, ...values } = useLeva(curModel);
  const { camera } = useThree();

  useEffect(() => {
    window.addEventListener("click", () => {
      console.log(camera.position);
    });
  }, [camera]);

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
      <Models {...values} carColor={carColor} curModel={curModel} />
      <Floor {...values} />
    </>
  );
}
