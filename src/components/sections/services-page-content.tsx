"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Cat, CheckCircle, PawPrint } from "lucide-react";
import Link from "next/link";
import { PACKAGES, ADDONS, formatPrice, ServicePackage, AddOn } from "@/data/pricing";

export function ServicesPageContent() {
  const [selectedSpecies, setSelectedSpecies] = useState<'dog' | 'cat' | 'both'>('both');

  const renderPackageCard = (pkg: ServicePackage) => (
    <Card key={pkg.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PawPrint className="h-5 w-5 text-green-600" />
            <div>
              <CardTitle className="text-lg">{pkg.title}</CardTitle>
              <CardDescription className="text-sm capitalize">
                {pkg.petCategory === 'small-dog' ? 'Small Dogs' : 
                 pkg.petCategory === 'medium-large-dog' ? 'Medium/Large Dogs' : 
                 'Cats'}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-1 font-bold text-xl text-green-600">
            {formatPrice(pkg.price)}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {pkg.includes.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full group-hover:bg-green-700 transition-colors touch-manipulation min-h-[48px]" size="lg">
          <Link href="/contact">
            <PawPrint className="h-4 w-4 mr-2" />
            Book This Service
          </Link>
        </Button>
      </CardContent>
    </Card>
  );

  const renderAddOnCard = (addon: AddOn) => (
    <Card key={addon.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PawPrint className="h-5 w-5 text-green-600" />
            <CardTitle className="text-lg">{addon.title}</CardTitle>
          </div>
          <div className="flex items-center gap-1 font-bold text-xl text-green-600">
            {formatPrice(addon.price)}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4">
          Add this service to any grooming package for a complete experience.
        </p>
        
        <Button asChild className="w-full group-hover:bg-green-700 transition-colors touch-manipulation min-h-[48px]" size="lg" variant="outline">
          <Link href="/contact">
            <PawPrint className="h-4 w-4 mr-2" />
            Book This Service
          </Link>
        </Button>
      </CardContent>
    </Card>
  );



  return (
    <div className="min-h-screen py-12 sm:py-16 touch-pan-x touch-pan-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our Premium Grooming Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Professional grooming services tailored for dogs and cats. 
            Our certified groomers use premium products and gentle techniques 
            to ensure your pet looks and feels their absolute best.
          </p>
        </div>

        {/* Service Categories Tabs */}
        <Tabs value={selectedSpecies} onValueChange={(value) => setSelectedSpecies(value as 'dog' | 'cat' | 'both')} className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="both" className="flex items-center gap-2">
                <div className="flex gap-1">
                  <Dog className="h-4 w-4" />
                  <Cat className="h-4 w-4" />
                </div>
                All Services
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

          <TabsContent value="both" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PACKAGES.map(renderPackageCard)}
            </div>
          </TabsContent>

          <TabsContent value="dog" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PACKAGES.filter(pkg => pkg.petCategory.includes('dog')).map(renderPackageCard)}
            </div>
          </TabsContent>

          <TabsContent value="cat" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PACKAGES.filter(pkg => pkg.petCategory === 'cat').map(renderPackageCard)}
            </div>
          </TabsContent>
        </Tabs>

        {/* Add-ons Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Extra Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance any grooming package with these additional services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map(renderAddOnCard)}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Ready to Book?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to schedule your pet's grooming appointment. We'll help you choose the perfect package.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}