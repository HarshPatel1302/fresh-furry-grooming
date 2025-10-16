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
              Hi, I’m Vaibhavi a professional pet groomer and the owner of Fresh and Furry Pet Salon. Growing up, I was always surrounded by pets and their unconditional love. Though I graduated in fashion designing and started my career there, I soon realized my heart belonged somewhere else — with animals.
              </p>
              <p className="text-lg text-gray-700 mb-8">
              I wanted to do something that truly made me happy, and that's how my grooming journey began. Over time, I developed a special love for cat grooming, all thanks to my cat, Pillu. He taught me everything about understanding and caring for cats, and even though he's no longer with me, a part of him lives on in every cat I groom. For me, grooming isn't just about looks — it's about comfort, care, and love. Every pet deserves to be treated with kindness and affection, and that's the heart behind everything I do at Fresh and Furry The Ethical Pet Spa.
              </p>
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
              I’m Jyoti, the founder of Fresh and Furry. I originally worked in the IT sector, but after getting my dog, Bunny, I realized my true passion was with pets. I wanted to give Bunny the best care possible, so I decided to learn professional grooming. I earned my certification in Bangalore and learned everything I needed to care for him.
              </p>
              <p className="text-lg text-gray-700 mb-8">
              Following my heart, I started Fresh and Furry, and over the past 9 years, I’ve groomed countless pets. Every day I get to work with animals I love is a blessing, and I genuinely enjoy every moment of grooming. For me, it’s not just about making pets look good — it’s about making them feel comfortable, cared for, and happy. Seeing a pet relaxed, happy, and safe in my hands is the greatest reward, and it motivates me to give my very best in everything I do.
              </p>
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
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our vision is to create a place where every pet owner feels completely confident leaving their beloved fur babies in caring, loving, and professional hands. We aim to provide more than just grooming — we want every pet to experience comfort, affection, and genuine care, making every visit a happy and stress-free experience for both pets and their owners.
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
