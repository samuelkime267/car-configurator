"use client";

import * as THREE from "three";
import { useGLTF, Center } from "@react-three/drei";
import { Suspense } from "react";
import { currentModelType } from "@/typings";
import { useEffect } from "react";

type ModelProps = {
  mPosY: number;
  mRotY: number;
  mScale: number;
  mColor: string;
  currentModel: currentModelType;
};

export default function Models({
  mPosY,
  mRotY,
  mScale,
  mColor,
  currentModel,
}: ModelProps) {
  const models = useGLTF([
    "/models/audi.glb",
    "/models/2016_ferrari_f12tdf.glb",
    "/models/bugatti_la_voitre_noir.glb",
  ]);
  useEffect(() => {
    models[0].scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.name === "Object_16" || child.name === "Object_42") {
          child.material.color = new THREE.Color(mColor);
        }
      }
    });

    models[1].scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (
          child.name ===
          "Ferrari_F12_carchassis_carpaint_custom01_LOD2_carpaint_0"
        ) {
          child.material.color = new THREE.Color(mColor);
        }
      }
    });

    models[2].scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // for bugatti
        if (
          child.name === "Object_9_1" ||
          child.name === "Object_11_1" ||
          child.name === "Object_12_1" ||
          child.name === "Object_1"
        ) {
          child.material.color = new THREE.Color(mColor);
        }
      }
    });
  }, [mColor, models]);

  return (
    <>
      <Suspense fallback={null}>
        <group
          position={[0, mPosY, 0]}
          rotation={[0, mRotY, 0]}
          scale={[mScale, mScale, mScale]}
        >
          <primitive
            object={
              currentModel === "audi"
                ? models[0].scene
                : currentModel === "ferrari"
                ? models[1].scene
                : models[2].scene
            }
          />
        </group>
      </Suspense>
    </>
  );
}
