"use client";

import { useControls, folder } from "leva";

export default function useLeva() {
  const values = useControls({
    lighting: folder({
      dLColor: "#fff2e1",
      dLIntensity: { value: 1, min: 0, max: 10, step: 0.1 },
      dLPosX: { value: 0, min: -10, max: 10, step: 0.1 },
      dLPosY: { value: 1.5, min: -10, max: 10, step: 0.1 },
      dLPosZ: { value: -3, min: -10, max: 10, step: 0.1 },
    }),
    floor: folder({
      flBlurWidth: { value: 0, min: 0, max: 300, step: 1 },
      flBlurHeight: { value: 0, min: 0, max: 300, step: 1 },
      flMixBlur: { value: 0, min: 0, max: 1, step: 0.1 },
      flRoughness: { value: 0.3, min: 0, max: 1, step: 0.01 },
      flMetalness: { value: 0.2, min: 0, max: 1, step: 0.01 },
      flMixStrength: { value: 1.5, min: 0, max: 10, step: 0.1 },
      flMixContrast: { value: 1, min: 0, max: 10, step: 0.1 },
      flResolution: { value: 512, min: 0, max: 1024, step: 1 },
      flMirror: { value: 0, min: 0, max: 1, step: 1 },
      flDepthScale: { value: 0, min: 0, max: 1, step: 0.1 },
      flMinDepthThreshold: { value: 0.5, min: 0, max: 1, step: 0.1 },
      flMaxDepthThreshold: { value: 1, min: 0, max: 1, step: 0.1 },
      flDepthToBlurRatioBias: { value: 0.25, min: 0, max: 1, step: 0.01 },
      flDistortion: { value: 10, min: 0, max: 10, step: 0.1 },
      flReflectorOffset: { value: 0, min: -2, max: 2, step: 0.1 },
      bgColor: "#102733",
      flColor: "#102733",
      flPosX: { value: 0, min: -5, max: 5, step: 0.1 },
      flPosY: { value: -1, min: -5, max: 5, step: 0.1 },
      flPosZ: { value: 0, min: -5, max: 5, step: 0.1 },
      flRadius: { value: 50, min: 0, max: 100, step: 0.1 },
      flThetaSeg: { value: 10, min: 0.01, max: 20, step: 0.01 },

      floorRing: folder({
        flRingPosX: { value: 0, min: -5, max: 10, step: 0.1 },
        flRingPosY: { value: -0.9, min: -5, max: 10, step: 0.1 },
        flRingPosZ: { value: 0, min: -5, max: 10, step: 0.1 },
        ringInRad: { value: 5, min: 0.1, max: 20, step: 0.1 },
        ringOutRad: { value: 5.5, min: 0.01, max: 20, step: 0.01 },
        ringThetaSeg: { value: 40, min: 0.01, max: 100, step: 0.01 },
      }),
    }),

    model: folder({
      mPosX: { value: 0, min: -5, max: 5, step: 0.01 },
      mPosY: { value: -0.1, min: -5, max: 5, step: 0.01 },
      mPosZ: { value: 0, min: -5, max: 5, step: 0.01 },
      mRotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mRotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mRotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mScale: { value: 0.3, min: 0, max: 5, step: 0.01 },
      mColor: { value: "#620000" },
    }),
  });

  return values;
}
