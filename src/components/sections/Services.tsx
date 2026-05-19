"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export default function Services({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Financial Platforms",
      body: "Architecting secure, high-availability ledger engines, transaction processing systems, and transparent crowdfunding infrastructure optimized for complex regional and global financial ecosystems.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="var(--icon-color)" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879-.659c1.546-1.16 3.696-1.16 5.242 0 .584.438.584 1.2.001 1.64c-1.546 1.16-3.696 1.16-5.242 0L9 15.682zm0-7.364.879-.66c1.546-1.16 3.696-1.16 5.242 0 .584.438.584 1.2.001 1.64c-1.546 1.16-3.696 1.16-5.242 0L9 8.318z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 22h6M9 2h6" />
        </svg>
      ),
    },
    {
      title: "Next-Gen E-Commerce",
      body: "Building hyper-local product discovery mapping, high-conversion web/mobile marketplaces, and unified Point of Sale (POS) integrations that seamlessly bridge digital search with physical retail.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="var(--icon-color)" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
        </svg>
      ),
    },
    {
      title: "Regulatory & Compliance",
      body: "Transforming complex workflows into intuitive, multi-tiered digital portals featuring secure document management, automated compliance auditing, and role-based access control.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="var(--icon-color)" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v5.586a1 1 0 001 1H18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h.01" />
        </svg>
      ),
    },
    {
      title: "Security & Intelligence",
      body: "Engineering advanced, data-driven security architectures, multi-layered identity tracking, and live geospatial mapping solutions tailored for modern sectors and corporate asset protection.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="var(--icon-color)" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Operational Automation",
      body: "Eliminating manual operational bottlenecks with bespoke management dashboards, real-time reporting tools, and robust backend data pipelines built for continuous improvement.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="var(--icon-color)" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      ),
    },
  ];

  useGSAP(
    () => {
      // Rule 3: Always check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    { scope: containerRef }
  );

  return (
    <section className="py-32 md:py-48 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl text-text-primary">
            Our Services
          </h2>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14"
        >
          {services.map((service, index) => (
            <div key={index} ref={(el) => { cardsRef.current[index] = el; }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

