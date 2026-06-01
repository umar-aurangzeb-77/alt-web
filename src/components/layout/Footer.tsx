import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface Props { }

export default function Footer({ }: Props) {
  return (
    <footer className="bg-surface border-t border-border pt-28 pb-4 md:pt-36 md:pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Col 1: Logo & Tagline */}
        <div>
          <Link
            href="/"
            className="font-mono font-medium text-xl text-text-primary tracking-tight"
          >
            <Image
              src="/assets/Asset 1 2.svg"
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className="font-serif text-text-primary mt-6 text-base leading-[1.75] max-w-xs">
            Defying Linearity
          </p>
        </div>

        {/* Col 2: Links */}
        <div>
          <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-text-primary mb-8">
            Company
          </h4>
          <div className="relative pl-5">
            {/* Trunk Line */}
            <div className="absolute left-[5px] top-2 bottom-[10px] w-[1px] bg-text-primary/20" />
            
            <ul className="space-y-4">
              <li className="relative flex items-center">
                {/* Branch Line */}
                <div className="absolute -left-[15px] top-1/2 -translate-y-1/2 w-[15px] h-[1px] bg-text-primary/20" />
                {/* Node Dot */}
                <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-text-primary/60" />
                
                <Link
                  href="/services"
                  className="text-text-secondary text-sm hover:text-accent transition-colors pl-2"
                >
                  Services
                </Link>
              </li>
              <li className="relative flex items-center">
                {/* Branch Line */}
                <div className="absolute -left-[15px] top-1/2 -translate-y-1/2 w-[15px] h-[1px] bg-text-primary/20" />
                {/* Node Dot */}
                <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-text-primary/60" />
                
                <Link
                  href="/products"
                  className="text-text-secondary text-sm hover:text-accent transition-colors pl-2"
                >
                  Products
                </Link>
              </li>
              <li className="relative flex items-center">
                {/* Branch Line */}
                <div className="absolute -left-[15px] top-1/2 -translate-y-1/2 w-[15px] h-[1px] bg-text-primary/20" />
                {/* Node Dot */}
                <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-text-primary/60" />
                
                <Link
                  href="/about"
                  className="text-text-secondary text-sm hover:text-accent transition-colors pl-2"
                >
                  About
                </Link>
              </li>
              <li className="relative flex items-center">
                {/* Branch Line */}
                <div className="absolute -left-[15px] top-1/2 -translate-y-1/2 w-[15px] h-[1px] bg-text-primary/20" />
                {/* Node Dot */}
                <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-text-primary/60" />
                
                <Link
                  href="/contact"
                  className="text-text-secondary text-sm hover:text-accent transition-colors pl-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Get in touch */}
        <div>
          <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-text-primary mb-8">
            Get in touch
          </h4>
          <div className="mb-8">
            <a
              href="mailto:support@antilineartech.com"
              className="text-text-secondary font-mono text-sm "
            >
              support@antilineartech.com
            </a>
          </div>
          <Button
            href="/contact"
            className="hover:text-bg hover:bg-accent duration-500 transition-all"
          >
            Start a Project
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border text-center">
        <p className="text-text-muted text-[10px] uppercase tracking-[0.3em] font-mono">
          © {new Date().getFullYear()} Antilinear Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
