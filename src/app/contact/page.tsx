import type { Metadata } from "next";
import FadeUp from "@/components/ui/FadeUp";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Antilinear Technologies",
  description: "Have an idea, project, or venture in mind? Let's construct a state-of-the-art solution together.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-28 pb-16 px-6 md:px-12 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column - Hero Content & Direct Connect */}
        <div className="lg:col-span-5 space-y-10">
          <FadeUp>
            <h1 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight">
              Lets Connect
            </h1>
            <p className="font-serif text-[var(--text-secondary)] text-xl mt-4 leading-relaxed max-w-lg">
              Have an idea, project, or venture in mind? Defy linear thinking and let's construct a state-of-the-art solution together.
            </p>
          </FadeUp>

          {/* Direct contact card */}
          <FadeUp delay={0.2}>
            <div className="bg-[var(--surface)]/30 backdrop-blur-xl border border-[var(--border)] rounded-2xl p-8 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-[var(--accent)]/5 blur-3xl group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />

              <h3 className="font-mono text-s font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 flex items-center gap-2">
                Quick Access
              </h3>
              <p className="font-body text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                Prefer bypassing forms? Drop us a line directly to get in touch with our lead engineers.
              </p>
              <a
                href="mailto:support@antilineartech.com"
                className="text-xl font-bold text-[var(--accent)] hover:underline block break-words"
              >
                support@antilineartech.com
              </a>
            </div>
          </FadeUp>

        </div>

        {/* Right Column - Form Container */}
        <div className="lg:col-span-7 w-full">
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>

      </div>
    </div>
  );
}
