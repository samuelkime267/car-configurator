"use client";

import { useControls, folder } from "leva";
import { currentModelType } from "@/typings";
import { useEffect, useMemo } from "react";

export default function useLeva(currentModel: currentModelType) {
  const { audiSettings, bugattiSettings, ferrariSettings } = useMemo(() => {
    const ferrariSettings = {
      mPosY: { value: -0.17, min: -5, max: 5, step: 0.01 },
      mRotY: { value: Math.PI * 0.5, min: -Math.PI, max: Math.PI, step: 0.01 },
      mScale: { value: 130, min: 0, max: 200, step: 0.01 },
      mColor: { value: "#71ff8a" },
    };

    const bugattiSettings = {
      mPosY: { value: -0.26, min: -5, max: 5, step: 0.01 },
      mRotY: { value: -Math.PI * 0.5, min: -Math.PI, max: Math.PI, step: 0.01 },
      mScale: { value: 0.5, min: 0, max: 200, step: 0.01 },
      mColor: { value: "#71ff8a" },
    };

    const audiSettings = {
      mPosY: { value: -0.1, min: -5, max: 5, step: 0.01 },
      mRotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      mScale: { value: 0.3, min: 0, max: 200, step: 0.01 },
      mColor: { value: "#620000" },
    };

    return { ferrariSettings, bugattiSettings, audiSettings };
  }, []);

  const [values, set] = useControls(() => ({
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
    model: folder(
      currentModel === "audi"
        ? audiSettings
        : currentModel === "ferrari"
        ? ferrariSettings
        : bugattiSettings
    ),
  }));

  useEffect(() => {
    if (currentModel === "audi") {
      set({
        mColor: audiSettings.mColor.value,
        mPosY: audiSettings.mPosY.value,
        mRotY: audiSettings.mRotY.value,
        mScale: audiSettings.mScale.value,
      });
    }
    if (currentModel === "bugatti") {
      set({
        mColor: bugattiSettings.mColor.value,
        mPosY: bugattiSettings.mPosY.value,
        mRotY: bugattiSettings.mRotY.value,
        mScale: bugattiSettings.mScale.value,
      });
    }
    if (currentModel === "ferrari") {
      set({
        mColor: ferrariSettings.mColor.value,
        mPosY: ferrariSettings.mPosY.value,
        mRotY: ferrariSettings.mRotY.value,
        mScale: ferrariSettings.mScale.value,
      });
    }
  }, [currentModel, set, bugattiSettings, ferrariSettings, audiSettings]);

  return values;
}

/**
 * "use client";

import { useControls, folder } from "leva";

export default function useLeva() {
  return useControls({
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
  });
}

 */
