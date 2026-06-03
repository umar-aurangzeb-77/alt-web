"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  className = "",
}: Props) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(container.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%", // Trigger slightly before it enters fully
          toggleActions: "play none none none",
        },
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
