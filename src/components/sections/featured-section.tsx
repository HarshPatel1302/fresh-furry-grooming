import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Image as ImageIcon, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFeatured } from "@/lib/content";

export function FeaturedSection() {
  const featured = getFeatured();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Today's Reels & Photos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our daily grooming adventures and see the happy faces of our furry clients. 
            Real transformations, real results!
          </p>
        </div>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featured.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square">
                  {item.type === 'video' ? (
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
                      alt={item.title || "Featured content"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  
                  {/* Type Badge */}
                  <Badge 
                    className="absolute top-3 left-3"
                    variant={item.type === 'video' ? 'default' : 'secondary'}
                  >
                    {item.type === 'video' ? (
                      <Play className="h-3 w-3 mr-1" />
                    ) : (
                      <ImageIcon className="h-3 w-3 mr-1" />
                    )}
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </Badge>

                  {/* Species Badge */}
                  {item.species && (
                    <Badge 
                      className="absolute top-3 right-3"
                      variant="outline"
                    >
                      {item.species === 'dog' ? '🐕' : item.species === 'cat' ? '🐱' : '🐾'}
                    </Badge>
                  )}
                </div>

                <CardContent className="p-4">
                  {item.title && (
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <span className="capitalize">{item.species || 'pet'}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No featured content yet</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for daily updates from our grooming sessions!
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/gallery">
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
