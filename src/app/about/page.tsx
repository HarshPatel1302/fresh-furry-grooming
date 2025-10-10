import { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about-page-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Fresh & Furry Pet Grooming - our story, mission, and dedicated team of professional groomers in Vashi, Navi Mumbai.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
