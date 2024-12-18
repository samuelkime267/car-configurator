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
  curModel: currentModelType;
  carColor: string;
};

export default function Models({
  mPosY,
  mRotY,
  mScale,
  curModel,
  carColor,
}: ModelProps) {
  return (
    <>
      <Suspense fallback={null}>
        {curModel === "audi" ? (
          <AudiModels
            carColor={carColor}
            curModel={curModel}
            mPosY={mPosY}
            mRotY={mRotY}
            mScale={mScale}
          />
        ) : curModel === "ferrari" ? (
          <FerrariModels
            carColor={carColor}
            curModel={curModel}
            mPosY={mPosY}
            mRotY={mRotY}
            mScale={mScale}
          />
        ) : (
          <BugattiModels
            carColor={carColor}
            curModel={curModel}
            mPosY={mPosY}
            mRotY={mRotY}
            mScale={mScale}
          />
        )}
      </Suspense>
    </>
  );
}

function AudiModels({ mPosY, mRotY, mScale, carColor }: ModelProps) {
  const models = useGLTF("/models/audi.glb");
  useEffect(() => {
    models.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.name === "Object_16" || child.name === "Object_42") {
          child.material.color = new THREE.Color(carColor);
        }
      }
    });
  }, [carColor, models]);

  return (
    <>
      <Suspense fallback={null}>
        <Center
          position={[0, mPosY, 0]}
          rotation={[0, mRotY, 0]}
          scale={[mScale, mScale, mScale]}
        >
          <primitive object={models.scene} />
        </Center>
      </Suspense>
    </>
  );
}

function BugattiModels({
  mPosY,
  mRotY,
  mScale,

  carColor,
}: ModelProps) {
  const models = useGLTF("/models/bugatti_la_voitre_noir.glb");
  useEffect(() => {
    models.scene.traverse((child) => {
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
          child.material.color = new THREE.Color(carColor);
        }
      }
    });
  }, [carColor, models]);

  return (
    <>
      <Suspense fallback={null}>
        <Center
          position={[0, mPosY, 0]}
          rotation={[0, mRotY, 0]}
          scale={[mScale, mScale, mScale]}
        >
          <primitive object={models.scene} />
        </Center>
      </Suspense>
    </>
  );
}

function FerrariModels({
  mPosY,
  mRotY,
  mScale,

  carColor,
}: ModelProps) {
  const models = useGLTF("/models/2016_ferrari_f12tdf.glb");
  useEffect(() => {
    models.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (
          child.name ===
          "Ferrari_F12_carchassis_carpaint_custom01_LOD2_carpaint_0"
        ) {
          child.material.color = new THREE.Color(carColor);
        }
      }
    });
  }, [carColor, models]);

  return (
    <>
      <Suspense fallback={null}>
        <Center
          position={[0, mPosY, 0]}
          rotation={[0, mRotY, 0]}
          scale={[mScale, mScale, mScale]}
        >
          <primitive object={models.scene} />
        </Center>
      </Suspense>
    </>
  );
}
