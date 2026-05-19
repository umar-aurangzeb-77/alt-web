"use client";

import { useTheme } from "@/context/ThemeContext";
import { SunMoon } from "@/components/animate-ui/icons/sun-moon";

interface Props {}

export default function ThemeToggle({}: Props) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-text-primary hover:text-bg text-text-primary  transition-colors duration-500 active:scale-90 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      <SunMoon
        size={20}
        animateOnClick
        animate={theme} // Triggers animation on theme change
        // className=""
      />
    </button>
  );
}
