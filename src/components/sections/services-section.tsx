import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Clock, PawPrint } from "lucide-react";
import Link from "next/link";
import { getPackageTitles, getPackagesByTitle, formatPrice } from "@/data/pricing";

export function ServicesSection() {
  const packageTitles = getPackageTitles();
  const featuredPackages = packageTitles.slice(0, 3); // Show first 3 package types

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
          {featuredPackages.map((packageTitle) => {
            const packages = getPackagesByTitle(packageTitle);
            const firstPackage = packages[0]; // Use first package for display
            
            // Create description based on package type
            const descriptions = {
              "Only Bath": "A gentle, premium bath with conditioner, professional blow dry, and coat brushing for a fresh, clean look.",
              "Bath + Extras": "Our bath plus nail trim/filing, ear cleaning, and sanitary trimming for a complete refresh.",
              "Full Grooming": "Full bath and blow dry plus pro haircut & styling, nails, ears, teeth brushing, and sanitary trim.",
              "Ayurvedic Spa": "Luxury ayurvedic mud-pack and relaxing massage with ayurvedic shampoo, blow dry, nails, ears, and sanitary care."
            };

            return (
              <Card key={packageTitle} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <PawPrint className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">{packageTitle}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {descriptions[packageTitle as keyof typeof descriptions] || firstPackage?.includes.join(', ')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {firstPackage?.includes.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                    {firstPackage && firstPackage.includes.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{firstPackage.includes.length - 3} more services
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {packages.length > 1 ? `${packages.length} variants` : 'Available'}
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-lg">
                      {packages.length > 1 ? `From ${formatPrice(Math.min(...packages.map(p => p.price)))}` : formatPrice(firstPackage?.price || 0)}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href="/services">
                      View All Options
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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
