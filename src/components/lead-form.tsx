"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import type { FormContent } from "@/lib/site-content";

type LeadFormProps = {
  content: FormContent;
  locale: string;
};

type FormState = "idle" | "loading" | "success" | "error";

export function LeadForm({ content, locale }: LeadFormProps) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("loading");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
      locale,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setState(response.ok ? "success" : "error");
      if (response.ok) {
        form.reset();
      }
    } catch {
      setState("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>{content.nameLabel}</span>
          <input name="name" type="text" required placeholder={content.namePlaceholder} />
        </label>
        <label>
          <span>{content.phoneLabel}</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder={content.phonePlaceholder}
            inputMode="tel"
          />
        </label>
      </div>
      <label>
        <span>{content.interestLabel}</span>
        <select name="interest" defaultValue="consultation">
          {content.interests.map((interest) => (
            <option key={interest.value} value={interest.value}>
              {interest.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>{content.messageLabel}</span>
        <textarea name="message" rows={4} placeholder={content.messagePlaceholder} />
      </label>
      <button className="primary-button form-submit" type="submit" disabled={state === "loading"}>
        {state === "loading" ? (
          <Loader2 aria-hidden="true" className="button-icon spin" />
        ) : state === "success" ? (
          <CheckCircle2 aria-hidden="true" className="button-icon" />
        ) : (
          <ArrowRight aria-hidden="true" className="button-icon" />
        )}
        <span>{state === "success" ? content.successButton : content.submit}</span>
      </button>
      {state === "success" && <p className="form-note success">{content.success}</p>}
      {state === "error" && <p className="form-note error">{content.error}</p>}
    </form>
  );
}
