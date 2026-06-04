"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, X } from "lucide-react";
import type { LeadSource, SiteContent } from "@/lib/site-content";

type Status = "idle" | "sending" | "done" | "error";

const NAME_PATTERN = /^[\p{L}\s'’-]{2,60}$/u;

export function LeadFormModal({
  content,
  source,
  onClose,
}: {
  content: SiteContent;
  source: LeadSource | null;
  onClose: () => void;
}) {
  const lead = content.leadForm;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    form?: string;
  }>({});

  const isOpen = source !== null;

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setErrors({});
    }
  }, [isOpen, source]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || source === null) return null;

  const validate = () => {
    const next: { name?: string; phone?: string } = {};
    if (!NAME_PATTERN.test(name.trim())) next.name = lead.errors.name;
    if (phone.replace(/\D/g, "").length !== 9) next.phone = lead.errors.phone;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: `+998${phone.replace(/\D/g, "")}`,
          website,
          source,
          locale: content.locale,
        }),
      });
      const data = (await res.json().catch(() => ({ ok: false }))) as {
        ok?: boolean;
      };
      if (res.ok && data.ok) {
        setStatus("done");
        setName("");
        setPhone("");
      } else {
        setStatus("error");
        setErrors({ form: lead.errors.generic });
      }
    } catch {
      setStatus("error");
      setErrors({ form: lead.errors.generic });
    }
  };

  return (
    <div
      className="lead-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={lead.titles[source]}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lead-modal">
        <button
          type="button"
          className="lead-close"
          aria-label={lead.close}
          onClick={onClose}
        >
          <X aria-hidden="true" size={18} />
        </button>

        {status === "done" ? (
          <div className="lead-success">
            <CheckCircle2 aria-hidden="true" size={42} />
            <h2>{lead.successTitle}</h2>
            <p>{lead.successText}</p>
            <button type="button" className="primary-button" onClick={onClose}>
              <span>{lead.close}</span>
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <h2 className="lead-title">{lead.titles[source]}</h2>

            <label className="lead-field">
              <span>{lead.nameLabel}</span>
              <input
                type="text"
                value={name}
                maxLength={60}
                autoComplete="name"
                placeholder={lead.namePlaceholder}
                aria-invalid={errors.name ? "true" : undefined}
                onChange={(event) => setName(event.target.value)}
              />
              {errors.name ? (
                <small className="lead-error">{errors.name}</small>
              ) : null}
            </label>

            <label className="lead-field">
              <span>{lead.phoneLabel}</span>
              <div className={errors.phone ? "phone-input invalid" : "phone-input"}>
                <span className="phone-prefix">
                  <span className="flag-uz">
                    <svg
                      width="22"
                      height="15"
                      viewBox="0 0 22 15"
                      role="img"
                      aria-label="Uzbekistan"
                    >
                      <rect width="22" height="5" fill="#0099b5" />
                      <rect y="5" width="22" height="5" fill="#ffffff" />
                      <rect y="10" width="22" height="5" fill="#1eb53a" />
                      <rect y="4.7" width="22" height="0.6" fill="#ce1126" />
                      <rect y="9.7" width="22" height="0.6" fill="#ce1126" />
                      <circle cx="4" cy="2.5" r="1.3" fill="#ffffff" />
                      <circle cx="4.7" cy="2.5" r="1.1" fill="#0099b5" />
                    </svg>
                  </span>
                  +998
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  maxLength={12}
                  autoComplete="tel-national"
                  placeholder={lead.phonePlaceholder}
                  aria-invalid={errors.phone ? "true" : undefined}
                  onChange={(event) =>
                    setPhone(event.target.value.replace(/\D/g, "").slice(0, 9))
                  }
                />
              </div>
              {errors.phone ? (
                <small className="lead-error">{errors.phone}</small>
              ) : null}
            </label>

            <input
              className="lead-hp"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />

            {errors.form ? (
              <small className="lead-error">{errors.form}</small>
            ) : null}

            <button
              type="submit"
              className="primary-button lead-submit"
              disabled={status === "sending"}
            >
              <span>{status === "sending" ? lead.sending : lead.submit}</span>
            </button>

            {lead.consent ? (
              <p className="lead-consent">{lead.consent}</p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
