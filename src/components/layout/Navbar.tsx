"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

import { useTheme } from "@/context/ThemeContext";

interface Props {}

export default function Navbar({}: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const logoSrc = theme === "light" ? "/assets/Asset 2 1.png" : "/assets/Asset 5@3x 1.png";

  return (
    <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-xl bg-bg/80 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-[56px] h-[92px] flex items-center justify-between relative w-full">
        {/* Left: Logo */}
        <Link href="/" className="z-10 block">
          <img src={logoSrc} alt="Anti-Linear Technologies Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max z-10">
          <Link
            href="/services"
            className="text-text-secondary hover:text-text-primary transition-colors font-medium text-sm"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-text-secondary hover:text-text-primary transition-colors font-medium text-sm"
          >
            About
          </Link>
        </nav>

        {/* Right: Theme Toggle + CTA */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="/contact" size="sm" variant="outline" className="font-body normal-case tracking-normal">
              Get Started Today
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-colors duration-300">
          <Link
            href="/services"
            className="text-4xl font-display font-bold text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-4xl font-display font-bold text-text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Button
            href="/contact"
            variant="outline"
            className="w-full max-w-[200px] font-body normal-case tracking-normal"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started Today
          </Button>
        </div>
      )}
    </header>
  );
}
