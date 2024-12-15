type LightsProps = {
  dLColor: string;
  dLIntensity: number;
  dLPosX: number;
  dLPosY: number;
  dLPosZ: number;
};

export default function Lights({
  dLColor,
  dLIntensity,
  dLPosX,
  dLPosY,
  dLPosZ,
}: LightsProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[dLPosX, dLPosY, dLPosZ]}
        intensity={dLIntensity}
        color={dLColor}
      />
    </>
  );
}
