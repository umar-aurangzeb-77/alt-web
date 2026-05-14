import FeatureCard from "@/components/ui/FeatureCard";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

interface Props {}

export default function AboutPage({}: Props) {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-[var(--text-primary)] mb-6">
              About Us
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto leading-[1.75]">
              A small, focused team of engineers and designers obsessed with craft.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-28 md:py-36 px-6 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-6">
                Our Mission
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-[1.75]">
                We exist to close the gap between what technology can do and what businesses are actually using. We build AI products, scalable web systems, and intelligent data tools — and we do it without the bloat of a large agency.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="relative aspect-square bg-accent/5 rounded-3xl border border-dashed border-accent/20 overflow-hidden">
              {/* Decorative SVG Art */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" fill="none" strokeWidth="0.5" />
                <path d="M20 80 Q 50 10 80 80" stroke="currentColor" fill="none" strokeWidth="0.5" />
              </svg>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <FadeUp>
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-accent flex items-center mb-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 mb-0.5" />
                Our Values
              </span>
              <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mt-0 mb-0">
                What Drives Us
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1}>
              <FeatureCard
                title="Craft over speed"
                body="We don't cut corners. Every line of code and pixel is intentional."
                className="border border-dashed border-[var(--border)] rounded-2xl"
                icon={
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <FeatureCard
                title="Transparency always"
                body="No hidden agendas or complex contracts. Just honest work and clear communication."
                className="border border-dashed border-[var(--border)] rounded-2xl"
                icon={
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
              />
            </FadeUp>
            <FadeUp delay={0.3}>
              <FeatureCard
                title="Ship, then improve"
                body="We believe in the power of iteration. Get it live, gather data, and make it better."
                className="border border-dashed border-[var(--border)] rounded-2xl"
                icon={
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                  </svg>
                }
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-28 md:py-36 px-6">
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center bg-accent/5 border border-dashed border-accent/20 rounded-3xl p-12">
            <h2 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-3">
              Ready to build something great?
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto leading-[1.75]">
              Let's discuss how our technical intelligence can accelerate your next big project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
