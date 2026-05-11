"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  fullWidth,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide rounded-xl transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-[#0f3460] hover:bg-[#1a4a7a] text-white shadow-lg shadow-[#0f3460]/30 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const MotionEl = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionEl className={classes} onClick={onClick} whileTap={{ scale: 0.97 }}>
      {children}
    </MotionEl>
  );
}
