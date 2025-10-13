"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

// Gallery data with real photos
const galleryData = [
  {
    id: "1",
    type: "image",
    url: "/IMG-20251012-WA0003.jpg",
    title: "Professional Pet Grooming",
    description: "Expert grooming services for your beloved pets",
    species: "dog",
    category: "grooming",
    date: "2024-01-15",
    tags: ["grooming", "professional", "quality"]
  },
  {
    id: "2",
    type: "image",
    url: "/IMG-20251012-WA0004.jpg",
    title: "Spa Treatment Session",
    description: "Relaxing spa treatment for pets",
    species: "both",
    category: "spa",
    date: "2024-01-14",
    tags: ["spa", "relaxation", "treatment"]
  },
  {
    id: "3",
    type: "image",
    url: "/IMG-20251012-WA0005.jpg",
    title: "Before & After Transformation",
    description: "Amazing transformation results",
    species: "dog",
    category: "before-after",
    date: "2024-01-13",
    tags: ["transformation", "before-after", "amazing"]
  },
  {
    id: "4",
    type: "image",
    url: "/IMG-20251012-WA0007.jpg",
    title: "Cat Grooming Specialist",
    description: "Specialized care for feline friends",
    species: "cat",
    category: "grooming",
    date: "2024-01-12",
    tags: ["cat", "grooming", "specialist"]
  },
  {
    id: "5",
    type: "image",
    url: "/IMG-20251012-WA0008.jpg",
    title: "Premium Grooming Service",
    description: "Top-quality grooming for your pets",
    species: "both",
    category: "grooming",
    date: "2024-01-11",
    tags: ["premium", "quality", "service"]
  },
  {
    id: "6",
    type: "image",
    url: "/IMG-20251012-WA0011.jpg",
    title: "Dog Styling Session",
    description: "Creative styling for dogs",
    species: "dog",
    category: "grooming",
    date: "2024-01-10",
    tags: ["styling", "creative", "dog"]
  },
  {
    id: "7",
    type: "image",
    url: "/IMG-20251012-WA0012.jpg",
    title: "Pet Care Excellence",
    description: "Excellence in pet care and grooming",
    species: "both",
    category: "grooming",
    date: "2024-01-09",
    tags: ["excellence", "care", "grooming"]
  },
  {
    id: "8",
    type: "image",
    url: "/IMG-20251012-WA0025.jpg",
    title: "Luxury Pet Spa",
    description: "Luxury spa experience for pets",
    species: "cat",
    category: "spa",
    date: "2024-01-08",
    tags: ["luxury", "spa", "experience"]
  },
  {
    id: "9",
    type: "image",
    url: "/IMG-20251012-WA0026.jpg",
    title: "Professional Dog Grooming",
    description: "Professional grooming for dogs",
    species: "dog",
    category: "grooming",
    date: "2024-01-07",
    tags: ["professional", "dog", "grooming"]
  },
  {
    id: "10",
    type: "image",
    url: "/IMG-20251012-WA0027.jpg",
    title: "Complete Pet Makeover",
    description: "Complete makeover for your pets",
    species: "both",
    category: "before-after",
    date: "2024-01-06",
    tags: ["makeover", "complete", "transformation"]
  }
];

export function GalleryPageContent() {

  const filteredItems = galleryData;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at our beautiful transformations, happy pets, and professional grooming work. 
            Every pet that walks through our doors leaves looking and feeling their absolute best.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group">
                  <div className="relative aspect-square">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>
                    {item.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                  
                  <div className="mt-4 space-y-3">
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                      <div className="flex items-center gap-2">
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        {item.species === "dog" ? "🐕" : item.species === "cat" ? "🐱" : "🐾"}
                        <span className="capitalize">{item.species}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">
              No gallery items available.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
