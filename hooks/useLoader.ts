"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

export default function useLoader(
  counterHolderRef: React.RefObject<HTMLParagraphElement>
) {
  const [isLoading, setIsLoading] = useState(true);
  const { progress } = useProgress();

  const ease: gsap.EaseString = useMemo(() => "none", []);
  const duration = useMemo(() => 0.4, []);

  const loaderTl = useRef<GSAPTimeline>(
    gsap.timeline({
      paused: true,
      defaults: { duration },
      onComplete: () => {
        setIsLoading(false);
      },
    })
  );
  const lineHeight = useMemo(() => 2, []);

  useEffect(() => {
    if (!counterHolderRef.current) return;

    const ctx = gsap.context(() => {
      const loops = [...Array(6)];
      const q = gsap.utils.selector(counterHolderRef.current);
      const [hundredthContainer, tenthContainer, unitContainer] = q(
        ".counter-container-holder"
      );

      const counterH = gsap.utils.selector(hundredthContainer)(".counter");

      const counterT = gsap.utils.selector(tenthContainer)(".counter");
      const counterT2 = gsap.utils.selector(tenthContainer)(".counter-2");

      const counterU = gsap.utils.selector(unitContainer)(".counter");
      const counterU2 = gsap.utils.selector(unitContainer)(".counter-2");

      const halfDuration = duration / 2;
      const followUpDuration = duration / counterU.length;

      loops.forEach((_, i) => {
        if (i === 0) {
          // 0-9
          loaderTl.current.to(counterU, {
            y: `-=${(counterU.length - 1) * lineHeight}rem`,
            duration,
            ease,
          });

          return;
        }

        if (i === 5) {
          //90 -100
          loaderTl.current
            .to(
              counterT,
              {
                y: `-=${lineHeight}rem`,
                duration,
                ease: "power4.inOut",
              },
              `-=${followUpDuration}`
            )
            .to(
              counterU2,
              {
                y: `-=${(counterU2.length + 1) * lineHeight}rem`,
                ease,
                duration,
              },
              `<`
            )
            // resetting counter
            .set(
              counterU,
              {
                y: `+=${counterU.length * lineHeight}rem`,
              },
              `-=${halfDuration}`
            )
            .to(
              counterU,
              {
                y: `-=${lineHeight}rem`,
                ease: "power4.inOut",
                duration,
              },
              // `-=${duration}`
              "<"
            )

            .to(
              counterT,
              {
                y: `-=${lineHeight}rem`,
                duration,
                ease: "power4.inOut",
              },
              `-=${(duration * 2) / 3}`
            )
            .to(
              counterT2,
              {
                y: `-=${lineHeight}rem`,
                duration,
                ease: "power4.inOut",
              },
              `<`
            )
            .to(
              counterH,
              {
                y: `-=${lineHeight}rem`,
                duration,
                ease: "power4.inOut",
              },
              // `-=${followUpDuration}`
              `-=${(duration * 2) / 3}`
            );
          return;
        }

        loaderTl.current
          // 10 - 89
          .to(
            counterT,
            {
              y: `-=${lineHeight}rem`,
              duration,
              ease: "power4.inOut",
            },
            `-=${followUpDuration}`
          )
          .to(
            counterU2,
            {
              y: `-=${(counterU2.length + 1) * lineHeight}rem`,
              ease,
              duration,
            },
            `<`
          )
          // resetting counter
          .set(
            counterU,
            {
              y: `+=${counterU.length * lineHeight}rem`,
            },
            `-=${halfDuration}`
          )

          .to(
            counterT,
            {
              y: `-=${lineHeight}rem`,
              duration,
              ease: "power4.inOut",
            },
            `-=${followUpDuration}`
          )
          .to(
            counterU,
            {
              y: `-=${counterU.length * lineHeight}rem`,
              ease,
              duration,
            },
            `<`
          )
          // resetting counter
          .set(
            counterU2,
            {
              y: `+=${(counterU2.length + 1) * lineHeight}rem`,
            },
            `-=${halfDuration}`
          );
      });
    });

    return () => {
      ctx.revert();
    };
  }, [lineHeight, duration, ease, counterHolderRef]);

  useEffect(() => {
    if (!counterHolderRef.current) return;

    const ctx = gsap.context(() => {
      if (!isLoading) {
        gsap.to(counterHolderRef.current, {
          translateX: "-100%",
          duration: 0.2,
        });
      } else {
        gsap.fromTo(
          counterHolderRef.current,
          {
            translateX: "-100%",
          },
          { translateX: "0%", duration: 0.2 }
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, [isLoading, counterHolderRef]);

  useEffect(() => {
    if (progress === 100) {
      loaderTl.current.play();
    }

    if (progress !== 100 && !isLoading) {
      setIsLoading(true);
      loaderTl.current.pause(0);
    }
  }, [progress, isLoading]);
}
