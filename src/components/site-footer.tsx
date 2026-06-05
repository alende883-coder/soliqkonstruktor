import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import type { SiteContent } from "@/lib/site-content";
import { TELEGRAM_URL } from "@/lib/site";

export function SiteFooter({
  content,
  activePage = "home",
}: {
  content: SiteContent;
  activePage?: "home" | "courses";
}) {
  const isCourses = activePage === "courses";

  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src="/logo.png"
            alt="IN PLUS"
            width={64}
            height={64}
            unoptimized
          />
          <p className="footer-title">{content.footer.tagline}</p>
        </div>

        <div className="footer-links">
          <nav className="footer-nav" aria-label={content.footer.navLabel}>
            <strong>{content.footer.navLabel}</strong>
            {content.navigation.links.map((link) => {
              const hashIndex = link.href.indexOf("#");
              if (!isCourses && hashIndex !== -1) {
                return (
                  <a key={link.href} href={link.href.slice(hashIndex)}>
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="footer-contact">
            <strong>{content.footer.contactLabel}</strong>
            <a
              className="footer-tg"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Send aria-hidden="true" size={18} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-shell">
          <span>{content.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
