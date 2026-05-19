import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface Props {}

export default function Footer({}: Props) {
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
          <p className="text-text-secondary mt-6 text-sm leading-[1.75] max-w-xs">
            Engineering the future of digital with precision and intelligence.
          </p>
        </div>

        {/* Col 2: Links */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-text-primary mb-8">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="text-text-secondary text-sm hover:text-accent transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-text-secondary text-sm hover:text-accent transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-text-secondary text-sm hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Get in touch */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-text-primary mb-8">
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
