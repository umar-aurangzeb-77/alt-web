"use client";

import Link from "next/link";
import FlowingMenu from "@/components/ui/animated-components/flowing-menu/FlowingMenu";

export default function TechCompatibility() {
  const demoItems = [
    {
      link: "#",
      text: "Frontend & UI",
      subItems: [
        {
          text: "Next.js",
          image: "/flow-menu/frontend%20%26%20UI/nextjs.jpg",
        },
        {
          text: "Figma",
          image: "/flow-menu/frontend%20%26%20UI/Figma-Logo.png",
        },
        {
          text: "Lenis",
          image: "/flow-menu/frontend%20%26%20UI/lenis_logo.gif",
        },
      ],
    },
    {
      link: "#",
      text: "Backend & Database",
      subItems: [
        {
          text: "NestJS",
          image: "/flow-menu/Backend%20%26%20Database/NestJS-logo.svg",
        },
        {
          text: "Django",
          image: "/flow-menu/Backend%20%26%20Database/django-logo.png",
        },
        {
          text: "PostgreSQL",
          image: "/flow-menu/Backend%20%26%20Database/postgres-logo.png",
        },
        {
          text: "Redis",
          image: "/flow-menu/Backend%20%26%20Database/redis-logo.png",
        },
        {
          text: "Rust",
          image: "/flow-menu/Backend%20%26%20Database/rust-logo.webp",
        },
      ],
    },
    {
      link: "#",
      text: "Cloud & DevOps",
      subItems: [
        {
          text: "Apache",
          image: "/flow-menu/Cloud%20%26%20DevOps/Apache-logo.svg",
        },
        {
          text: "Docker",
          image: "/flow-menu/Cloud%20%26%20DevOps/Docker_Logo.svg.png",
        },
        {
          text: "Jenkins",
          image: "/flow-menu/Cloud%20%26%20DevOps/Jenkins_logo.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-mono font-bold text-3xl md:text-4xl text-[var(--text-primary)] leading-relaxed pb-2">
          Seamless Technical Compatibility
        </h2>
        <p className="text-[var(--text-muted)] mt-5 max-w-xl mx-auto text-lg leading-[1.75]">
          No matter your setup, we integrate seamlessly with your existing stack.
        </p>

        <div className="mt-16 h-[500px] border-t border-b border-[var(--border)] overflow-hidden">
          <FlowingMenu
            items={demoItems}
            bgColor="var(--surface)"
            textColor="var(--text-primary)"
            marqueeBgColor="var(--accent)"
            marqueeTextColor="var(--bg)"
            borderColor="var(--border)"
            speed={12}
          />
        </div>

        {/* CTA Band */}
        <div className="mt-24 p-12 bg-accent/5 border-t border-b border-dashed border-accent/20">
          <h3 className="text-2xl md:text-3xl font-mono font-normal text-[var(--text-primary)] mb-3 leading-relaxed pb-2">
            Ready to build something great?
          </h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
            Let's discuss how our technical intelligence can accelerate your
            next big project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-surface text-white hover:text-surface hover:bg-accent transition-all duration-300  px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 mx-auto"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
