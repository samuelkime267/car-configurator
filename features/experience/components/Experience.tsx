"use client";

import { OrbitControls, Environment } from "@react-three/drei";
import Models from "./Models";
import useLeva from "@/hooks/useLeva";
import Lights from "./Lights";
import Floor from "./Floor";

export default function Experience() {
  const { bgColor, ...values } = useLeva();

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
      <Models {...values} />
      <Floor {...values} />
    </>
  );
}
