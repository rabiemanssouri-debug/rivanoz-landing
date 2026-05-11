"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "navy" | "white";
  className?: string;
}

export default function Badge({
  children,
  variant = "green",
  className,
}: BadgeProps) {
  const variants = {
    green: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    navy: "bg-[#0f3460]/10 text-[#0f3460] border border-[#0f3460]/20",
    white: "bg-white/10 text-white border border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
