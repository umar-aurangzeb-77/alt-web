"use client";

import { useTheme } from "@/context/ThemeContext";
import FadeUp from "@/components/ui/FadeUp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


interface Props {}

export default function Hero({}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const logoSrc = theme === "light" ? "/assets/Asset 2 1.png" : "/assets/Asset 5@3x 1.png";

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Rule 11: Fade + Scale Hero Exit
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        scale: 0.96,
        ease: "none",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 md:py-36 px-6 pt-16"
    >
      {/* Background SVG Art */}
      <div className="absolute inset-0 pointer-events-none z-0">
       
      </div>

      {/* Foreground Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center"
      >
        {/* Logo Asset */}
        <FadeUp delay={0.2} key={logoSrc}>
          <img
            src={logoSrc}
            alt="Anti-Linear Technologies Logo"
            className="w-48 md:w-80 mb-6 h-auto object-contain"
          />
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.4}>
          <h1 className="text-[36px] md:text-[64px] font-mono font-normal text-text-primary leading-[1.05] tracking-tight mb-2">
            Anti-Linear <br /> Technologies
          </h1>
        </FadeUp>

        {/* Subheading */}
        <FadeUp delay={0.6}>
          <h2 className="text-[16px] md:text-[20px] font-mono font-normal text-text-secondary leading-none tracking-[0.2em]">
            Deifying Linearity
          </h2>
        </FadeUp>


      </div>
    </section>
  );
}
