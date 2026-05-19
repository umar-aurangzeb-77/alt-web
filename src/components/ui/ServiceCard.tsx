import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  body: string;
}

export default function ServiceCard({ icon, title, body }: Props) {
  return (
    <div className="relative group flex flex-col justify-between p-8 min-h-[280px] rounded-[2rem] overflow-hidden bg-surface border border-border hover:border-accent hover:bg-surface-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
      {/* Top section */}
      <div className="relative z-10">
        {/* Icon wrapper */}
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-2 border border-border group-hover:border-accent/20 group-hover:bg-accent/5 text-accent transition-all duration-500">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl mt-6 text-text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Body */}
        <p className="text-text-secondary text-sm leading-relaxed mt-4 line-clamp-3">
          {body}
        </p>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-text-muted group-hover:text-text-primary mt-8 transition-colors duration-300">
        <span>Explore</span>
        <div className="h-[1px] w-4 bg-text-muted group-hover:w-8 group-hover:bg-accent transition-all duration-500" />
      </div>

      {/* Hover Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-secondary/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}
