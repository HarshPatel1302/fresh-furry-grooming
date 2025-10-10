import { Metadata } from "next";
import { ReviewsPageContent } from "@/components/sections/reviews-page-content";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read what our happy customers say about their experience at Fresh & Furry Pet Grooming in Vashi. Real reviews from real pet owners.",
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
