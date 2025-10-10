import { Metadata } from "next";
import { GalleryPageContent } from "@/components/sections/gallery-page-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See our beautiful before and after transformations, happy pets, and professional grooming work at Fresh & Furry Pet Grooming in Vashi.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
