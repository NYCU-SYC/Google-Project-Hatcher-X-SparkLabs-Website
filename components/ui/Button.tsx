"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
  external?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 font-semibold tracking-normal rounded-full transition-all duration-200 ease-out whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1A73E8] text-white shadow-[0_8px_18px_rgba(26,115,232,0.22)] hover:bg-[#185ABC] hover:shadow-[0_10px_24px_rgba(26,115,232,0.26)] hover:-translate-y-0.5",
  secondary:
    "border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 hover:-translate-y-0.5",
  ghost: "text-slate-700 hover:text-slate-900",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  onClick,
  external,
}: ButtonProps) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
