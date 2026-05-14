import FadeUp from "@/components/ui/FadeUp";

interface Props {}

export default function ServicesPlaceholder({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 text-center">
      <div className="max-w-2xl">
        <FadeUp>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)] mb-6">
            Services
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[var(--text-muted)] text-xl mb-12">
            We are crafting a detailed breakdown of our technical capabilities.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="bg-[var(--surface)] border border-dashed border-[var(--border)] rounded-2xl p-10">
            <p className="text-accent font-medium">Full page coming soon.</p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
