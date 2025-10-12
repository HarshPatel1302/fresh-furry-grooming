import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Star, MapPin, Clock, Phone, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPrimaryBranch } from "@/lib/content";
import { CONTACT_PHONES } from "@/lib/contact";

export default function Home() {
  const primaryBranch = getPrimaryBranch();

  return (
    <div className="min-h-screen">

                  {/* Hero Section */}
                  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 touch-pan-x touch-pan-y">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-100/50 to-green-100/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.svg"
                alt="Fresh & Furry The Ethical Pet Spa"
                width={300}
                height={150}
                className="h-32 w-auto sm:h-36 md:h-40"
                priority
              />
            </div>
            
            <Badge variant="secondary" className="mb-6 bg-white/20 text-gray-800 border-white/30">
              <Star className="h-3 w-3 mr-1" />
              Vashi's #1 Pet Grooming Service
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Professional Pet Grooming
              <span className="block text-green-600">Made Simple</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Transform your furry friend with our expert grooming services. 
              Certified professionals, premium products, and a stress-free experience.
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
                  <section className="py-12 sm:py-16 bg-white touch-pan-x touch-pan-y">
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
                  Bath & Blow Dry
                </CardTitle>
                <CardDescription>
                  Complete bath with premium shampoo, conditioner, and professional blow dry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Premium pet-safe shampoo & conditioner
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional blow dry with brush-out
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ear cleaning included
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    60-90 minutes
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    From ₹800
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
                  Full Groom
                </CardTitle>
                <CardDescription>
                  Complete grooming package including bath, haircut, styling, and finishing touches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Bath & blow dry
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional haircut & styling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Nail trimming & filing
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    2-3 hours
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    From ₹1500
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
                  Spa Package
                </CardTitle>
                <CardDescription>
                  Luxury spa experience with premium treatments for ultimate pampering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Full groom or bath
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Aromatherapy treatment
          </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Blueberry facial
          </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    3-4 hours
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    From ₹2500
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
