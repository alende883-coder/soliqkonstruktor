"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  CircleDollarSign,
  FileText,
  Landmark,
  Layers3,
  Scale,
  Search,
} from "lucide-react";
import type { Course, CourseCategory, CoursePageLabels } from "@/lib/courses";

const iconMap = {
  accounting: Calculator,
  tax: Landmark,
  "one-c": Layers3,
  management: BriefcaseBusiness,
  law: Scale,
  career: FileText,
} satisfies Record<CourseCategory, typeof Calculator>;

const categories: CourseCategory[] = [
  "accounting",
  "tax",
  "one-c",
  "management",
  "law",
  "career",
];

type SortKey = "featured" | "az" | "za";

type CourseCatalogProps = {
  courses: Course[];
  labels: CoursePageLabels;
};

export function CourseCatalog({ courses, labels }: CourseCatalogProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CourseCategory | "all">(
    "all",
  );
  const [sortBy, setSortBy] = useState<SortKey>("featured");

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matched = courses.filter((course) => {
      const categoryMatch =
        activeCategory === "all" || course.category === activeCategory;
      const queryMatch =
        normalizedQuery.length === 0 ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.description.toLowerCase().includes(normalizedQuery) ||
        labels.categories[course.category].toLowerCase().includes(normalizedQuery);

      return categoryMatch && queryMatch;
    });

    return [...matched].sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [activeCategory, courses, labels.categories, query, sortBy]);

  return (
    <section className="catalog-panel" aria-label={labels.title}>
      <div className="catalog-tools">
        <label className="search-field">
          <Search aria-hidden="true" />
          <input
            type="search"
            value={query}
            placeholder={labels.searchPlaceholder}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="category-tabs" role="tablist" aria-label={labels.title}>
          <button
            className={activeCategory === "all" ? "active" : ""}
            type="button"
            onClick={() => setActiveCategory("all")}
          >
            {labels.allCategories}
          </button>
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "active" : ""}
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {labels.categories[category]}
            </button>
          ))}
        </div>
        <div className="catalog-foot">
          <p className="catalog-count">
            {filteredCourses.length} {labels.resultLabel}
          </p>
          <label className="sort-field">
            <span>{labels.sort.label}</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortKey)}
            >
              <option value="featured">{labels.sort.featured}</option>
              <option value="az">{labels.sort.az}</option>
              <option value="za">{labels.sort.za}</option>
            </select>
          </label>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard course={course} labels={labels} key={course.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>{labels.emptyTitle}</h2>
          <p>{labels.emptyText}</p>
        </div>
      )}
    </section>
  );
}

function CourseCard({
  course,
  labels,
}: {
  course: Course;
  labels: CoursePageLabels;
}) {
  const Icon = iconMap[course.icon];

  return (
    <article className={`course-card accent-${course.accent}`}>
      <div className="course-card-top">
        <span className="course-icon">
          <Icon aria-hidden="true" />
        </span>
        <span className="course-category">{labels.categories[course.category]}</span>
      </div>
      <div className="course-card-body">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <div className="course-meta">
        {course.releaseLabel && (
          <div className="course-meta-row">
            <CalendarDays aria-hidden="true" />
            <span>
              <small>{labels.release}</small>
              <strong>{course.releaseLabel}</strong>
            </span>
          </div>
        )}
        {course.priceLabel && (
          <div className="course-meta-row">
            <CircleDollarSign aria-hidden="true" />
            <span>
              <small>{labels.price}</small>
              <strong>{course.priceLabel}</strong>
            </span>
          </div>
        )}
      </div>
      {course.getCourseUrl ? (
        <a
          className="course-link"
          href={course.getCourseUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>{labels.openCourse}</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : (
        <span className="course-pending">{labels.pendingLink}</span>
      )}
    </article>
  );
}
