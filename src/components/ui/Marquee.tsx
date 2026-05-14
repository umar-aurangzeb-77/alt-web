"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

interface Props {
  children: React.ReactNode;
  speed?: number;
  direction?: 1 | -1;
  className?: string;
}

export default function Marquee({
  children,
  speed = 1,
  direction = 1,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);

  // Rule 6: Velocity-Linked Marquee
  useLenis(({ velocity }) => {
    velocityRef.current = velocity;
  });

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const marquee = marqueeRef.current;
      if (!marquee) return;

      const items = Array.from(marquee.children);
      const totalWidth = items.reduce((acc, item) => acc + item.clientWidth, 0);
      
      // Clone items for seamless loop
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        marquee.appendChild(clone);
      });

      let xPercent = 0;

      const animate = () => {
        // Base speed + velocity influence
        const currentVelocity = Math.abs(velocityRef.current) * 0.5;
        const totalSpeed = (speed + currentVelocity) * direction;
        
        xPercent -= totalSpeed * 0.1;
        
        if (xPercent <= -50) {
          xPercent = 0;
        } else if (xPercent >= 0) {
          xPercent = -50;
        }
        
        gsap.set(marquee, { xPercent });
      };

      gsap.ticker.add(animate);

      return () => {
        gsap.ticker.remove(animate);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div ref={marqueeRef} className="inline-flex gap-4">
        {children}
      </div>
    </div>
  );
}
