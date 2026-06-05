import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BadgePercent,
  CheckCircle2,
  Clock,
  FileText,
  Flame,
  Gift,
  GraduationCap,
  Headphones,
  Laptop,
  Scale,
  Send,
  Star,
  XCircle,
} from "lucide-react";
import { LeadCta } from "@/components/lead-cta";
import { LeadFormProvider } from "@/components/lead-form-provider";
import { SiteHeader } from "@/components/site-header";
import type { SiteContent } from "@/lib/site-content";
import { shorts } from "@/lib/shorts";
import { coursePageContent, getFeaturedCourses } from "@/lib/courses";
import { TELEGRAM_URL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";

export function LandingPage({ content }: { content: SiteContent }) {
  return (
    <LeadFormProvider content={content}>
      <SiteHeader content={content} activePage="home" />
      <main>
        <Hero content={content} />
        <Problems content={content} />
        <Consequences content={content} />
        <Solution content={content} />
        <CoursesTeaser content={content} />
        <Outcomes content={content} />
        <Founder content={content} />
        <Trust content={content} />
        <Bonuses content={content} />
        <Scarcity content={content} />
        <Tariffs content={content} />
        <NotFor content={content} />
        <Faq content={content} />
      </main>
      <SiteFooter content={content} />
    </LeadFormProvider>
  );
}

function TelegramButton() {
  return (
    <a
      className="tg-button"
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Telegram"
    >
      <Send aria-hidden="true" />
    </a>
  );
}

function Hero({ content }: { content: SiteContent }) {
  const { hero, media } = content;

  return (
    <section className="hero-section section-shell" id="top">
      <div className="hero-copy">
        <div className="hero-brand">
          <Image
            className="hero-logo"
            src="/logo.png"
            alt="IN PLUS"
            width={56}
            height={56}
            unoptimized
            priority
          />
        </div>
        <p className="hero-brandline">{hero.brandLine}</p>
        <h1>
          <strong>{hero.titleStrong}</strong> {hero.titleRest}
        </h1>
        <div className="cta-row">
          <LeadCta source="course" label={hero.primaryCta} className="btn-lg" />
          <TelegramButton />
        </div>
      </div>
      <div className="hero-visual" aria-label={hero.visualAlt}>
        <div className="image-frame">
          <Image
            src={media.hero}
            alt={hero.visualAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 44vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

function Problems({ content }: { content: SiteContent }) {
  return (
    <section className="problems" id="problems">
      <div className="section-shell">
        <SectionIntro title={content.problems.title} />
        <div className="problem-grid">
          {content.problems.items.map((item) => (
            <article
              className={item.highlighted ? "problem-card highlighted" : "problem-card"}
              key={item.title}
            >
              <span className="problem-icon">
                <Star aria-hidden="true" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const consequenceIcons = [Banknote, BadgePercent, Scale];

function Consequences({ content }: { content: SiteContent }) {
  return (
    <section className="consequences" id="consequences">
      <div className="section-shell">
        <SectionIntro title={content.consequences.title} />
        <div className="consequence-grid">
          {content.consequences.items.map((item, index) => {
            const Icon = consequenceIcons[index % consequenceIcons.length];

            return (
              <article className="consequence-card" key={item.label}>
                <div className="consequence-top">
                  <span className="soft-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="tag">{item.label}</span>
                </div>
                <p>
                  <strong>{item.lead}</strong> {item.text}
                </p>
              </article>
            );
          })}
        </div>
        <div className="cta-row cta-center">
          <LeadCta source="course" label={content.consequences.cta} className="btn-lg" />
          <TelegramButton />
        </div>
      </div>
    </section>
  );
}

const solutionIcons = [GraduationCap, FileText, Laptop, Headphones];

function Solution({ content }: { content: SiteContent }) {
  return (
    <section className="solution" id="solution">
      <div className="section-shell">
        <SectionIntro
          title={content.solution.title}
          text={content.solution.subtitle}
        />
        <div className="solution-grid">
          {content.solution.items.map((item, index) => {
            const Icon = solutionIcons[index % solutionIcons.length];

            return (
              <article className="solution-card" key={item}>
                <span className="solution-visual">
                  <Icon aria-hidden="true" />
                </span>
                <p>{item}</p>
              </article>
            );
          })}
        </div>
        <div className="cta-row cta-center">
          <LeadCta source="course" label={content.solution.cta} className="btn-lg" />
          <TelegramButton />
        </div>
      </div>
    </section>
  );
}

function CoursesTeaser({ content }: { content: SiteContent }) {
  const featured = getFeaturedCourses(content.locale);
  const labels = coursePageContent[content.locale];
  const coursesHref = content.locale === "ru" ? "/ru/courses" : "/courses";

  return (
    <section className="catalog-teaser" id="catalog">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.catalogTeaser.eyebrow}
          title={content.catalogTeaser.title}
          text={content.catalogTeaser.text}
        />
        <div className="teaser-grid">
          {featured.map((course) => (
            <Link className="teaser-card" href={coursesHref} key={course.id}>
              <span className="course-category">
                {labels.categories[course.category]}
              </span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              {course.priceLabel ? <small>{course.priceLabel}</small> : null}
            </Link>
          ))}
        </div>
        <div className="cta-row cta-center">
          <Link className="primary-button btn-lg" href={coursesHref}>
            <span>{content.ctas.viewCourses}</span>
            <ArrowRight aria-hidden="true" className="button-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Outcomes({ content }: { content: SiteContent }) {
  return (
    <section className="outcomes" id="outcomes">
      <div className="section-shell">
        <SectionIntro eyebrow={content.outcomes.eyebrow} title={content.outcomes.title} />
        <div className="outcome-grid">
          {content.outcomes.items.map((item, index) => (
            <article className="outcome-card" key={item}>
              <span className="outcome-num">{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="cta-row cta-center">
          <LeadCta source="course" label={content.outcomes.cta} className="btn-lg" />
          <TelegramButton />
        </div>
      </div>
    </section>
  );
}

function Founder({ content }: { content: SiteContent }) {
  const { founder, media } = content;

  return (
    <section className="founder" id="founder">
      <div className="section-shell founder-shell">
        <div className="image-frame founder-photo">
          <Image
            src={media.hero}
            alt={founder.name}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            unoptimized
          />
        </div>
        <div className="founder-info">
          <p className="eyebrow">{founder.eyebrow}</p>
          <h2>{founder.name}</h2>
          <p className="founder-role">{founder.role}</p>
          <ul className="founder-facts">
            {founder.facts.map((fact) => (
              <li key={fact}>
                <CheckCircle2 aria-hidden="true" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Trust({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell" id="reviews">
      <SectionIntro
        eyebrow={content.trust.eyebrow}
        title={content.trust.title}
        text={content.trust.text}
      />
      <div className="shorts-strip">
        {shorts.map((short) => (
          <div className="short-card" key={short.id}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${short.youtubeId}`}
              title={short.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Bonuses({ content }: { content: SiteContent }) {
  return (
    <section className="bonuses" id="bonuses">
      <div className="section-shell">
        <SectionIntro eyebrow={content.bonuses.eyebrow} title={content.bonuses.title} />
        <div className="bonus-note">
          <Clock aria-hidden="true" />
          <span>{content.bonuses.note}</span>
        </div>
        <div className="bonus-grid">
          {content.bonuses.items.map((item) => (
            <article className="bonus-card" key={item}>
              <Gift aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scarcity({ content }: { content: SiteContent }) {
  return (
    <section id="scarcity">
      <div className="section-shell">
        <div className="scarcity">
          <Flame aria-hidden="true" />
          <h2>{content.scarcity.title}</h2>
          <p>{content.scarcity.text}</p>
        </div>
      </div>
    </section>
  );
}

function Tariffs({ content }: { content: SiteContent }) {
  return (
    <section className="tariffs" id="tariffs">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.tariffs.eyebrow}
          title={content.tariffs.title}
          text={content.tariffs.text}
        />
        <div className="tariffs-grid">
          {content.tariffs.items.map((tariff) => (
            <article
              className={tariff.highlighted ? "tariff-card highlighted" : "tariff-card"}
              key={tariff.id}
            >
              <div className="tariff-head">
                <span className="tariff-badge">{tariff.tagline}</span>
                <span className="tariff-name">{tariff.name}</span>
              </div>
              <ul className="tariff-features">
                {tariff.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <LeadCta
                source={tariff.id}
                label={tariff.cta}
                variant={tariff.highlighted ? "primary" : "secondary"}
              />
            </article>
          ))}
        </div>
        <p className="tariffs-note">{content.tariffs.note}</p>
      </div>
    </section>
  );
}

function NotFor({ content }: { content: SiteContent }) {
  return (
    <section className="notfor" id="notfor">
      <div className="section-shell">
        <SectionIntro
          eyebrow={content.notFor.eyebrow}
          title={content.notFor.title}
          text={content.notFor.subtitle}
        />
        <div className="notfor-grid">
          {content.notFor.items.map((item) => (
            <article className="notfor-card" key={item}>
              <XCircle aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ content }: { content: SiteContent }) {
  return (
    <section className="faq" id="faq">
      <div className="section-shell faq-shell">
        <SectionIntro eyebrow={content.faq.eyebrow} title={content.faq.title} />
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

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
