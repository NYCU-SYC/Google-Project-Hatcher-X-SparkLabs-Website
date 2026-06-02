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
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-normal rounded-full transition-all duration-300 ease-out will-change-transform whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_8px_24px_rgba(66,133,244,0.28)] hover:bg-brand-blue-light hover:shadow-[0_12px_32px_rgba(66,133,244,0.38)] hover:-translate-y-0.5",
  secondary:
    "glass-strong text-slate-900 hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-0.5",
  ghost: "text-slate-700 hover:text-slate-900",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
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
