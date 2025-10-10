"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Dog, Cat, Play, Image as ImageIcon, Calendar, Filter } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "@/lib/content";

// Sample gallery data
const galleryData = [
  {
    id: "1",
    type: "image",
    url: "/placeholders/staff-priya.svg",
    title: "Golden Retriever Transformation",
    description: "Complete grooming and styling for this beautiful Golden Retriever",
    species: "dog",
    category: "before-after",
    date: "2024-01-15",
    tags: ["transformation", "golden-retriever", "full-groom"]
  },
  {
    id: "2",
    type: "video",
    url: "/placeholders/hero-video.mp4",
    title: "Happy Grooming Session",
    description: "Watch our gentle approach to pet grooming",
    species: "both",
    category: "grooming",
    date: "2024-01-14",
    tags: ["gentle", "professional", "happy"]
  },
  {
    id: "3",
    type: "image",
    url: "/placeholders/staff-rahul.svg",
    title: "Persian Cat Spa Treatment",
    description: "Luxury spa treatment for this beautiful Persian cat",
    species: "cat",
    category: "spa",
    date: "2024-01-13",
    tags: ["spa", "persian", "luxury"]
  },
  {
    id: "4",
    type: "image",
    url: "/placeholders/staff-sneha.svg",
    title: "German Shepherd Grooming",
    description: "Professional grooming for large breed dogs",
    species: "dog",
    category: "grooming",
    date: "2024-01-12",
    tags: ["large-breed", "professional", "german-shepherd"]
  },
  {
    id: "5",
    type: "video",
    url: "/placeholders/daily-grooming.mp4",
    title: "Behind the Scenes",
    description: "A day in the life at Fresh & Furry",
    species: "both",
    category: "facility",
    date: "2024-01-11",
    tags: ["behind-scenes", "facility", "daily"]
  },
  {
    id: "6",
    type: "image",
    url: "/placeholders/staff-priya.svg",
    title: "Poodle Styling",
    description: "Creative styling for this adorable poodle",
    species: "dog",
    category: "grooming",
    date: "2024-01-10",
    tags: ["poodle", "styling", "creative"]
  },
  {
    id: "7",
    type: "image",
    url: "/placeholders/staff-rahul.svg",
    title: "Before & After: Shih Tzu",
    description: "Amazing transformation of this Shih Tzu",
    species: "dog",
    category: "before-after",
    date: "2024-01-09",
    tags: ["before-after", "shih-tzu", "transformation"]
  },
  {
    id: "8",
    type: "video",
    url: "/placeholders/grooming-process.mp4",
    title: "Complete Grooming Process",
    description: "Step-by-step grooming process demonstration",
    species: "both",
    category: "grooming",
    date: "2024-01-08",
    tags: ["process", "step-by-step", "demonstration"]
  },
  {
    id: "9",
    type: "image",
    url: "/placeholders/staff-sneha.svg",
    title: "Maine Coon Cat Care",
    description: "Specialized care for long-haired cats",
    species: "cat",
    category: "grooming",
    date: "2024-01-07",
    tags: ["maine-coon", "long-hair", "specialized"]
  }
];

const categories = [
  { id: "all", label: "All", icon: Filter },
  { id: "before-after", label: "Before & After", icon: ImageIcon },
  { id: "grooming", label: "Grooming", icon: Dog },
  { id: "spa", label: "Spa", icon: Cat },
  { id: "facility", label: "Facility", icon: ImageIcon }
];

export function GalleryPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSpecies, setSelectedSpecies] = useState("both");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryData.filter(item => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const speciesMatch = selectedSpecies === "both" || item.species === selectedSpecies || item.species === "both";
    return categoryMatch && speciesMatch;
  });

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

        {/* Species Filter */}
        <Tabs value={selectedSpecies} onValueChange={setSelectedSpecies} className="mb-8">
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="both" className="flex items-center gap-2">
                <div className="flex gap-1">
                  <Dog className="h-4 w-4" />
                  <Cat className="h-4 w-4" />
                </div>
                All Pets
              </TabsTrigger>
              <TabsTrigger value="dog" className="flex items-center gap-2">
                <Dog className="h-4 w-4" />
                Dogs
              </TabsTrigger>
              <TabsTrigger value="cat" className="flex items-center gap-2">
                <Cat className="h-4 w-4" />
                Cats
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group">
                  <div className="relative aspect-square">
                    {item.type === "video" ? (
                      <div className="relative w-full h-full">
                        <video
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        >
                          <source src={item.url} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white/80 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={item.url}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    
                    {/* Type Badge */}
                    <Badge 
                      className="absolute top-3 left-3"
                      variant={item.type === "video" ? "default" : "secondary"}
                    >
                      {item.type === "video" ? (
                        <Play className="h-3 w-3 mr-1" />
                      ) : (
                        <ImageIcon className="h-3 w-3 mr-1" />
                      )}
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>

                    {/* Species Badge */}
                    <Badge 
                      className="absolute top-3 right-3"
                      variant="outline"
                    >
                      {item.species === "dog" ? "🐕" : item.species === "cat" ? "🐱" : "🐾"}
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {item.type === "video" ? (
                      <Play className="h-5 w-5" />
                    ) : (
                      <ImageIcon className="h-5 w-5" />
                    )}
                    {item.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                  {item.type === "video" ? (
                    <video
                      className="w-full rounded-lg"
                      controls
                      autoPlay
                      muted
                    >
                      <source src={item.url} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                  
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
                        <Calendar className="h-4 w-4" />
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
            <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more content.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Pet's Session?</h2>
          <p className="text-muted-foreground mb-6">
            Join our happy customers and give your pet the grooming they deserve
          </p>
          <Button size="lg">
            Book Appointment Now
          </Button>
        </div>
      </div>
    </div>
  );
}
