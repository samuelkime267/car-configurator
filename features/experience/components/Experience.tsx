"use client";

import { OrbitControls, Environment } from "@react-three/drei";
import Models from "./Models";
import useLeva from "@/hooks/useLeva";
import Lights from "./Lights";
import Floor from "./Floor";
import { currentModelType } from "@/typings";

type ExperienceProps = {
  carColor: string;
  curModel: currentModelType;
};

export default function Experience({ carColor, curModel }: ExperienceProps) {
  const { bgColor, ...values } = useLeva(curModel);

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
