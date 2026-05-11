"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  dark,
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn(
        "relative overflow-hidden",
        dark ? "bg-[#0a0f1e] text-white" : "bg-white text-[#0a0f1e]",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        {children}
      </div>
    </motion.section>
  );
}
