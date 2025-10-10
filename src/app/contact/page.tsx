import { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, MessageCircle, Star, Instagram } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Appointment - Contact Us",
  description: "Book your pet's grooming appointment with Fresh & Furry. Professional grooming services for dogs and cats in Vashi, Navi Mumbai.",
};

export default function ContactPage() {
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
            {/* Location Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Shop No. 5, Sector 17, Vashi<br />
                  Navi Mumbai, Maharashtra 400703
                </p>
                <Badge variant="outline" className="mb-4">
                  📍 Near Vashi Railway Station
                </Badge>
                <div className="mt-4">
                  <Link 
                    href="https://maps.google.com/?q=Shop+No.+5,+Sector+17,+Vashi,+Navi+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <MapPin className="h-4 w-4" />
                    View on Google Maps
                  </Link>
                </div>
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
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919876543210" className="text-green-600 hover:text-green-700">
                      +91-98765-43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@freshandfurry.com" className="text-green-600 hover:text-green-700">
                      hello@freshandfurry.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a 
                      href="https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA==" 
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
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
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
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now: +91-98765-43210
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}