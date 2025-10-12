import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PawPrint } from "lucide-react";
import Image from "next/image";


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
              providing professional grooming services in Vashi. We believe every pet 
              deserves to look and feel their absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Vaibhavi Desai
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
                  src="/IMG-20251012-WA0008.jpg"
                  alt="Our grooming facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Jyoti Iyer
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We envision a future where every pet receives the highest quality grooming care in a safe, 
                comfortable, and loving environment. Our goal is to set the standard for ethical pet grooming 
                practices in our community and beyond.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Through continuous innovation, education, and compassionate service, we aim to strengthen 
                the bond between pets and their families while ensuring every furry friend looks and feels their absolute best.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Expanding our services to reach more pet families</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Training the next generation of professional groomers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Advancing pet grooming industry standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Creating a community hub for pet lovers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
                <Image
                  src="/IMG-20251012-WA0003.jpg"
                  alt="Our vision for pet care"
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

    </div>
  );
}
