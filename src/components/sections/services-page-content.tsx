"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Cat, Sparkles, Clock, IndianRupee, CheckCircle, Shield, Zap, Crown, Heart, PawPrint } from "lucide-react";
import Link from "next/link";

// Service data type
type ServiceData = {
  id: string;
  title: string;
  description: string;
  duration: string;
  fromPrice: string;
  species: string;
  category: string;
  popular?: boolean;
  bullets: string[];
};

// Comprehensive service data
const serviceData = {
  dog: [
    {
      id: "dog-basic-bath",
      title: "Basic Bath & Blow Dry",
      description: "Complete bath with premium shampoo, conditioner, and professional blow dry for dogs of all sizes.",
      duration: "60-90 minutes",
      fromPrice: "800",
      species: "dog",
      category: "grooming",
      popular: true,
      bullets: [
        "Premium pet-safe shampoo & conditioner",
        "Professional blow dry with brush-out",
        "Ear cleaning included",
        "Paw pad cleaning",
        "Coat conditioning treatment"
      ]
    },
    {
      id: "dog-full-groom",
      title: "Full Grooming Package",
      description: "Complete grooming service including bath, haircut, nail trimming, and styling for the perfect look.",
      duration: "2-3 hours",
      fromPrice: "1500",
      species: "dog",
      category: "grooming",
      popular: true,
      bullets: [
        "Bath & blow dry",
        "Professional haircut & styling",
        "Nail trimming & filing",
        "Ear cleaning & plucking",
        "Teeth brushing",
        "Sanitary trim"
      ]
    },
    {
      id: "dog-spa-luxury",
      title: "Luxury Spa Treatment",
      description: "Premium spa experience with aromatherapy, deep conditioning, and relaxing massage for ultimate pampering.",
      duration: "3-4 hours",
      fromPrice: "2500",
      species: "dog",
      category: "spa",
      popular: false,
      bullets: [
        "Full groom or bath",
        "Aromatherapy treatment",
        "Blueberry facial",
        "Deep conditioning mask",
        "Relaxing massage",
        "Paw balm treatment"
      ]
    },
    {
      id: "dog-deshedding",
      title: "Deshedding Treatment",
      description: "Specialized treatment to reduce shedding and remove loose hair for dogs with heavy coats.",
      duration: "90 minutes",
      fromPrice: "1200",
      species: "dog",
      category: "special",
      popular: false,
      bullets: [
        "Specialized deshedding shampoo",
        "High-velocity dryer treatment",
        "Professional brushing",
        "Coat conditioning",
        "Undercoat removal"
      ]
    },
    {
      id: "dog-nail-care",
      title: "Nail Care & Pedicure",
      description: "Professional nail trimming, filing, and paw care to keep your dog's paws healthy and comfortable.",
      duration: "30 minutes",
      fromPrice: "400",
      species: "dog",
      category: "health",
      popular: false,
      bullets: [
        "Nail trimming & filing",
        "Paw pad cleaning",
        "Moisturizing paw balm",
        "Hair trimming between pads",
        "Health check of paws"
      ]
    },
    {
      id: "dog-senior-care",
      title: "Senior Dog Special Care",
      description: "Gentle grooming services designed specifically for senior dogs with special needs and comfort requirements.",
      duration: "2-4 hours",
      fromPrice: "1800",
      species: "dog",
      category: "special",
      popular: false,
      bullets: [
        "Gentle handling throughout",
        "Shorter sessions if needed",
        "Mobility assistance",
        "Special attention to joints",
        "Comfort breaks included"
      ]
    }
  ],
  cat: [
    {
      id: "cat-basic-bath",
      title: "Cat Bath & Dry",
      description: "Gentle bath service designed specifically for cats with stress-free techniques and premium products.",
      duration: "45-60 minutes",
      fromPrice: "600",
      species: "cat",
      category: "grooming",
      popular: true,
      bullets: [
        "Cat-specific gentle shampoo",
        "Stress-free bathing technique",
        "Professional blow dry",
        "Ear cleaning",
        "Calming pheromones"
      ]
    },
    {
      id: "cat-full-groom",
      title: "Complete Cat Grooming",
      description: "Full grooming service including bath, brushing, nail trimming, and styling for your feline friend.",
      duration: "1.5-2 hours",
      fromPrice: "1000",
      species: "cat",
      category: "grooming",
      popular: true,
      bullets: [
        "Bath & blow dry",
        "Professional brushing",
        "Nail trimming",
        "Ear cleaning",
        "Sanitary trim",
        "Coat conditioning"
      ]
    },
    {
      id: "cat-long-hair",
      title: "Long-Hair Cat Special",
      description: "Specialized grooming for long-haired cats including detangling, dematting, and coat maintenance.",
      duration: "2-3 hours",
      fromPrice: "1400",
      species: "cat",
      category: "special",
      popular: false,
      bullets: [
        "Gentle detangling",
        "Professional dematting",
        "Coat conditioning treatment",
        "Thorough brushing",
        "Preventive care tips"
      ]
    },
    {
      id: "cat-nail-trim",
      title: "Cat Nail Trimming",
      description: "Quick and safe nail trimming service to keep your cat's claws healthy and prevent furniture damage.",
      duration: "15 minutes",
      fromPrice: "300",
      species: "cat",
      category: "health",
      popular: false,
      bullets: [
        "Professional nail trimming",
        "Stress-free handling",
        "Paw pad inspection",
        "Quick service",
        "Safety tips provided"
      ]
    },
    {
      id: "cat-spa",
      title: "Cat Spa Experience",
      description: "Luxury spa treatment for cats with aromatherapy and premium conditioning for the ultimate pampering.",
      duration: "2-3 hours",
      fromPrice: "1800",
      species: "cat",
      category: "spa",
      popular: false,
      bullets: [
        "Gentle spa treatment",
        "Aromatherapy for cats",
        "Deep conditioning",
        "Relaxing massage",
        "Premium products"
      ]
    },
    {
      id: "cat-anxious",
      title: "Anxious Cat Care",
      description: "Specialized service for anxious or nervous cats with extra patience and calming techniques.",
      duration: "1-3 hours",
      fromPrice: "1200",
      species: "cat",
      category: "special",
      popular: false,
      bullets: [
        "Extra patient handling",
        "Calming techniques",
        "Shorter sessions",
        "Stress reduction methods",
        "Positive reinforcement"
      ]
    }
  ],
  both: [
    {
      id: "both-health-check",
      title: "Health Check Service",
      description: "Comprehensive health check during grooming to identify any potential issues early.",
      duration: "30 minutes",
      fromPrice: "500",
      species: "both",
      category: "health",
      popular: false,
      bullets: [
        "Ear health inspection",
        "Skin condition check",
        "Nail health assessment",
        "Coat condition evaluation",
        "General wellness report"
      ]
    },
    {
      id: "both-flea-treatment",
      title: "Flea & Tick Treatment",
      description: "Professional flea and tick treatment using safe, effective products for your pet's protection.",
      duration: "45 minutes",
      fromPrice: "800",
      species: "both",
      category: "health",
      popular: false,
      bullets: [
        "Safe flea treatment",
        "Tick removal",
        "Preventive application",
        "Follow-up care instructions",
        "Home treatment tips"
      ]
    }
  ]
};

export function ServicesPageContent() {
  const [selectedSpecies, setSelectedSpecies] = useState<'dog' | 'cat' | 'both'>('both');
  
  const dogServices = serviceData.dog;
  const catServices = serviceData.cat;
  const allServices = [...serviceData.dog, ...serviceData.cat, ...serviceData.both];

  const renderServiceCard = (service: ServiceData) => (
    <Card key={service.id} className="h-full hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      {service.popular && (
        <Badge className="absolute top-4 right-4 bg-yellow-500 text-black z-10 animate-pulse">
          <Crown className="h-3 w-3 mr-1" />
          Popular
        </Badge>
      )}
      
      <CardHeader className="pb-4">
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
          <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {service.bullets.map((bullet: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {service.duration}
          </div>
          <div className="flex items-center gap-1 font-bold text-xl text-green-600">
            <IndianRupee className="h-5 w-5" />
            {service.fromPrice}
            <span className="text-sm font-normal text-muted-foreground">from</span>
          </div>
        </div>
        
        <Button asChild className="w-full group-hover:bg-green-700 transition-colors touch-manipulation min-h-[48px]" size="lg">
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
              {allServices.map(renderServiceCard)}
            </div>
          </TabsContent>

          <TabsContent value="dog" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dogServices.map(renderServiceCard)}
            </div>
          </TabsContent>

          <TabsContent value="cat" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catServices.map(renderServiceCard)}
            </div>
          </TabsContent>
        </Tabs>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-muted-foreground">
              We use only pet-safe products and follow strict safety protocols to ensure your pet's well-being.
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Groomers</h3>
            <p className="text-muted-foreground">
              Our certified professionals have years of experience and specialize in different breeds and temperaments.
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Stress-Free Environment</h3>
            <p className="text-muted-foreground">
              We create a calm, comfortable atmosphere to ensure your pet has a positive grooming experience.
            </p>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                What to Expect
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional consultation before service</li>
                <li>• Gentle handling throughout the process</li>
                <li>• Premium pet-safe products</li>
                <li>• Stress-free environment</li>
                <li>• Detailed aftercare instructions</li>
                <li>• Follow-up care recommendations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PawPrint className="h-5 w-5 text-green-600" />
                Before Your Visit
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bring vaccination records</li>
                <li>• Inform us of any medical conditions</li>
                <li>• Let us know about behavioral concerns</li>
                <li>• Arrive 10 minutes early</li>
                <li>• Bring your pet's favorite treats</li>
                <li>• Prepare for 1-3 hours service time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instagram Integration */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Follow Our Work on Instagram</h3>
            <p className="text-muted-foreground">
              See daily transformations, behind-the-scenes moments, and happy pets at @freshandfurryspa
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <a href="https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA==" target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-4 w-4 mr-2" />
                Follow @freshandfurryspa
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}