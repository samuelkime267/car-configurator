"use client";

import React, { useMemo, useRef } from "react";

import { cn } from "@/lib/utils";
import useLoader from "@/hooks/useLoader";

export default function Loader() {
  const counterHolderRef = useRef<HTMLParagraphElement>(null);
  useLoader(counterHolderRef);
  const lineHeight = useMemo(() => 2, []);
  const arrayCount = [...Array(10)];

  return (
    <div
      ref={counterHolderRef}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center gap-4  bg-[#74a0c8] z-50 overflow-hidden"
    >
      <div
        style={{ height: `${lineHeight}rem` }}
        className="relative flex items-center justify-center overflow-hidden"
      >
        {/* hundredth */}
        <div className="relative counter-container-holder">
          <div className="text-yellow-500 counter opacity-0 text-4xl font-bold">
            0
          </div>
          {arrayCount.map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${i * 2}rem)`,
                height: `${lineHeight}rem`,
              }}
              className={cn(
                "text-4xl font-bold absolute top-0 right-0 counter text-right"
              )}
            >
              {i}
            </div>
          ))}
          {arrayCount.map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${(i + 1) * 2}rem)`,
                height: `${lineHeight}rem`,
              }}
              className={cn(
                "text-4xl font-bold absolute top-0 left-0 counter-2"
              )}
            >
              {i}
            </div>
          ))}
        </div>

        {/* tenth */}
        <div className="relative counter-container-holder">
          <div className="text-yellow-500 counter opacity-0 text-4xl font-bold">
            0
          </div>
          {arrayCount.map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${i * 2}rem)`,
                height: `${lineHeight}rem`,
              }}
              className={cn("text-4xl font-bold absolute top-0 left-0 counter")}
            >
              {i}
            </div>
          ))}
          {arrayCount.map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${(i + 1) * 2}rem)`,
                height: `${lineHeight}rem`,
              }}
              className={cn(
                "text-4xl font-bold absolute top-0 left-0 counter-2"
              )}
            >
              {i}
            </div>
          ))}
        </div>

        {/* unit */}
        <div className="relative counter-container-holder">
          <div className="text-yellow-500 counter opacity-0 text-4xl font-bold">
            0
          </div>
          {arrayCount.map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${i * 2}rem)`,
                height: `${lineHeight}rem`,
              }}
              className={cn("text-4xl font-bold absolute top-0 left-0 counter")}
            >
              {i}
            </div>
          ))}
          {arrayCount.map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${(i + 1) * 2}rem)`,
                height: `${lineHeight}rem`,
              }}
              className={cn(
                "text-4xl font-bold absolute top-0 left-0 counter-2"
              )}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
