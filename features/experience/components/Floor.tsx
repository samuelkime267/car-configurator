import { MeshReflectorMaterial } from "@react-three/drei";

type FloorProps = {
  flColor: string;
  flPosX: number;
  flPosY: number;
  flPosZ: number;
  flRadius: number;
  flThetaSeg: number;
  flRingPosX: number;
  flRingPosY: number;
  flRingPosZ: number;
  ringInRad: number;
  ringOutRad: number;
  ringThetaSeg: number;

  flBlurWidth: number;
  flBlurHeight: number;
  flMixBlur: number;
  flMixStrength: number;
  flMixContrast: number;
  flResolution: number;
  flMirror: number;
  flDepthScale: number;
  flMinDepthThreshold: number;
  flMaxDepthThreshold: number;
  flDepthToBlurRatioBias: number;
  flDistortion: number;
  flReflectorOffset: number;

  flRoughness: number;
  flMetalness: number;
};

export default function Floor({
  flColor,
  flRadius,
  flThetaSeg,
  flPosX,
  flPosY,
  flPosZ,
  flRingPosX,
  flRingPosY,
  flRingPosZ,
  ringInRad,
  ringOutRad,
  ringThetaSeg,
  flBlurHeight,
  flBlurWidth,
  flDepthScale,
  flDepthToBlurRatioBias,
  flDistortion,
  flMaxDepthThreshold,
  flMinDepthThreshold,
  flMirror,
  flMixBlur,
  flMixContrast,
  flMixStrength,
  flReflectorOffset,
  flResolution,
  flMetalness,
  flRoughness,
}: FloorProps) {
  return (
    <>
      <mesh
        position={[flPosX, flPosY, flPosZ]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        receiveShadow
      >
        <ringGeometry args={[0, flRadius, flThetaSeg]} />
        <MeshReflectorMaterial
          roughness={flRoughness}
          metalness={flMetalness}
          color={flColor}
          blur={[flBlurHeight, flBlurWidth]}
          mixBlur={flMixBlur}
          mixStrength={flMixStrength}
          mixContrast={flMixContrast}
          resolution={flResolution}
          mirror={flMirror}
          depthScale={flDepthScale}
          minDepthThreshold={flMinDepthThreshold}
          maxDepthThreshold={flMaxDepthThreshold}
          depthToBlurRatioBias={flDepthToBlurRatioBias}
          distortion={flDistortion}
          reflectorOffset={flReflectorOffset}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[flRingPosX, flRingPosY, flRingPosZ]}
      >
        <ringGeometry args={[ringInRad, ringOutRad, ringThetaSeg]} />
        <meshBasicMaterial color={"#ffffff"} />
      </mesh>
    </>
  );
}
