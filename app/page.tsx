// import CanvasContainer from "@/features/experience/components/CanvasContainer";
import Controls from "@/features/experience/components/Controls";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <CanvasContainer /> */}
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src={"/car-bg-img.png"}
          alt="bg"
          width={2880}
          height={1574}
          className="w-full h-full object-cover"
        />
      </div>
      <Controls />
    </div>
  );
}
