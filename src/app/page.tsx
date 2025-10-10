"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Star, MapPin, Clock, Phone, Mail, CheckCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getSiteConfig, getPrimaryBranch, getAllBranches } from "@/lib/content";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const siteConfig = getSiteConfig();
  const primaryBranch = getPrimaryBranch();
  const allBranches = getAllBranches();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Fresh & Furry</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Pricing</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Gallery</Link>
              <Link href="/reviews" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Reviews</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</Link>
              <Link href="/faq" className="text-gray-700 hover:text-green-600 font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <Button asChild size="sm" className="hidden sm:flex">
                <Link href="/contact">Book Now</Link>
              </Button>
              
                          {/* Mobile Menu Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden touch-manipulation min-h-[44px] min-w-[44px]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                          >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                          </Button>
            </div>
          </div>

                      {/* Mobile Navigation Menu */}
                      {isMobileMenuOpen && (
                        <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
                          <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                              href="/" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Home
                            </Link>
                            <Link 
                              href="/services" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Services
                            </Link>
                            <Link 
                              href="/pricing" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Pricing
                            </Link>
                            <Link 
                              href="/gallery" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Gallery
                            </Link>
                            <Link 
                              href="/reviews" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Reviews
                            </Link>
                            <Link 
                              href="/about" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              About
                            </Link>
                            <Link 
                              href="/faq" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              FAQ
                            </Link>
                            <Link 
                              href="/contact" 
                              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Contact
                            </Link>
                <div className="px-3 py-2">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

                  {/* Hero Section */}
                  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 touch-pan-x touch-pan-y">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-100/50 to-green-100/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
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
                <Button className="w-full touch-manipulation min-h-[44px]">
                  Book This Service
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
                <Button className="w-full touch-manipulation min-h-[44px]">
                  Book This Service
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
                <Button className="w-full touch-manipulation min-h-[44px]">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 touch-pan-x touch-pan-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Book?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us today to schedule your pet's grooming appointment
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Get in Touch</CardTitle>
                <CardDescription className="text-center">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">{primaryBranch.phone}</p>
                    <p className="text-sm text-gray-600">Call us directly</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">{primaryBranch.email}</p>
                    <p className="text-sm text-gray-600">Email us anytime</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">Vashi & Nerul, Navi Mumbai</p>
                    <p className="text-sm text-gray-600">Two convenient locations</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">{primaryBranch.hours["Tuesday - Sunday"]}</p>
                    <p className="text-sm text-gray-600">{primaryBranch.hours["Monday"]}</p>
                  </div>
                </div>

                <div className="pt-4">
                <Button asChild size="lg" className="w-full touch-manipulation min-h-[48px]">
                  <Link href="/contact">
                    Book Your Appointment
                  </Link>
                </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">Fresh & Furry</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional pet grooming services in Vashi & Nerul, Navi Mumbai. 
                Making your furry friends look and feel their best.
              </p>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9/5 (127+ Reviews)</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">Dog Grooming</Link></li>
                <li><Link href="/services" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">Cat Grooming</Link></li>
                <li><Link href="/services" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">Spa Treatments</Link></li>
                <li><Link href="/services" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">Nail Care</Link></li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <a 
                  href="https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA==" 
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @freshandfurryspa
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">About Us</Link></li>
                <li><Link href="/gallery" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">Gallery</Link></li>
                <li><Link href="/reviews" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">Reviews</Link></li>
                <li><Link href="/faq" className="hover:text-white touch-manipulation min-h-[32px] flex items-center">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Vashi & Nerul, Navi Mumbai
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {primaryBranch.phone} (Vashi)
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {primaryBranch.email}
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Tue-Sun: 11AM-7PM (Mon Closed)
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Fresh & Furry Pet Grooming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
