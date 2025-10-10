// Simple content management without external dependencies

// Basic types for content
export type SiteConfig = {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    mondayToFriday: string;
    saturday: string;
    sunday: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
};

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: 'grooming' | 'spa' | 'health' | 'special';
  features: string[];
  image?: string;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  photo: string;
  socials?: {
    instagram?: string;
    facebook?: string;
  };
};

export type Testimonial = {
  id: string;
  customerName: string;
  petName: string;
  petType: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
  helpful?: number;
  images?: string[];
  services?: string[];
};

export type FeaturedItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string;
  featured?: boolean;
};

export type GalleryItem = {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
  species: 'dog' | 'cat' | 'both';
  category: 'before-after' | 'grooming' | 'spa' | 'facility';
  date: string;
  tags: string[];
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

// Default content
function getDefaultSiteConfig(): SiteConfig {
  return {
    name: "Fresh & Furry Pet Grooming",
    tagline: "Professional pet grooming and spa services in Vashi, Navi Mumbai.",
    address: "Shop No. 5, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 9136474141",
    email: "hello@freshandfurry.com",
    hours: {
      mondayToFriday: "Closed on Monday, Tuesday-Friday: 11:00 AM - 7:00 PM",
      saturday: "11:00 AM - 7:00 PM",
      sunday: "11:00 AM - 7:00 PM"
    },
    socials: {
      instagram: "https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA==",
    },
  };
}

function getDefaultServices(): Service[] {
  return [
    {
      id: "dog-basic-bath",
      name: "Basic Bath & Blow Dry",
      description: "Complete bath with premium shampoo, conditioner, and professional blow dry for dogs of all sizes.",
      duration: "60-90 minutes",
      price: "₹800",
      category: "grooming",
      features: [
        "Premium pet-safe shampoo & conditioner",
        "Professional blow dry with brush-out",
        "Ear cleaning included",
        "Paw pad cleaning",
        "Coat conditioning treatment"
      ]
    },
    {
      id: "cat-basic-bath",
      name: "Cat Bath & Dry",
      description: "Gentle bath service designed specifically for cats with stress-free techniques and premium products.",
      duration: "45-60 minutes",
      price: "₹600",
      category: "grooming",
      features: [
        "Cat-specific gentle shampoo",
        "Stress-free bathing technique",
        "Professional blow dry",
        "Ear cleaning",
        "Calming pheromones"
      ]
    }
  ];
}

function getDefaultStaff(): StaffMember[] {
  return [
    {
      id: "vaibhavi-desai",
      name: "Vaibhavi Desai",
      role: "Head Groomer & Owner",
      photo: "/placeholders/staff-vaibhavi.svg",
      bio: "With over 8 years of experience in pet grooming, Vaibhavi founded Fresh & Furry with a vision to provide compassionate, professional grooming services.",
      experience: "8+ years",
      specialties: ["Breed-specific cuts", "Anxiety management", "Senior pet care", "Show dog preparation"],
      socials: {
        instagram: "https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA=="
      }
    }
  ];
}

function getDefaultTestimonials(): Testimonial[] {
  return [
    {
      id: "testimonial-1",
      customerName: "Rajesh Kumar",
      petName: "Buddy",
      petType: "Golden Retriever",
      rating: 5,
      review: "Excellent service! My dog Buddy looks amazing after his grooming session. The staff is very professional and caring.",
      date: "2024-01-15",
      verified: true,
      helpful: 12,
      services: ["Full Grooming Package"]
    }
  ];
}

function getDefaultFeatured(): FeaturedItem[] {
  return [
    {
      id: "featured-1",
      title: "New Client Special",
      description: "Get 20% off your first grooming appointment!",
      image: "/placeholders/featured-1.svg",
      category: "promotion",
      featured: true
    }
  ];
}

function getDefaultGallery(): GalleryItem[] {
  return [
    {
      id: "gallery-1",
      type: "image",
      url: "/placeholders/before-after-1.svg",
      title: "Before & After Transformation",
      description: "Amazing transformation of a Golden Retriever",
      species: "dog",
      category: "before-after",
      date: "2024-01-15",
      tags: ["transformation", "golden retriever", "grooming"]
    }
  ];
}

function getDefaultFAQ(): FAQItem[] {
  return [
    {
      id: "faq-1",
      question: "What services do you offer?",
      answer: "We offer a full range of pet grooming services including baths, haircuts, nail trimming, ear cleaning, teeth brushing, and specialized treatments like deshedding and flea treatments.",
      category: "services"
    }
  ];
}

// Export functions
export function getSiteConfig(): SiteConfig {
  return getDefaultSiteConfig();
}

export function getServices(): Service[] {
  return getDefaultServices();
}

export function getServicesBySpecies(species: 'dog' | 'cat' | 'both'): Service[] {
  const services = getDefaultServices();
  if (species === 'both') return services;
  return services.filter(service => 
    service.name.toLowerCase().includes(species)
  );
}

export function getStaff(): StaffMember[] {
  return getDefaultStaff();
}

export function getTestimonials(): Testimonial[] {
  return getDefaultTestimonials();
}

export function getFeatured(): FeaturedItem[] {
  return getDefaultFeatured();
}

export function getGallery(): GalleryItem[] {
  return getDefaultGallery();
}

export function getFAQ(): FAQItem[] {
  return getDefaultFAQ();
}

export function getFAQByCategory(category: string): FAQItem[] {
  return getDefaultFAQ().filter(item => item.category === category);
}