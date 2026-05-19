"use client";

import ReflectiveCard from "@/components/ui/animated-components/reflective-cards/ReflectiveCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export default function DefyLinearity({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: "NearVendor",
      body: "Every deliverable is engineered to spec, on time, without compromise.",
      logo: "/project-logos/near-vendor-logo.svg",
    },
    {
      title: "Doneto",
      body: "The go-to Donation Platform based around acclaimed NGO's and Local Goal Driven Fundraisers",
      logo: "/assets/doneto white 2.png",
    },
    {
      title: "MITS",
      body: "One team across design, engineering, and strategy — zero silos.",
      logo: "/project-logos/mits-logo.svg",
    },
  ];

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Rule 8: Kinetic Typography
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        scale: 1.1,
        opacity: 0,
        y: 20,
        ease: "none",
      });

      // Rule 9: Staggered List Entrance
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="py-32 md:py-48 px-6 bg-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl text-text-primary"
          >
            Defyiing  Linearity
          </h2>
          <p className="text-text-secondary mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We move faster, think deeper, and ship smarter — without the
            overhead.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 justify-items-center"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="w-full flex justify-center"
            >
              <ReflectiveCard
                overlayColor="rgba(0, 32, 54, 0.4)"
                blurStrength={8}
                glassDistortion={10}
                metalness={0.6}
                roughness={0.3}
                displacementStrength={15}
                noiseScale={1.2}
                specularConstant={1.8}
                grayscale={0.7}
                color="#f1f0ea"
                userName={feature.title}
                userRole={feature.body}
                idNumber={`ALT-00${index + 1}`}
                logo={feature.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
