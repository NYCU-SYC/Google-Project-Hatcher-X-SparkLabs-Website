"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Convert "\n" inside translation strings into actual line breaks.
 * Lets translators control wrap points without splitting copy into
 * line1/line2 props. JSX nodes (already-broken markup) pass through.
 */
function renderMultiline(content: React.ReactNode): React.ReactNode {
  if (typeof content !== "string" || !content.includes("\n")) return content;
  const lines = content.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-3xl",
        align === "center" && "mx-auto",
        alignment,
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase text-brand-blue"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(66,133,244,0.8)]" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-display tracking-display-tight text-balance text-gradient"
      >
        {renderMultiline(title)}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-[17px] leading-relaxed text-slate-600 text-balance max-w-2xl"
        >
          {renderMultiline(subtitle)}
        </motion.p>
      )}
    </div>
  );
}
