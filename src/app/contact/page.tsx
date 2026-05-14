export default function ContactPlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)] mb-6 animate-fade-up">
          Let&apos;s Connect
        </h1>
        <p className="text-[var(--text-muted)] text-xl mb-12 animate-fade-up delay-150">
          We&apos;re currently accepting new projects for Q3 2025.
        </p>
        <div className="bg-[var(--surface)] border border-dashed border-[var(--border)] rounded-2xl p-10 animate-fade-up delay-300">
          <p className="text-[var(--text-muted)] mb-4">Reach out directly at:</p>
          <a href="mailto:hello@studio.ai" className="text-2xl font-bold text-accent hover:underline">
            hello@studio.ai
          </a>
        </div>
      </div>
    </div>
  );
}
