"use client";

import * as THREE from "three";
import { useGLTF, Center } from "@react-three/drei";

type ModelProps = {
  mPosX: number;
  mPosY: number;
  mPosZ: number;
  mRotX: number;
  mRotY: number;
  mRotZ: number;
  mScale: number;
  mColor: string;
};

export default function Models({
  mPosX,
  mPosY,
  mPosZ,
  mRotX,
  mRotY,
  mRotZ,
  mScale,
  mColor,
}: ModelProps) {
  const { scene } = useGLTF("/models/audi.glb");

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      console.log(child);

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name === "Object_16" || child.name === "Object_42") {
        child.material.color = new THREE.Color(mColor);
      }
    }
  });

  return (
    <>
      <Center
        position={[mPosX, mPosY, mPosZ]}
        rotation={[mRotX, mRotY, mRotZ]}
        scale={[mScale, mScale, mScale]}
      >
        <primitive object={scene} />
      </Center>
    </>
  );
}
