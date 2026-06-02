import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/lib/site-content";

export default function Home() {
  return <LandingPage content={siteContent.uz} />;
}
