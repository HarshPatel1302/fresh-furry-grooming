"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Search, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// FAQ data organized by categories
const faqData = [
  {
    category: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer a full range of pet grooming services including baths, haircuts, nail trimming, ear cleaning, teeth brushing, and specialized treatments like deshedding and flea treatments. We also provide spa services like aromatherapy and paw treatments."
      },
      {
        question: "Do you groom both dogs and cats?",
        answer: "Yes! We specialize in grooming both dogs and cats. Our team has specific expertise in feline grooming techniques that ensure a stress-free experience for cats, while also providing excellent care for dogs of all breeds and sizes."
      },
      {
        question: "What are your operating hours?",
        answer: "We're open Monday through Friday from 9:00 AM to 7:00 PM, and Saturday from 9:00 AM to 6:00 PM. We're closed on Sundays to give our team a well-deserved break."
      },
      {
        question: "Do I need to make an appointment?",
        answer: "Yes, we recommend making appointments in advance to ensure we can accommodate your pet at your preferred time. You can book online through our website or call us directly at +91-98765-43210."
      }
    ]
  },
  {
    category: "Booking & Appointments",
    icon: Phone,
    questions: [
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking 3-5 days in advance, especially during peak seasons like holidays and summer. For regular clients, we can often accommodate same-week appointments."
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        answer: "Yes, you can cancel or reschedule your appointment up to 24 hours in advance without any charges. Cancellations within 24 hours may be subject to a cancellation fee."
      },
      {
        question: "What happens if I'm late for my appointment?",
        answer: "We understand that delays happen. If you're running late, please call us as soon as possible. We'll do our best to accommodate you, but we may need to reschedule if it significantly impacts other appointments."
      },
      {
        question: "Do you offer emergency grooming services?",
        answer: "While we don't offer emergency grooming services, we can often accommodate urgent situations like medical grooming needs or special events. Please call us to discuss your specific situation."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: MessageCircle,
    questions: [
      {
        question: "How much does grooming cost?",
        answer: "Our pricing varies based on your pet's size, breed, coat condition, and the services requested. Basic grooming starts at ₹800 for small dogs and ₹600 for cats. Please check our pricing page or call us for a personalized quote."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, credit/debit cards, UPI payments, and digital wallets. Payment is due at the time of service completion."
      },
      {
        question: "Do you offer package deals or memberships?",
        answer: "Yes! We offer grooming packages for regular customers and loyalty programs. Ask our staff about our monthly packages and special discounts for multiple pets."
      },
      {
        question: "Are there any additional fees?",
        answer: "Additional fees may apply for severely matted coats (requires extra time and care), aggressive pets requiring special handling, or pets that need multiple sessions to complete the grooming process."
      }
    ]
  },
  {
    category: "Pet Care & Safety",
    icon: HelpCircle,
    questions: [
      {
        question: "What if my pet is anxious or aggressive?",
        answer: "Our experienced team is trained to handle anxious and aggressive pets with patience and care. We use calming techniques and may recommend shorter sessions or sedatives (with vet approval) for extremely anxious pets."
      },
      {
        question: "Do you require vaccination records?",
        answer: "Yes, we require current vaccination records for all pets. This helps us maintain a safe environment for all our furry clients. Please bring your pet's vaccination certificate."
      },
      {
        question: "What products do you use?",
        answer: "We use only high-quality, pet-safe grooming products from reputable brands. All our shampoos, conditioners, and treatments are specifically formulated for pets and free from harsh chemicals."
      },
      {
        question: "How do you ensure my pet's safety?",
        answer: "Pet safety is our top priority. We have safety protocols in place, use proper restraint techniques, maintain clean and sanitized equipment, and our staff is trained in pet first aid and emergency procedures."
      }
    ]
  },
  {
    category: "Special Services",
    icon: HelpCircle,
    questions: [
      {
        question: "Do you groom senior pets?",
        answer: "Absolutely! We have special care protocols for senior pets, including gentler handling, shorter sessions, and accommodations for mobility issues or health conditions. We work closely with you to ensure your senior pet's comfort."
      },
      {
        question: "Can you handle matted coats?",
        answer: "Yes, we can work with matted coats, though severely matted coats may require multiple sessions or in extreme cases, a complete shave. We'll always discuss the best approach with you before proceeding."
      },
      {
        question: "Do you offer pick-up and drop-off services?",
        answer: "Currently, we don't offer pick-up and drop-off services, but we're considering adding this service in the future. For now, you'll need to bring your pet to our facility."
      },
      {
        question: "Can you accommodate pets with special needs?",
        answer: "Yes, we're experienced in working with pets that have special needs, including those with disabilities, medical conditions, or behavioral issues. Please let us know about any special requirements when booking."
      }
    ]
  }
];

export function FAQPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter FAQs based on search query and category
  const filteredFAQs = faqData
    .filter(category => selectedCategory === "all" || category.category === selectedCategory)
    .map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our pet grooming services. 
            Can't find what you're looking for? Feel free to contact us!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All Categories
          </Button>
          {faqData.map((category) => (
            <Button
              key={category.category}
              variant={selectedCategory === category.category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.category)}
              className="flex items-center gap-2"
            >
              <category.icon className="h-4 w-4" />
              {category.category}
            </Button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or category filter.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us Instead</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredFAQs.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <category.icon className="h-5 w-5" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.category}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Popular Questions Quick Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "How much does grooming cost?",
              "Do you groom cats?",
              "What if my pet is anxious?",
              "How long does grooming take?",
              "Do you require vaccinations?",
              "Can I watch my pet being groomed?"
            ].map((question) => (
              <Button
                key={question}
                variant="outline"
                className="h-auto p-4 text-left justify-start"
                onClick={() => setSearchQuery(question.split('?')[0])}
              >
                <ChevronDown className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">{question}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our friendly team is here to help! Contact us directly for personalized answers 
                to your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+919876543210">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Tips for Pet Owners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Regular Brushing",
                tip: "Brush your pet weekly to prevent matting and reduce shedding",
                icon: "🪥"
              },
              {
                title: "Nail Trimming",
                tip: "Trim nails every 2-3 weeks to prevent overgrowth and discomfort",
                icon: "✂️"
              },
              {
                title: "Ear Cleaning",
                tip: "Check and clean ears weekly to prevent infections",
                icon: "👂"
              },
              {
                title: "Dental Care",
                tip: "Brush teeth regularly and provide dental chews for oral health",
                icon: "🦷"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">{tip.icon}</div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
