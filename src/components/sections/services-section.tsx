import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dog, Cat, Sparkles, Clock, IndianRupee } from "lucide-react";
import Link from "next/link";
import { getServices } from "@/lib/content";

export function ServicesSection() {
  const services = getServices();
  const popularServices = services.filter(service => service.popular).slice(0, 6);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional grooming services tailored for dogs and cats. 
            From basic baths to full spa treatments, we've got your furry friend covered.
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 p-2 bg-background rounded-lg shadow-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
              <Dog className="h-4 w-4" />
              <span className="font-medium">Dogs</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors">
              <Cat className="h-4 w-4" />
              <span className="font-medium">Cats</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularServices.map((service) => (
            <Card key={service.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {service.species === 'dog' ? (
                    <Dog className="h-5 w-5 text-blue-600" />
                  ) : service.species === 'cat' ? (
                    <Cat className="h-5 w-5 text-purple-600" />
                  ) : (
                    <div className="flex gap-1">
                      <Dog className="h-4 w-4 text-blue-600" />
                      <Cat className="h-4 w-4 text-purple-600" />
                    </div>
                  )}
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.bullets.slice(0, 3).map((bullet, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {bullet}
                    </li>
                  ))}
                  {service.bullets.length > 3 && (
                    <li className="text-xs text-muted-foreground">
                      +{service.bullets.length - 3} more services
                    </li>
                  )}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-lg">
                    <IndianRupee className="h-4 w-4" />
                    {service.fromPrice}
                  </div>
                </div>
                
                <Button asChild className="w-full">
                  <Link href={`/services#${service.id}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
