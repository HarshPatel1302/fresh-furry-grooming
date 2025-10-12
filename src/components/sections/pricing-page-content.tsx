"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Cat, IndianRupee, CheckCircle, Star, AlertCircle } from "lucide-react";
import { getServices } from "@/lib/content";

// Sample pricing data - in a real app, this would come from content files
const pricingData = {
  dogs: {
    small: {
      id: "small-dog",
      name: "Small Dogs (up to 15kg)",
      fromPrice: 1200,
      description: "Chihuahua, Pomeranian, Shih Tzu, Pug, etc.",
      includes: [
        "Bath & blow dry",
        "Haircut & styling",
        "Nail trimming",
        "Ear cleaning",
        "Sanitary trim"
      ]
    },
    medium: {
      id: "medium-dog",
      name: "Medium Dogs (15-30kg)",
      fromPrice: 1800,
      description: "Beagle, Cocker Spaniel, Bulldog, etc.",
      includes: [
        "Bath & blow dry",
        "Haircut & styling",
        "Nail trimming",
        "Ear cleaning",
        "Sanitary trim"
      ]
    },
    large: {
      id: "large-dog",
      name: "Large Dogs (30kg+)",
      fromPrice: 2500,
      description: "Golden Retriever, Labrador, German Shepherd, etc.",
      includes: [
        "Bath & blow dry",
        "Haircut & styling",
        "Nail trimming",
        "Ear cleaning",
        "Sanitary trim"
      ]
    }
  },
  cats: {
    shortHair: {
      id: "short-hair-cat",
      name: "Short Hair Cats",
      fromPrice: 1000,
      description: "British Shorthair, Bombay, American Shorthair, etc.",
      includes: [
        "Gentle bath & blow dry",
        "Nail trimming",
        "Ear cleaning",
        "Brush-out"
      ]
    },
    longHair: {
      id: "long-hair-cat",
      name: "Long Hair Cats",
      fromPrice: 1500,
      description: "Persian, Maine Coon, Ragdoll, etc.",
      includes: [
        "Gentle bath & blow dry",
        "De-matting & brush-out",
        "Nail trimming",
        "Ear cleaning",
        "Sanitary trim"
      ]
    }
  },
  addOns: [
    { id: "nail-polish", name: "Nail Polish", price: 200, species: "both" },
    { id: "blueberry-facial", name: "Blueberry Facial", price: 400, species: "both" },
    { id: "teeth-cleaning", name: "Teeth Cleaning", price: 300, species: "both" },
    { id: "paw-massage", name: "Paw Massage", price: 250, species: "both" }
  ],
  combos: [
    {
      id: "new-customer",
      name: "New Customer Special",
      description: "Perfect introduction to our services",
      originalPrice: 1500,
      discountedPrice: 1200,
      includes: [
        "Bath & blow dry",
        "Nail trimming",
        "Ear cleaning",
        "Take-home goodie bag"
      ]
    },
    {
      id: "monthly-maintenance",
      name: "Monthly Maintenance Package",
      description: "Keep your pet looking fresh all month",
      originalPrice: 2000,
      discountedPrice: 1700,
      includes: [
        "Full groom",
        "Nail polish",
        "Blueberry facial",
        "Follow-up consultation"
      ]
    }
  ]
};

export function PricingPageContent() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Our pricing is based on pet size, breed, 
            and service requirements. Final quotes are provided after evaluation.
          </p>
        </div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="dogs" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="dogs" className="flex items-center gap-2">
                <Dog className="h-4 w-4" />
                Dog Pricing
              </TabsTrigger>
              <TabsTrigger value="cats" className="flex items-center gap-2">
                <Cat className="h-4 w-4" />
                Cat Pricing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dogs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.values(pricingData.dogs).map((tier) => (
                <Card key={tier.id} className="relative">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary">
                      <IndianRupee className="h-8 w-8" />
                      {tier.fromPrice}
                    </div>
                    <p className="text-sm text-muted-foreground">starting from</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              {Object.values(pricingData.cats).map((tier) => (
                <Card key={tier.id} className="relative">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary">
                      <IndianRupee className="h-8 w-8" />
                      {tier.fromPrice}
                    </div>
                    <p className="text-sm text-muted-foreground">starting from</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Add-ons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingData.addOns.map((addon) => (
              <Card key={addon.id} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-xl font-bold text-primary mb-4">
                    <IndianRupee className="h-5 w-5" />
                    {addon.price}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {addon.species === 'both' ? 'Dogs & Cats' : addon.species}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Special Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingData.combos.map((combo) => (
              <Card key={combo.id} className="relative">
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                  <Star className="h-3 w-3 mr-1" />
                  Special Offer
                </Badge>
                <CardHeader>
                  <CardTitle className="text-xl">{combo.name}</CardTitle>
                  <CardDescription>{combo.description}</CardDescription>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                      <IndianRupee className="h-6 w-6" />
                      {combo.discountedPrice}
                    </div>
                    <div className="flex items-center gap-1 text-lg text-muted-foreground line-through">
                      <IndianRupee className="h-5 w-5" />
                      {combo.originalPrice}
                    </div>
                    <Badge variant="destructive">
                      Save ₹{combo.originalPrice - combo.discountedPrice}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {combo.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Pricing Notes:</h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Final pricing may vary based on pet size, coat condition, and behavior</li>
                <li>• Additional charges may apply for severely matted fur or special requirements</li>
                <li>• All prices include GST and are subject to change</li>
                <li>• We provide detailed quotes before starting any service</li>
                <li>• Cancellation policy: 24 hours notice required</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
