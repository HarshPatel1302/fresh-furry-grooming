"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ThumbsUp, MessageCircle, Calendar, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sample reviews data
const reviewsData = [
  {
    id: "1",
    customerName: "Priya Sharma",
    petName: "Buddy",
    petType: "Golden Retriever",
    rating: 5,
    review: "Absolutely fantastic service! Buddy came home looking and smelling amazing. The staff was so gentle with him, and he was actually excited to go back for his next appointment. Highly recommend Fresh & Furry!",
    date: "2024-01-15",
    verified: true,
    helpful: 12,
    images: ["/placeholders/staff-priya.svg"],
    services: ["Full Grooming", "Nail Trimming"]
  },
  {
    id: "2",
    customerName: "Rajesh Kumar",
    petName: "Whiskers",
    petType: "Persian Cat",
    rating: 5,
    review: "I was worried about bringing Whiskers for grooming since he's usually very anxious. But the team at Fresh & Furry handled him with such care and patience. He's never been this calm during grooming!",
    date: "2024-01-14",
    verified: true,
    helpful: 8,
    services: ["Cat Grooming", "Deshedding"]
  },
  {
    id: "3",
    customerName: "Sneha Patel",
    petName: "Max",
    petType: "German Shepherd",
    rating: 5,
    review: "Professional, clean, and caring. Max is a large dog and can be intimidating, but the groomers here know exactly how to handle big breeds. The facility is spotless and Max loves going there!",
    date: "2024-01-13",
    verified: true,
    helpful: 15,
    images: ["/placeholders/staff-rahul.svg"],
    services: ["Large Breed Grooming", "Nail Care"]
  },
  {
    id: "4",
    customerName: "Anita Desai",
    petName: "Luna",
    petType: "Himalayan Cat",
    rating: 4,
    review: "Great service! Luna looks beautiful after her grooming session. The only minor issue was the wait time, but it was worth it for the quality of work. The staff is very knowledgeable about cat grooming.",
    date: "2024-01-12",
    verified: true,
    helpful: 6,
    services: ["Long Hair Cat Grooming", "Spa Treatment"]
  },
  {
    id: "5",
    customerName: "Vikram Singh",
    petName: "Rocky",
    petType: "Poodle",
    rating: 5,
    review: "Outstanding grooming service! Rocky gets the royal treatment every time. The creative styling options are amazing, and they always listen to exactly what I want. Couldn't be happier!",
    date: "2024-01-11",
    verified: true,
    helpful: 10,
    images: ["/placeholders/staff-sneha.svg"],
    services: ["Creative Styling", "Full Grooming"]
  },
  {
    id: "6",
    customerName: "Meera Joshi",
    petName: "Coco",
    petType: "Shih Tzu",
    rating: 5,
    review: "Coco has been coming here for over a year now, and we've never been disappointed. The consistency in quality is remarkable. They remember Coco's preferences and always make her feel special.",
    date: "2024-01-10",
    verified: true,
    helpful: 9,
    services: ["Regular Grooming", "Nail Trimming"]
  },
  {
    id: "7",
    customerName: "Arjun Reddy",
    petName: "Simba",
    petType: "Maine Coon",
    rating: 5,
    review: "Simba's long hair was getting out of control, but Fresh & Furry worked their magic! The deshedding treatment was incredible, and Simba is so much more comfortable now. Thank you!",
    date: "2024-01-09",
    verified: true,
    helpful: 7,
    services: ["Deshedding Treatment", "Long Hair Care"]
  },
  {
    id: "8",
    customerName: "Kavita Nair",
    petName: "Bruno",
    petType: "Labrador",
    rating: 5,
    review: "Bruno is a senior dog with some mobility issues, but the team here is so patient and accommodating. They take extra care with him and always make sure he's comfortable throughout the process.",
    date: "2024-01-08",
    verified: true,
    helpful: 11,
    services: ["Senior Pet Care", "Gentle Grooming"]
  }
];

const ratingStats = {
  totalReviews: 156,
  averageRating: 4.9,
  ratingBreakdown: [
    { stars: 5, count: 142, percentage: 91 },
    { stars: 4, count: 12, percentage: 8 },
    { stars: 3, count: 2, percentage: 1 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 }
  ]
};

export function ReviewsPageContent() {
  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const filteredReviews = reviewsData.filter(review => {
    if (filterRating === "all") return true;
    return review.rating === parseInt(filterRating);
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "helpful") {
      return b.helpful - a.helpful;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Customer Reviews
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            See what our happy customers have to say about their experience at Fresh & Furry. 
            We're proud of our 4.9-star rating and the trust our clients place in us.
          </p>
        </div>

        {/* Rating Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                Overall Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{ratingStats.averageRating}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-muted-foreground">
                  Based on {ratingStats.totalReviews} reviews
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rating Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {ratingStats.ratingBreakdown.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-8">{rating.stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            <Button
              variant={filterRating === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRating("all")}
            >
              All Ratings
            </Button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <Button
                key={rating}
                variant={filterRating === rating.toString() ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRating(rating.toString())}
                className="flex items-center gap-1"
              >
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                {rating}+
              </Button>
            ))}
          </div>

          <div className="flex gap-2 ml-auto">
            <Button
              variant={sortBy === "recent" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("recent")}
              className="flex items-center gap-1"
            >
              <Calendar className="h-3 w-3" />
              Recent
            </Button>
            <Button
              variant={sortBy === "helpful" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("helpful")}
              className="flex items-center gap-1"
            >
              <ThumbsUp className="h-3 w-3" />
              Most Helpful
            </Button>
            <Button
              variant={sortBy === "rating" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("rating")}
              className="flex items-center gap-1"
            >
              <Star className="h-3 w-3" />
              Highest Rated
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {sortedReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-lg">{review.customerName}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {review.petName} ({review.petType})
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(review.date).toLocaleDateString()}
                  {review.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-green-200" />
                  <p className="text-sm text-gray-700 pl-4 italic">
                    {review.review}
                  </p>
                </div>
                
                {review.images && review.images.length > 0 && (
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {review.images.slice(0, 2).map((image, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`Review photo ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {review.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ThumbsUp className="h-3 w-3" />
                    {review.helpful}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
              <p className="text-muted-foreground mb-6">
                Book an appointment today and experience the Fresh & Furry difference. 
                Your pet deserves the best care!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/gallery">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instagram Integration */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Instagram className="h-6 w-6 text-pink-600" />
                Follow Our Instagram
              </CardTitle>
              <p className="text-muted-foreground">
                See daily transformations, behind-the-scenes moments, and happy pets on our Instagram
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <a href="https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow @freshandfurryspa
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
