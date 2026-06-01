import FadeUp from "@/components/ui/FadeUp";

interface Props {}

export default function ProductsPlaceholder({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 text-center">
      <div className="max-w-2xl">
        <FadeUp>
          <h1 className="font-mono font-normal text-5xl md:text-6xl text-[var(--text-primary)] mb-6">
            Our Products
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-serif text-[var(--text-primary)] text-2xl mb-12">
           Our proprietary products are designed to address critical industry challenges, offering the flexibility and modularity needed to serve a wide range of users, industries, and use cases.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="bg-[var(--surface)] border border-dashed border-[var(--border)] rounded-2xl p-10">
            <p className="text-accent font-medium">Full page details coming soon.</p>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
