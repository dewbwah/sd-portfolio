"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionShellProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionShell({ children, className, delay = 0 }: MotionShellProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
