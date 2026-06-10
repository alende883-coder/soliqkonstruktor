"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";
import type { SiteContent } from "@/lib/site-content";

type NavLink = { label: string; href: string };

export function SiteHeader({
  content,
  activePage = "home",
}: {
  content: SiteContent;
  activePage?: "home" | "courses";
}) {
  const [open, setOpen] = useState(false);
  const isCourses = activePage === "courses";
  const uzHref = isCourses ? "/courses" : "/";
  const ruHref = isCourses ? "/ru/courses" : "/ru";

  function renderLink(link: NavLink, onClick?: () => void) {
    const isCoursesLink = link.href.includes("/courses");
    const hashIndex = link.href.indexOf("#");
    const classes =
      [isCoursesLink ? "nav-cta" : "", isCourses && isCoursesLink ? "active" : ""]
        .filter(Boolean)
        .join(" ") || undefined;

    // In-page anchors on the home page use a native <a> for reliable scrolling.
    if (!isCourses && hashIndex !== -1) {
      return (
        <a className={classes} key={link.href} href={link.href.slice(hashIndex)} onClick={onClick}>
          {link.label}
        </a>
      );
    }
    return (
      <Link className={classes} key={link.href} href={link.href} onClick={onClick}>
        {link.label}
      </Link>
    );
  }

  return (
    <header className="site-header">
      <Link
        className="brand"
        href={content.locale === "ru" ? "/ru" : "/"}
        aria-label="IN PLUS"
        onClick={() => setOpen(false)}
      >
        <Image
          className="brand-logo"
          src="/logo.png"
          alt="IN PLUS"
          width={42}
          height={42}
          unoptimized
          priority
        />
        <span>
          <strong>IN PLUS</strong>
          <small>Soliq Konstruktor</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label={content.navigation.ariaLabel}>
        {content.navigation.links.map((link) => renderLink(link))}
      </nav>

      <div className="header-right">
        <div className="language-switch" aria-label={content.navigation.languageLabel}>
          <Languages aria-hidden="true" size={16} />
          <Link className={content.locale === "uz" ? "active" : ""} href={uzHref}>
            UZ
          </Link>
          <Link className={content.locale === "ru" ? "active" : ""} href={ruHref}>
            RU
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={content.navigation.ariaLabel}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-menu">
          <nav aria-label={content.navigation.ariaLabel}>
            {content.navigation.links.map((link) => renderLink(link, () => setOpen(false)))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
