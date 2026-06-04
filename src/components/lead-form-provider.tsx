"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { LeadSource, SiteContent } from "@/lib/site-content";
import { LeadFormModal } from "@/components/lead-form-modal";

type LeadFormContextValue = {
  open: (source: LeadSource) => void;
  close: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return ctx;
}

export function LeadFormProvider({
  content,
  children,
}: {
  content: SiteContent;
  children: ReactNode;
}) {
  const [source, setSource] = useState<LeadSource | null>(null);
  const open = useCallback((next: LeadSource) => setSource(next), []);
  const close = useCallback(() => setSource(null), []);

  return (
    <LeadFormContext.Provider value={{ open, close }}>
      {children}
      <LeadFormModal content={content} source={source} onClose={close} />
    </LeadFormContext.Provider>
  );
}
