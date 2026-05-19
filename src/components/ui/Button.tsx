import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm" | "xl";
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", href, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-mono uppercase tracking-widest font-medium";

    const variants = {
      primary: "bg-[#003459] text-[#f1f0ea] hover:opacity-90",
      outline:
        "border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg)]",
      secondary: "bg-white text-gray-800 hover:bg-gray-900 hover:text-white",
      ghost: "text-text-primary hover:bg-surface-2",
    };

    const sizes = {
      sm: "px-6 py-2.5 text-sm",
      default: "px-8 py-3.5 text-sm",
      lg: "px-10 py-4 text-base",
      xl: "px-12 py-5 text-lg",
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      "w-full md:w-auto",
      className,
    );

    if (href) {
      return (
        <Link href={href} className={cn(combinedClasses, "text-center")}>
          {props.children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {props.children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
