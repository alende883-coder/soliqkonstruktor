import Image from "next/image";
import Link from "next/link";
import { Languages } from "lucide-react";
import type { SiteContent } from "@/lib/site-content";

type SiteHeaderProps = {
  content: SiteContent;
  activePage?: "home" | "courses";
};

export function SiteHeader({ content, activePage = "home" }: SiteHeaderProps) {
  const isCourses = activePage === "courses";
  const uzHref = isCourses ? "/courses" : "/";
  const ruHref = isCourses ? "/ru/courses" : "/ru";

  return (
    <header className="site-header">
      <Link
        className="brand"
        href={content.locale === "ru" ? "/ru" : "/"}
        aria-label="IN PLUS"
      >
        <Image
          className="brand-logo"
          src="/logo.png"
          alt="IN PLUS"
          width={44}
          height={44}
          unoptimized
          priority
        />
        <span>
          <strong>IN PLUS</strong>
          <small>Soliq Konstruktor</small>
        </span>
      </Link>
      <nav aria-label={content.navigation.ariaLabel}>
        {content.navigation.links.map((link) => {
          const isCoursesLink = link.href.includes("/courses");
          const classes = [
            isCoursesLink ? "nav-cta" : "",
            isCourses && isCoursesLink ? "active" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Link className={classes || undefined} key={link.href} href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="language-switch" aria-label={content.navigation.languageLabel}>
        <Languages aria-hidden="true" size={16} />
        <Link className={content.locale === "uz" ? "active" : ""} href={uzHref}>
          UZ
        </Link>
        <Link className={content.locale === "ru" ? "active" : ""} href={ruHref}>
          RU
        </Link>
      </div>
    </header>
  );
}
