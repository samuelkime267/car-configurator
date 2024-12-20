"use client";

import CanvasContainer from "@/features/experience/components/CanvasContainer";
import Controls from "@/features/experience/components/Controls";
import Info from "@/features/experience/components/Info";
import useControls from "@/hooks/useControls";

export default function Home() {
  const values = useControls();

  return (
    <div>
      <CanvasContainer {...values} />
      <Info {...values} />
      <Controls {...values} />
    </div>
  );
}
