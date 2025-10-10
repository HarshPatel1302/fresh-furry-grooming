"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const beforeAfterExamples = [
  {
    id: 1,
    before: "/placeholders/staff-priya.jpg", // Using placeholder as before image
    after: "/placeholders/staff-rahul.jpg", // Using placeholder as after image
    petName: "Max",
    breed: "Golden Retriever",
    service: "Full Groom + Spa Package"
  },
  {
    id: 2,
    before: "/placeholders/staff-sneha.jpg",
    after: "/placeholders/staff-priya.jpg",
    petName: "Luna",
    breed: "Persian Cat",
    service: "Cat Full Groom"
  },
  {
    id: 3,
    before: "/placeholders/staff-rahul.jpg",
    after: "/placeholders/staff-sneha.jpg",
    petName: "Bruno",
    breed: "German Shepherd",
    service: "De-shedding Treatment"
  }
];

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterExamples.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterExamples.length) % beforeAfterExamples.length);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Amazing Transformations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the incredible before and after results from our professional grooming services. 
            Your pet deserves to look and feel their absolute best!
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {beforeAfterExamples.map((example) => (
                <div key={example.id} className="w-full flex-shrink-0">
                  <Card>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Before Image */}
                        <div className="relative">
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Before
                            </span>
                          </div>
                          <div className="aspect-square relative">
                            <Image
                              src={example.before}
                              alt={`${example.petName} before grooming`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* After Image */}
                        <div className="relative">
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              After
                            </span>
                          </div>
                          <div className="aspect-square relative">
                            <Image
                              src={example.after}
                              alt={`${example.petName} after grooming`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Pet Info */}
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">
                          {example.petName}
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          {example.breed}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Service: {example.service}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {beforeAfterExamples.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg">
            Book Your Pet's Transformation
          </Button>
        </div>
      </div>
    </section>
  );
}
