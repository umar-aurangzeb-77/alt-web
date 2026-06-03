import FeatureCard from "@/components/ui/FeatureCard";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";
import Image from "next/image";

interface Props {}

export default function AboutPage({}: Props) {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 md:py-24 lg:py-36 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] mb-6 leading-normal pb-2">
              About Us
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-serif text-[var(--text-primary)] text-lg md:text-xl max-w-4xl mx-auto leading-[1.75]">
              We are a premier digital solutions and IT services firm dedicated
              to engineering custom, enterprise-level software architectures.
              Operating at the intersection of high-performance technology and
              strategic business design, we build bespoke systems tailored for
              the FinTech, E-Commerce, Regulatory, and Governance sectors. Our
              approach ignores generic, off-the-shelf software models. Instead,
              we deep-dive into our clients' operational realities to identify
              underlying inefficiencies, security risks, and infrastructural
              bottlenecks. By thoroughly analyzing these distinct organizational
              pain points, we curate highly flexible, robust, and mathematically
              optimized digital solutions that protect data integrity,
              streamline regulatory compliance, and accelerate transactional
              velocity
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10">
              <a
                href="/assets/company%20profile-4.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Company Profile
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-16 md:py-24 lg:py-36 px-6 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeUp>
            <div>
              <h2 className="font-mono font-normal text-4xl text-[var(--text-primary)] mb-6">
                Our Mission
              </h2>
              <p className="font-serif text-[var(--text-primary)] text-xl leading-[1.75]">
                We help businesses turn useful technology into working products.
                We build AI tools, scalable web systems, and data products
                without the overhead or slow process of a large agency.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="relative aspect-square bg-accent/5 rounded-3xl border border-dashed border-accent/20 overflow-hidden">
              {/* Decorative SVG Art */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                viewBox="0 0 100 100"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0.5"
                />
                <path
                  d="M20 80 Q 50 10 80 80"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 lg:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <FadeUp>
              <h2 className="font-mono font-normal text-3xl md:text-4xl text-[var(--text-primary)] mt-0 mb-0">
                Our Values
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
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--icon-color)"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
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
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--icon-color)"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
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
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--icon-color)"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"
                    />
                  </svg>
                }
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 md:py-24 lg:py-36 px-6 bg-[var(--surface)]/30 border-t border-b border-[var(--border)]/15">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <FadeUp>
              <h2 className="font-mono font-normal text-3xl md:text-4xl text-[var(--text-primary)] mt-0 mb-4">
                Our Partners
              </h2>
              <p className="font-serif text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed">
                Collaborating with industry pioneers and forward-thinking
                enterprises to deliver state-of-the-art solutions.
              </p>
            </FadeUp>
          </div>

          {/* Grid for Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Reliance Corporation Card */}
            <FadeUp delay={0.1}>
              <a
                href="https://www.reliancecorp.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border)] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] bg-[var(--surface-2)]/30 hover:bg-[var(--surface-2)]/50 hover:border-[var(--accent)]/50 transition-all duration-300 group"
              >
                <div className="relative w-full h-12 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/project-logos/Reliance.avif"
                    alt="Reliance Corporation Ltd Logo"
                    width={140}
                    height={40}
                    className="object-contain max-h-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-secondary)] mt-2 text-center group-hover:text-[var(--accent)] transition-colors duration-300">
                  Reliance Corporation Ltd
                </span>
              </a>
            </FadeUp>

            {/* TeraRare Solutions Card */}
            <FadeUp delay={0.2}>
              <a
                href="https://www.terarare.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border)] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] bg-[var(--surface-2)]/30 hover:bg-[var(--surface-2)]/50 hover:border-[var(--accent)]/50 transition-all duration-300 group"
              >
                <div className="relative w-full h-12 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/project-logos/terarare.svg"
                    alt="TeraRare Solutions Logo"
                    width={140}
                    height={40}
                    className="object-contain max-h-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-secondary)] mt-2 text-center group-hover:text-[var(--accent)] transition-colors duration-300">
                  TeraRare Solutions
                </span>
              </a>
            </FadeUp>

            {/* Placeholders */}
            {[3, 4].map((partnerIndex) => (
              <FadeUp key={partnerIndex} delay={partnerIndex * 0.1}>
                <div className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex items-center justify-center min-h-[120px] bg-[var(--surface-2)]/10 hover:bg-[var(--surface-2)]/20 transition-colors duration-300">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                    Partner Placeholder
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 lg:py-36 px-6">
        <FadeUp>
          <div className="max-w-5xl mx-auto text-center bg-accent/5 border-t border-b border-dashed border-accent/20  p-8 md:p-12">
            <h2 className="font-mono font-normal text-2xl md:text-3xl text-[var(--text-primary)] mb-3 leading-relaxed pb-2">
              Ready to build something great?
            </h2>
            <p className="font-serif text-[var(--text-primary)] text-lg mb-8 max-w-lg mx-auto leading-[1.75]">
              Let's discuss how our technical intelligence can accelerate your
              next big project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3.5 text-sm rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
