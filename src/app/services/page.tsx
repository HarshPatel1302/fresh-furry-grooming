import { Metadata } from "next";
import { ServicesPageContent } from "@/components/sections/services-page-content";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Professional pet grooming services for dogs and cats in Vashi. From basic baths to full spa treatments, we provide comprehensive care for your furry friends.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
