"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Product {
  id: string;
  badge: string;
  systemId: string;
  title: string;
  logo: string;
  tagline: string;
  description: string;
  features: Feature[];
  url?: string;
}

interface Props {}

export default function DetailedProducts({}: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "nearvendor",
      badge: "ALPHA PRODUCT 01 // GEO-LOCAL COMMERCE",
      systemId: "SYS-NEAR-VND-001",
      title: "NearVendor",
      logo: "/project-logos/near-vendor-logo.svg",
      tagline:
        "Bridge the physical-digital retail divide with real-time locality matching.",
      description:
        "A sophisticated hyper-local commerce engine utilizing real-time geospatial indexing, inventory synchronization networks, and AI-driven local search algorithms. It bridges physical retail stores with digital-first consumers, offering instantaneous product discovery, stock levels, and distance routing right in their hands.",
      url: "https://nearvendor.vercel.app/",
      // metricLabel: "Geofence Query Match Time",
      // metricValue: "Sub-150ms",
      features: [
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          ),
          title: "Nearby Product Matching",
          desc: " Finds the nearest available item you searched for.",
        },
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
          title: "Boosts Sales of Local vendors",
          desc: "Local Vendors that are not visisble to consumers gain visual attraction and sales boost.",
        },
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          ),
          title: "Interactive Route Mapping",
          desc: "Local distance vectors and interactive navigation for immediate pickup routes.",
        },
      ],
    },
    {
      id: "doneto",
      badge: "ALPHA PRODUCT 02 // TRANSPARENT PHILANTHROPY",
      systemId: "SYS-ALT-DNT-002",
      title: "Doneto",
      logo: "/assets/doneto white 2.png",
      tagline:
        "Transform charitable giving into a visible, milestone-driven ledger of real-world change.",
      description:
        "A high-transparency philanthropic orchestrator connecting donors with local fundraisers and acclaimed NGOs. Powered by secure auditing ledgers and interactive impact tracking, Doneto transforms donation flows from black-box transfers to real-world visual milestones, fostering absolute trust and reflecting community action.",
      // metricLabel: "Fund Audit Traceability",
      // metricValue: "100.0%",
      features: [
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
          ),
          title: "Verified NGO Network",
          desc: "Zero-compromise verification pipelines ensuring funds are channeled exclusively to accredited operations.",
        },
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          ),
          title: "Milestone Tracking Engine",
          desc: "Visual, live-updating project goals showing donors exactly where every dollar goes.",
        },
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
          title: "Community Grassroots Hub",
          desc: "User-generated fundraisers backed by local trust scores and automated auditing.",
        },
      ],
    },
    {
      id: "mits",
      badge: "ALPHA PRODUCT 03 // INTELLIGENT URBAN SECURITY",
      systemId: "SYS-ALT-MTS-003",
      title: "MITS",
      logo: "/project-logos/mits-logo.svg",
      tagline:
        "Multi-camera visual telemetry and neural object classification safeguarding campuses.",
      description:
        "An industrial-grade, AI-powered security orchestrator designed to safeguard smart cities, residential estates, and complex multi-facility campuses. By utilizing advanced multi-camera visual telemetry, neural object classification, and instant anomaly warning systems, MITS delivers active threat prevention and perimeter security.",
      url: "https://mits-seven.vercel.app/",
      // metricLabel: "Edge Threat Inference",
      // metricValue: "Sub-50ms",
      features: [
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ),
          title: "Neural Telemetry Engines",
          desc: "Ultra-low latency camera stream parsing for real-time person, vehicle, and asset classification.",
        },
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          ),
          title: "Instant Threat Detection",
          desc: "Edge-computed anomaly detection triggering instant alerts for unauthorized entries.",
        },
        {
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#product-icon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              <line x1="9" y1="3" x2="9" y2="18" />
              <line x1="15" y1="6" x2="15" y2="21" />
            </svg>
          ),
          title: "Active Estate Mapping",
          desc: "Integrated 3D vector coordinates overlaying security events on facility maps.",
        },
      ],
    },
  ];

  useGSAP(
    () => {
      // Rule 21: Prefers-reduced-motion check
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const sections = gsap.utils.toArray<HTMLElement>("section");

      sections.forEach((section) => {

        const visual = section.querySelector(".product-visual-panel");
        const info = section.querySelector(".product-info-panel");

        if (visual && info) {
          gsap.fromTo(
            visual,
            { opacity: 0, scale: 0.95, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );

          gsap.fromTo(
            info,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col gap-16 md:gap-24 lg:gap-32 pb-20 md:pb-32"
    >
      {/* Reusable Icon Gradient Definition matching brand styles */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient
            id="product-icon-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--text-primary)" />
            <stop offset="100%" stopColor="#0088cc" />
          </linearGradient>
        </defs>
      </svg>

      {products.map((product, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={product.id}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center justify-between overflow-visible"
          >
            {/* Visual Panel - Alternating side based on index. Container removed. */}
            <div
              className={`product-visual-panel lg:col-span-5 flex justify-center items-center relative py-12 ${
                isEven ? "lg:order-1" : "lg:order-2"
              }`}
            >
              {/* Product Logo directly rendered natively */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                {product.logo ? (
                  <Image
                    src={product.logo}
                    alt={`${product.title} logo`}
                    width={260}
                    height={260}
                    className={`object-contain w-full max-w-[180px] md:max-w-[220px] lg:max-w-[260px] max-h-[260px] transition-all duration-700 hover:scale-105 ${
                      product.id === "mits" ? "dark:invert" : ""
                    } ${
                      product.id === "doneto" ? "invert dark:invert-0" : ""
                    }`}
                  />
                ) : (
                  <span className="font-mono text-7xl font-bold">
                    {product.title[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Info Panel - Alternating side based on index. All developer badges/tags/dividers removed. */}
            <div
              className={`product-info-panel lg:col-span-7 flex flex-col justify-start gap-6 ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}
            >
              {/* Product Title and Metric */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)]/15 pb-6">
                <div>
                  <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
                    {product.title}
                  </h2>
                  <p className="font-serif text-lg text-[var(--text-primary)]/80 mt-3 max-w-xl">
                    {product.tagline}
                  </p>
                </div>

                {/* Key Metric Panel */}
                {/* <div className="shrink-0 flex flex-col items-start md:items-end bg-current/5 border border-current/10 rounded-2xl p-4 min-w-[160px]">
                  <span className="font-mono text-[9px] tracking-wider uppercase opacity-55">
                    {product.metricLabel}
                  </span>
                  <span className="font-mono text-2xl font-bold text-[#0088cc] mt-1">
                    {product.metricValue}
                  </span>
                </div> */}
              </div>

              {/* Deep Technical Description */}
              <p className="font-serif text-base leading-relaxed text-[var(--text-secondary)]">
                {product.description}
              </p>

              {product.url && (
                <div className="mt-4">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-sm w-fit ${
                      isDark
                        ? "bg-[#f1f0ea] text-[#003459]"
                        : "bg-[#003459] text-[#f1f0ea]"
                    }`}
                  >
                    Visit Now
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Technical Features Pillars with Linear Gradient Lucide Icons */}
              <div className="flex flex-col gap-4 mt-2">
                {product.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex gap-4 p-4 rounded-2xl border border-[var(--border)]/10 bg-[var(--surface)]/30 hover:bg-[var(--surface)]/60 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-current/5 border border-current/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                        {feature.title}
                      </h4>
                      <p className="font-serif text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
