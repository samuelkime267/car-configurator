"use client";

import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import Experience from "./Experience";
import { Leva } from "leva";

export default function CanvasContainer() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Leva collapsed />
      <Canvas
        dpr={1}
        shadows
        camera={{ position: [0, 0, 10], fov: 45, near: 0.001, far: 100 }}
      >
        <Stats />
        <Experience />
      </Canvas>
    </div>
  );
}
