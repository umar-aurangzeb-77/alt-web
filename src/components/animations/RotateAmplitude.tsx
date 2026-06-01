"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  amplitude?: number; // Maximum rotation in degrees
}

export default function RotateAmplitude({ children, amplitude = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Normalised mouse coordinates between 0 and 1
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Dynamic spring values for smooth, responsive easing
  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  
  // Transform mouse coordinates to degree rotations
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [amplitude, -amplitude]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-amplitude, amplitude]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width;
    const y = (e.clientY - rect.top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly when cursor leaves card bounds
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div 
      style={{ perspective: 1000 }} 
      className="w-full h-full flex justify-center items-center"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
