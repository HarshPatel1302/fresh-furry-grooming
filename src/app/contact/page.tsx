import { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, MessageCircle, Star, Instagram } from "lucide-react";
import Link from "next/link";
import { getSiteConfig, getAllBranches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book Appointment - Contact Us",
  description: "Book your pet's grooming appointment with Fresh & Furry. Professional grooming services for dogs and cats in Vashi, Navi Mumbai.",
};

export default function ContactPage() {
  const siteConfig = getSiteConfig();
  const allBranches = getAllBranches();
  
  return (
    <div className="min-h-screen py-12 sm:py-16 touch-pan-x touch-pan-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Book Your Pet's Appointment
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to give your furry friend the pampering they deserve? 
            Book an appointment with our professional groomers today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Booking Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Book Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Locations Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {allBranches.map((branch) => (
                  <div key={branch.name} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={branch.isPrimary ? "default" : "secondary"}>
                        {branch.isPrimary ? "Primary" : "Branch"}
                      </Badge>
                      <h3 className="font-semibold">{branch.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {branch.address}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="h-4 w-4 text-green-600" />
                      <a href={`tel:${branch.phone}`} className="text-green-600 hover:text-green-700 font-medium">
                        {branch.phone}
                      </a>
                    </div>
                    <Link 
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      <MapPin className="h-4 w-4" />
                      View on Google Maps
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Details Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Primary Phone (Vashi)</p>
                    <a href={`tel:${allBranches[0].phone}`} className="text-green-600 hover:text-green-700">
                      {allBranches[0].phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Branch Phone (Nerul)</p>
                    <a href={`tel:${allBranches[1].phone}`} className="text-green-600 hover:text-green-700">
                      {allBranches[1].phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${allBranches[0].email}`} className="text-green-600 hover:text-green-700">
                      {allBranches[0].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a 
                      href={siteConfig.socials.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      @freshandfurryspa
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {allBranches.map((branch) => (
                  <div key={branch.name} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">{branch.name}</h3>
                    <div className="space-y-2">
                      {Object.entries(branch.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="text-muted-foreground">{day}</span>
                          <span className={`font-medium ${hours === 'Closed' ? 'text-red-600' : ''}`}>
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> We recommend booking appointments 24-48 hours in advance 
                    to ensure availability, especially for weekend slots.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  Customer Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5</span>
                  <span className="text-muted-foreground">(127+ reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Excellent service! My dog looks amazing after his grooming session. 
                  The staff is very professional and caring." - Rajesh K.
                </p>
                <div className="mt-3">
                  <Link 
                    href="/reviews" 
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Read all reviews →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-3">
                For grooming emergencies or urgent appointments, please call us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`tel:${allBranches[0].phone}`} 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Vashi: {allBranches[0].phone}
                </a>
                <a 
                  href={`tel:${allBranches[1].phone}`} 
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Nerul: {allBranches[1].phone}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}