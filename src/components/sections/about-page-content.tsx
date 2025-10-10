import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Award, Star, Instagram, Facebook, PawPrint, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sample team data
const teamMembers = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Head Groomer & Owner",
    photo: "/placeholders/staff-priya.svg",
    bio: "With over 8 years of experience in pet grooming, Priya founded Fresh & Furry with a vision to provide compassionate, professional grooming services. She specializes in breed-specific cuts and has a gentle approach that makes even the most anxious pets feel comfortable.",
    experience: "8+ years",
    specialties: ["Breed-specific cuts", "Anxiety management", "Senior pet care", "Show dog preparation"],
    socials: {
      instagram: "https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA=="
    }
  },
  {
    id: "rahul-patel",
    name: "Rahul Patel",
    role: "Senior Groomer",
    photo: "/placeholders/staff-rahul.svg",
    bio: "Rahul brings 5 years of expertise in dog grooming and is particularly skilled with large breeds. His calm demeanor and patient approach make him a favorite among our canine clients. He's also our go-to person for nail trimming and ear cleaning.",
    experience: "5+ years",
    specialties: ["Large breed grooming", "Nail care specialist", "Ear cleaning expert", "Deshedding treatments"]
  },
  {
    id: "sneha-desai",
    name: "Sneha Desai",
    role: "Cat Specialist & Groomer",
    photo: "/placeholders/staff-sneha.svg",
    bio: "Sneha is our resident cat whisperer with 4 years of specialized feline grooming experience. She understands the unique needs of cats and uses stress-free techniques to ensure a positive grooming experience for our feline friends.",
    experience: "4+ years",
    specialties: ["Cat grooming specialist", "Stress-free techniques", "Long-haired cat care", "Feline behavior expert"],
    socials: {
      instagram: "https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA=="
    }
  }
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every pet with love, patience, and understanding, ensuring they feel safe and comfortable throughout their grooming experience."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your pet's safety is our top priority. We use only pet-safe products and follow strict hygiene protocols in our clean, sanitized facility."
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Our certified groomers stay updated with the latest techniques and industry best practices to deliver exceptional results every time."
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    description: "We're committed to exceeding your expectations with personalized service, transparent communication, and outstanding results."
  }
];

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "1000+", label: "Pets Groomed" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "3", label: "Years in Business" }
];

export function AboutPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 sm:mb-6 bg-white/20 text-gray-800 border-white/30 text-xs sm:text-sm">
              <PawPrint className="h-3 w-3 mr-1" />
              About Fresh & Furry
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our Story of
              <span className="block text-green-600">Pet Care Excellence</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 px-4">
              Founded with a passion for pets and a commitment to excellence, Fresh & Furry has been 
              providing professional grooming services in Vashi since 2021. We believe every pet 
              deserves to look and feel their absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Fresh & Furry, our mission is simple: to provide exceptional pet grooming services 
                that prioritize the health, comfort, and happiness of every pet that walks through our doors.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe that grooming is more than just making pets look good – it's about their 
                overall well-being, hygiene, and the special bond between pets and their families.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Using only premium, pet-safe products</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Maintaining the highest hygiene standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Providing stress-free grooming experiences</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Building lasting relationships with pet families</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <Image
                  src="/placeholders/staff-priya.svg"
                  alt="Our grooming facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at Fresh & Furry, from how we care for your pets 
              to how we interact with you as our valued customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Our experienced and passionate team of professional groomers is dedicated to providing 
              the best care for your beloved pets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                    <Badge variant="secondary" className="mt-2">
                      {member.experience} Experience
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {member.socials && (
                    <div className="flex gap-2">
                      {member.socials.instagram && (
                        <Button asChild variant="outline" size="sm">
                          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.socials.facebook && (
                        <Button asChild variant="outline" size="sm">
                          <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Meet Our Team?
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Book an appointment today and experience the Fresh & Furry difference. 
              Your pet will thank you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Facility</h2>
              <p className="text-lg text-gray-700 mb-6">
                Located in the heart of Vashi, our modern grooming facility is designed with your pet's 
                comfort and safety in mind. We maintain the highest standards of cleanliness and hygiene.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Shop No. 5, Sector 17, Vashi, Navi Mumbai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Monday - Friday: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>+91-98765-43210</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <Image
                  src="/placeholders/staff-rahul.svg"
                  alt="Our facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
