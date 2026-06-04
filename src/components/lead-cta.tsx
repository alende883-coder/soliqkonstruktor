"use client";

import { ArrowRight } from "lucide-react";
import type { LeadSource } from "@/lib/site-content";
import { useLeadForm } from "@/components/lead-form-provider";

export function LeadCta({
  source,
  label,
  variant = "primary",
  className,
}: {
  source: LeadSource;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const { open } = useLeadForm();
  const base = variant === "primary" ? "primary-button" : "secondary-button";

  return (
    <button
      type="button"
      className={className ? `${base} ${className}` : base}
      onClick={() => open(source)}
    >
      <span>{label}</span>
      <ArrowRight aria-hidden="true" className="button-icon" />
    </button>
  );
}
