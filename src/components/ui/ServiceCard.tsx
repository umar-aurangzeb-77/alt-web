"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  icon: ReactNode;
  title: string;
  body: string;
}

export default function ServiceCard({ icon, title, body }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      layout
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-[2rem] p-8 flex flex-col justify-start border cursor-pointer select-none overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isHovered || isExpanded
          ? isDark ? "text-[#f1f0ea] border-[#f1f0ea]/20" : "text-[#001f35] border-[#001f35]/20"
          : isDark ? "text-[#001f35] border-[#001f35]/10" : "text-[#f1f0ea] border-[#f1f0ea]/10"
      }`}
      style={{
        minHeight: isExpanded ? "440px" : "240px",
        background: isDark
          ? "radial-gradient(circle at top left, #f1f0ea 0%, #e5e3da 80%)"
          : "radial-gradient(circle at top left, #004271 0%, #001f35 80%)"
      }}
    >
      {/* Background sweep circle scaling from top-left */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square rounded-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center z-0 pointer-events-none ${
          isHovered || isExpanded ? "scale-100" : "scale-0"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle at top left, #004271 40%, #001f35 100%)"
            : "radial-gradient(circle at top left, #f1f0ea 40%, #e5e3da 100%)"
        }}
      />

      {/* Top Section: Icon */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <motion.div
          layout="position"
          className="w-14 h-14 flex items-center justify-center rounded-2xl border border-current/20 bg-current/5 transition-colors duration-500"
        >
          {icon}
        </motion.div>
      </div>

      {/* Middle Section: Title & Action Button */}
      <div className="relative z-10 flex justify-between items-end w-full mt-8">
        <motion.h3
          layout="position"
          className="font-mono text-xl font-bold max-w-[70%] leading-snug"
        >
          {title}
        </motion.h3>

        <motion.button
          layout="position"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-current bg-transparent transition-colors duration-500"
          animate={{ rotate: isExpanded ? 135 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.button>
      </div>

      {/* Bottom Section: Expanded Body Text & Button */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: 10 }}
            transition={{
              height: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.3, delay: 0.15 },
              y: { duration: 0.3, delay: 0.15 }
            }}
            className="relative z-10 overflow-hidden mt-6 flex flex-col gap-6"
          >
            <p className="font-serif text-base leading-relaxed">
              {body}
            </p>
            <div>
              <Link
                href="/contact"
                onClick={(e) => e.stopPropagation()}
                className={`inline-block px-6 py-2.5 rounded-full border border-current font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
                  isDark
                    ? "hover:bg-[#f1f0ea] hover:text-[#001f35]"
                    : "hover:bg-[#001f35] hover:text-[#f1f0ea]"
                }`}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Employee-card style footer divider */}
      <div className="relative z-10 w-full border-t border-current/10 mt-auto transition-colors duration-500" />
    </motion.div>
  );
}
