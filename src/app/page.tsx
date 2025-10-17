import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Star, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-100/50 to-green-100/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/fresh&furry.png"
                alt="Fresh & Furry The Ethical Pet Spa"
                width={120}
                height={60}
                className="h-24 w-auto"
                priority
              />
            </div>
            
            <Badge variant="secondary" className="mb-6 bg-white/20 text-gray-800 border-white/30">
              <Star className="h-3 w-3 mr-1" />
              Vashi's #1 Pet Grooming Service
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Professional Pet Grooming
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              We built Fresh and Furry with one goal — to provide pets with a clean, safe, and stress-free grooming experience filled with love and comfort. Every service we offer is designed keeping your pet's hygiene, safety, and happiness in mind, because we truly believe they deserve nothing but the best.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
              <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px] bg-green-600 hover:bg-green-700 text-white font-semibold touch-manipulation min-h-[48px]">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <PawPrint className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] border-gray-300 text-gray-700 hover:bg-white/80 touch-manipulation min-h-[48px]">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-600 px-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Vashi, Navi Mumbai</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                <span>4.9/5 (127+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <PawPrint className="h-4 w-4 flex-shrink-0" />
                <span>Dogs & Cats Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Premium Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Professional grooming services tailored for dogs and cats. 
              From basic baths to full spa treatments, we've got your furry friend covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PawPrint className="h-5 w-5 text-blue-600" />
                  Only Bath
                </CardTitle>
                <CardDescription>
                  Complete bath with premium shampoo, conditioner and blow dry.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Premium pet-safe shampoo
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Conditioner
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional blow dry with brush-out
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    From ₹1000
                  </div>
                </div>
                <Button asChild className="w-full touch-manipulation min-h-[44px]">
                  <Link href="/contact">Book This Service</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PawPrint className="h-5 w-5 text-purple-600" />
                  Full Grooming
                </CardTitle>
                <CardDescription>
                  Complete grooming package including bath, haircut, nail trimming and styling for the perfect look.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Bath, conditioner & blow dry
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional haircut & styling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Nail trimming & filing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ear cleaning
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Teeth brushing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Sanitary trim
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    From ₹2200
                  </div>
                </div>
                <Button asChild className="w-full touch-manipulation min-h-[44px]">
                  <Link href="/contact">Book This Service</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PawPrint className="h-5 w-5 text-green-600" />
                  Ayurvedic Spa
                </CardTitle>
                <CardDescription>
                  Luxury premium Ayurvedic spa with Ayurvedic mud pack and relaxing massage for ultimate pampering.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ayurvedic mud pack
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Relaxing massage
          </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ayurvedic shampoo
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Blow dry
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ear cleaning
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Nail trimming / filing
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Teeth brushing
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Sanitary clipping
          </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-600">
                    From ₹1500
                  </div>
                </div>
                <Button asChild className="w-full touch-manipulation min-h-[44px]">
                  <Link href="/contact">Book This Service</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}
