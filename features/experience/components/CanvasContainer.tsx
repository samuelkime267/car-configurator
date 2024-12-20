"use client";

import { Canvas } from "@react-three/fiber";
// import { Stats } from "@react-three/drei";
import Experience from "./Experience";
import { Leva } from "leva";
import { currentModelType } from "@/typings";

type CanvasProps = {
  carColor: string;
  curModel: currentModelType;
};

export default function CanvasContainer({ carColor, curModel }: CanvasProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Leva collapsed hidden />
      <Canvas
        dpr={1}
        shadows
        camera={{ position: [10.6, 2, -7.7], fov: 45, near: 0.001, far: 100 }}
      >
        {/* <Stats  /> */}
        <Experience carColor={carColor} curModel={curModel} />
      </Canvas>
    </div>
  );
}
