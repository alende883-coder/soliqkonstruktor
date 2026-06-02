import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileQuestion,
  GraduationCap,
  Headphones,
  Languages,
  Layers3,
  LockKeyhole,
  Play,
  ShieldAlert,
  Sparkles,
  Target,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import type { SiteContent } from "@/lib/site-content";

const sectionIcons = [
  ClipboardCheck,
  FileQuestion,
  Layers3,
  Headphones,
  ShieldAlert,
  BookOpenCheck,
  Target,
  GraduationCap,
];

export function LandingPage({ content }: { content: SiteContent }) {
  return (
    <main>
      <Header content={content} />
      <Hero content={content} />
      <ProblemCheck content={content} />
      <RiskSection content={content} />
      <MethodSection content={content} />
      <OutcomesSection content={content} />
      <FormatSection content={content} />
      <TrustSection content={content} />
      <BonusSection content={content} />
      <CohortSection content={content} />
      <PricingSection content={content} />
      <NotForSection content={content} />
      <FaqSection content={content} />
      <ContactSection content={content} />
    </main>
  );
}

function Header({ content }: { content: SiteContent }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="IN PLUS">
        <span className="brand-mark">IP</span>
        <span>
          <strong>IN PLUS</strong>
          <small>Soliq Konstruktor</small>
        </span>
      </a>
      <nav aria-label={content.navigation.ariaLabel}>
        {content.navigation.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="language-switch" aria-label={content.navigation.languageLabel}>
        <Languages aria-hidden="true" size={16} />
        <Link className={content.locale === "uz" ? "active" : ""} href="/">
          UZ
        </Link>
        <Link className={content.locale === "ru" ? "active" : ""} href="/ru">
          RU
        </Link>
      </div>
    </header>
  );
}

function Hero({ content }: { content: SiteContent }) {
  return (
    <section className="hero-section section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1>{content.hero.title}</h1>
        <p className="hero-lede">{content.hero.lede}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#consultation">
            <ArrowRight aria-hidden="true" className="button-icon" />
            <span>{content.hero.primaryCta}</span>
          </a>
          <a className="secondary-button" href="#program">
            <BookOpenCheck aria-hidden="true" className="button-icon" />
            <span>{content.hero.secondaryCta}</span>
          </a>
        </div>
        <dl className="stat-row">
          {content.hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero-visual" aria-label={content.hero.visualAlt}>
        <div className="image-frame">
          <Image
            src={content.media.hero}
            alt={content.hero.visualAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 44vw"
            unoptimized
          />
        </div>
        <div className="instructor-note">
          <BadgeCheck aria-hidden="true" size={22} />
          <div>
            <strong>{content.hero.instructor.name}</strong>
            <span>{content.hero.instructor.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCheck({ content }: { content: SiteContent }) {
  return (
    <section className="light-band" id="problems">
      <div className="section-shell">
        <SectionIntro eyebrow={content.problem.eyebrow} title={content.problem.title} text={content.problem.text} />
        <div className="problem-grid">
          {content.problem.items.map((item, index) => {
            const Icon = sectionIcons[index % sectionIcons.length];
            return (
              <article className={index === 0 ? "problem-card accent-red" : "problem-card"} key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RiskSection({ content }: { content: SiteContent }) {
  return (
    <section className="dark-band">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.risks.eyebrow}
          title={content.risks.title}
          text={content.risks.text}
          inverted
        />
        <div className="risk-grid">
          {content.risks.items.map((risk, index) => (
            <article className="risk-card" key={risk.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{risk.title}</h3>
              <p>{risk.text}</p>
            </article>
          ))}
        </div>
        <a className="primary-button dark-cta" href="#consultation">
          <ArrowRight aria-hidden="true" className="button-icon" />
          <span>{content.risks.cta}</span>
        </a>
      </div>
    </section>
  );
}

function MethodSection({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell">
      <div className="method-layout">
        <div>
          <p className="eyebrow">{content.method.eyebrow}</p>
          <h2>{content.method.title}</h2>
          <p>{content.method.text}</p>
        </div>
        <div className="method-steps">
          {content.method.items.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection({ content }: { content: SiteContent }) {
  return (
    <section className="blue-band" id="program">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.outcomes.eyebrow}
          title={content.outcomes.title}
          text={content.outcomes.text}
          inverted
        />
        <div className="outcome-grid">
          {content.outcomes.items.map((item, index) => (
            <article className="outcome-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormatSection({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell">
      <div className="format-panel">
        <SectionIntro
          eyebrow={content.format.eyebrow}
          title={content.format.title}
          text={content.format.text}
        />
        <div className="format-grid">
          {content.format.items.map((item, index) => {
            const Icon = index < 4 ? CalendarDays : CheckCircle2;
            return (
              <article key={item}>
                <Icon aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustSection({ content }: { content: SiteContent }) {
  return (
    <section className="light-band" id="reviews">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.trust.eyebrow}
          title={content.trust.title}
          text={content.trust.text}
        />
        <div className="testimonial-strip">
          {content.media.testimonials.map((item, index) => (
            <article className="testimonial-card" key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={260}
                height={420}
                sizes="(max-width: 720px) 44vw, 18vw"
                unoptimized
              />
              <span aria-hidden="true">
                <Play size={22} fill="currentColor" />
              </span>
              <small>{String(index + 1).padStart(2, "0")}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusSection({ content }: { content: SiteContent }) {
  return (
    <section className="bonus-band" id="bonuses">
      <div className="section-shell bonus-layout">
        <div>
          <p className="eyebrow">{content.bonus.eyebrow}</p>
          <h2>{content.bonus.title}</h2>
          <p>{content.bonus.text}</p>
        </div>
        <ul>
          {content.bonus.items.map((item) => (
            <li key={item}>
              <Sparkles aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CohortSection({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell">
      <div className="cohort-panel">
        <div>
          <p className="eyebrow">{content.cohort.eyebrow}</p>
          <h2>{content.cohort.title}</h2>
          <p>{content.cohort.text}</p>
        </div>
        <strong>{content.cohort.number}</strong>
      </div>
    </section>
  );
}

function PricingSection({ content }: { content: SiteContent }) {
  return (
    <section className="dark-band" id="pricing">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
          text={content.pricing.text}
          inverted
        />
        <div className="pricing-grid">
          {content.pricing.plans.map((plan) => (
            <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>
              <span className="plan-kicker">{plan.kicker}</span>
              <h3>{plan.name}</h3>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>{plan.note}</p>
              <a className={plan.featured ? "primary-button" : "secondary-button"} href="#consultation">
                <ArrowRight aria-hidden="true" className="button-icon" />
                <span>{plan.cta}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotForSection({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell">
      <SectionIntro
        eyebrow={content.notFor.eyebrow}
        title={content.notFor.title}
        text={content.notFor.text}
      />
      <div className="not-for-grid">
        {content.notFor.items.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection({ content }: { content: SiteContent }) {
  return (
    <section className="light-band" id="faq">
      <div className="section-shell faq-shell">
        <SectionIntro eyebrow={content.faq.eyebrow} title={content.faq.title} text={content.faq.text} />
        <div className="faq-list">
          {content.faq.items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell contact-section" id="consultation">
      <div className="contact-copy">
        <p className="eyebrow">{content.form.eyebrow}</p>
        <h2>{content.form.title}</h2>
        <p>{content.form.text}</p>
        <div className="integration-note">
          <LockKeyhole aria-hidden="true" />
          <span>{content.form.integrationNote}</span>
        </div>
      </div>
      <LeadForm content={content.form} locale={content.locale} />
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  inverted?: boolean;
}) {
  return (
    <div className={inverted ? "section-intro inverted" : "section-intro"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
