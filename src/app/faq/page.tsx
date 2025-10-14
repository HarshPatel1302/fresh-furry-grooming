import { Metadata } from "next";
import { FAQPageContent } from "@/components/sections/faq-page-content";
import { FAQPageJSONLD } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Get answers to common questions about pet grooming services, pricing, booking, and more at Fresh & Furry Pet Grooming in Vashi.",
};

export default function FAQPage() {
  const faqData = [
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
      question: "How much does grooming cost?",
      answer: "Our pricing varies based on your pet's size, breed, coat condition, and the services requested. Only Bath starts at ₹1000 for small dogs and cats, while Full Grooming packages start at ₹2400 for small dogs. Please check our services page or call us for a personalized quote."
    }
  ];

  return (
    <>
      <FAQPageJSONLD questions={faqData} />
      <FAQPageContent />
    </>
  );
}
