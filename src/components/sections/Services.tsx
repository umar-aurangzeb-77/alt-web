"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props { }

export default function Services({ }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Cloud Migration",
      body: "Seamlessly transitioning server assets, databases, and application pipelines to optimized cloud architectures with zero downtime.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      ),
    },
    {
      title: "SaaS",
      body: "Architecting multi-tenant, high-reliability software as a service structures complete with licensing and metrics platforms.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M7.5 12h9M12 3v3M12 9v3" />
        </svg>
      ),
    },
    {
      title: "Automations",
      body: "Streamlining manual business tasks and workflows through intelligent script integration, cron schedules, and data pipelines.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Custom Software Development",
      body: "Engineering tailored full-stack solutions built exactly to your business specs and performance benchmarks.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Devops",
      body: "Setting up continuous delivery systems, automated container management, and continuous security scanning infrastructure.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21a7.5 7.5 0 000-15H13.5v7.5z" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      body: "Building hyper-fast, accessible, and search-optimized modern web applications utilizing modern stack frameworks.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      title: "Mobile Development",
      body: "Designing and packaging high-performance, platform-native mobile apps for iOS and Android ecosystems.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 15h9" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      body: "Creating stunning visual assets, wireframes, and intuitive customer-journey diagrams focused on high conversion.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5.096-.813 6.601-6.602-4.283-4.282L9.813 15.904z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.016 7.384l2.122-2.122a1.5 1.5 0 00-2.122-2.122l-2.122 2.122m2.122 2.122L14.734 3.102M19.016 7.384L14.734 3.102" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity",
      body: "Enforcing multi-layered security protocols, vulnerability assessments, data encryption, and access control.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z" />
        </svg>
      ),
    },
    {
      title: "Blockchain",
      body: "Developing smart contracts, secure tokenization engines, and transparent distributed ledger architectures.",
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
  ];

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    <section className="py-16 md:py-32 lg:py-48 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-[var(--text-primary)] leading-relaxed pb-2">
            Our Services
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 md:mt-14"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
