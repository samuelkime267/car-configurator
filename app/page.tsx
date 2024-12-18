"use client";

import CanvasContainer from "@/features/experience/components/CanvasContainer";
import Controls from "@/features/experience/components/Controls";
import Info from "@/features/experience/components/Info";
import { useState } from "react";
import { currentModelType } from "@/typings";

export default function Home() {
  const [carColor, setCarColor] = useState("#ffffff");
  const [curModel, setCurModel] = useState<currentModelType>("audi");
  return (
    <div>
      <CanvasContainer carColor={carColor} curModel={curModel} />
      <Info curModel={curModel} />
      <Controls
        curModel={curModel}
        setCurModel={setCurModel}
        carColor={carColor}
        setCarColor={setCarColor}
      />
    </div>
  );
}
