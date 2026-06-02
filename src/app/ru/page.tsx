import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/lib/site-content";

export default function RussianHome() {
  return <LandingPage content={siteContent.ru} />;
}
