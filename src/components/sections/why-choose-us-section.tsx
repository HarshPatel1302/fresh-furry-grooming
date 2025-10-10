import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Award, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Groomers",
    description: "Our team consists of certified, experienced professionals with specialized training in pet grooming and animal behavior."
  },
  {
    icon: Heart,
    title: "Gentle Handling",
    description: "We use stress-free techniques and positive reinforcement to ensure your pet feels comfortable and safe throughout the process."
  },
  {
    icon: Shield,
    title: "Hygienic Spa Environment",
    description: "Our facility follows strict hygiene protocols with sanitized equipment, clean water, and premium pet-safe products."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear pricing upfront and detailed service descriptions for every treatment."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Fresh & Furry?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing the best possible care for your beloved pets 
            with a focus on safety, comfort, and exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
