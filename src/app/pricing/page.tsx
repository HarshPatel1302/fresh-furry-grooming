import { Metadata } from "next";
import { PricingPageContent } from "@/components/sections/pricing-page-content";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description: "Transparent pricing for professional pet grooming services in Vashi. View our packages for dogs and cats with no hidden fees.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
