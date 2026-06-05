import { CourseCatalog } from "@/components/course-catalog";
import { LeadCta } from "@/components/lead-cta";
import { LeadFormProvider } from "@/components/lead-form-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Course, CoursePageLabels } from "@/lib/courses";
import type { SiteContent } from "@/lib/site-content";

type CoursesPageProps = {
  content: SiteContent;
  courses: Course[];
  labels: CoursePageLabels;
};

export function CoursesPage({ content, courses, labels }: CoursesPageProps) {
  return (
    <LeadFormProvider content={content}>
      <SiteHeader content={content} activePage="courses" />
      <main className="courses-page">
        <section className="catalog-hero section-shell">
          <p className="eyebrow">{labels.eyebrow}</p>
          <h1>{labels.title}</h1>
          <p>{labels.text}</p>
          <div className="hero-actions">
            <LeadCta source="price" label={content.ctas.knowPrice} />
            <LeadCta
              source="course"
              label={content.ctas.enroll}
              variant="secondary"
            />
          </div>
        </section>
        <div className="section-shell catalog-shell">
          <CourseCatalog courses={courses} labels={labels} />
        </div>
      </main>
      <SiteFooter content={content} activePage="courses" />
    </LeadFormProvider>
  );
}
