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
        "flex flex-col gap-6 max-w-4xl",
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
          className="inline-flex items-center gap-3 rounded-full border border-[#4285F4]/25 bg-[#4285F4]/[0.05] px-5 py-2 text-sm font-bold tracking-normal uppercase text-slate-900 shadow-sm md:text-base"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl md:text-4xl lg:text-[2.875rem] font-semibold !leading-[1.24] tracking-normal text-slate-900 text-balance"
      >
        {renderMultiline(title)}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-[17px] leading-relaxed text-slate-600 text-balance max-w-3xl"
        >
          {renderMultiline(subtitle)}
        </motion.p>
      )}
    </div>
  );
}
