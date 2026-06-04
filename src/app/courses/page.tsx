import type { Metadata } from "next";
import { CoursesPage } from "@/components/courses-page";
import { courseCatalog, coursePageContent } from "@/lib/courses";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kurslar | Soliq Konstruktor",
  description:
    "IN PLUS buxgalteriya, soliq, 1C va biznes amaliyoti bo'yicha kurslar katalogi.",
};

export default function Courses() {
  return (
    <CoursesPage
      content={siteContent.uz}
      courses={courseCatalog.uz}
      labels={coursePageContent.uz}
    />
  );
}
