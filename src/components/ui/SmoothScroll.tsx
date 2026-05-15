"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect } from "react";
import { useLenis } from "@/hooks/use-lenis";

interface Props {
  children: React.ReactNode;
}

/**
 * Syncs Lenis with GSAP Ticker
 * This must be a child of ReactLenis to use the useLenis hook
 */
function LenisGSAPSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Rule 4: Sync with GSAP using gsap.ticker
    // We use manual raf control for better synchronization with GSAP animations
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        // syncTouch: false prevents mousepad (trackpad) issues on Windows/Chrome
        syncTouch: false,
        touchMultiplier: 2,
      }}
    >
      <LenisGSAPSync />
      {children}
    </ReactLenis>
  );
}


