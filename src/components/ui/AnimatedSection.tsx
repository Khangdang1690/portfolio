"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40 };
      case "down":
        return { y: -40 };
      case "left":
        return { x: 40 };
      case "right":
        return { x: -40 };
      case "none":
        return { x: 0, y: 0 };
      default:
        return { y: 40 };
    }
  };

  return (
    <motion.div
      className={cn(className)}
      initial={{ 
        opacity: 0,
        ...getDirectionOffset(),
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: delay,
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
} 