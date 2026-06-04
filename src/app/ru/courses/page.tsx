import type { Metadata } from "next";
import { CoursesPage } from "@/components/courses-page";
import { courseCatalog, coursePageContent } from "@/lib/courses";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Курсы | Soliq Konstruktor",
  description:
    "Каталог курсов IN PLUS по бухгалтерии, налогам, 1C и бизнес-практике.",
};

export default function RussianCourses() {
  return (
    <CoursesPage
      content={siteContent.ru}
      courses={courseCatalog.ru}
      labels={coursePageContent.ru}
    />
  );
}
