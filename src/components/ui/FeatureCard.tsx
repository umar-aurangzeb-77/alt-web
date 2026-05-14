import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  body: string;
  className?: string;
}

export default function FeatureCard({ icon, title, body, className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center text-center p-12 hover:bg-surface-2 transition-colors duration-500 group ${className}`}>
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center text-accent bg-surface-3 rounded-2xl group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl mt-8 text-text-primary group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Body */}
      <p className="text-text-secondary text-base leading-relaxed mt-4 max-w-[340px] mx-auto">
        {body}
      </p>
    </div>
  );
}
