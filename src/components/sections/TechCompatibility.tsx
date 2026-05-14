"use client";

import Link from "next/link";
import Marquee from "@/components/ui/Marquee";

export default function TechCompatibility() {
  const techs = [
    "Next.js",
    "React",
    "Python",
    "TensorFlow",
    "PyTorch",
    "AWS",
    "Docker",
    "PostgreSQL",
    "OpenAI",
    "GSAP",
    "Lenis",
    "TypeScript",
  ];

  return (
    <section className="py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)]">
          Seamless Technical Compatibility
        </h2>
        <p className="text-[var(--text-muted)] mt-5 max-w-xl mx-auto text-lg leading-[1.75]">
          We integrate with your existing stack — whatever it looks like.
        </p>

        <div className="mt-16">
          <Marquee speed={1.2} className="py-4">
            {techs.map((tech) => (
              <div
                key={tech}
                className="whitespace-nowrap bg-[var(--surface)] border border-[var(--border)] rounded-full px-8 py-4 text-lg text-[var(--text-muted)] hover:border-accent/40 hover:text-[var(--text-primary)] transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </Marquee>
          
          <Marquee speed={0.8} direction={-1} className="py-4 mt-4">
            {techs.reverse().map((tech) => (
              <div
                key={`${tech}-rev`}
                className="whitespace-nowrap bg-[var(--surface)] border border-[var(--border)] rounded-full px-8 py-4 text-lg text-[var(--text-muted)] hover:border-accent/40 hover:text-[var(--text-primary)] transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </Marquee>
        </div>

        {/* CTA Band */}
        <div className="mt-24 p-12 bg-accent/5 border border-dashed border-accent/20 rounded-3xl">
          <h3 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-3">
            Ready to build something great?
          </h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
            Let's discuss how our technical intelligence can accelerate your next big project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 transition-opacity mx-auto"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

