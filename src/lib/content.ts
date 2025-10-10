// Simple content management without external dependencies

// Basic types for content
export type BranchInfo = {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  googleMapsUrl: string;
  isPrimary: boolean;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  owner: string;
  branches: {
    vashi: BranchInfo;
    nerul: BranchInfo;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
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
    tagline: "Professional Pet Grooming & Spa Services in Vashi & Nerul",
    owner: "Vaibhavi Desai",
    branches: {
      vashi: {
        name: "Fresh & Furry Pet Grooming - Vashi",
        address: "Shop No. 5, Sector 17, Vashi, Navi Mumbai - 400703",
        phone: "+91 9136474141",
        whatsapp: "+91 9136474141",
        email: "vashi@freshandfurry.com",
        hours: {
          "Monday": "Closed",
          "Tuesday - Sunday": "11:00 AM - 7:00 PM"
        },
        googleMapsUrl: "https://maps.google.com/?q=Vashi+Sector+17+Fresh+and+Furry",
        isPrimary: true
      },
      nerul: {
        name: "Fresh & Furry Pet Grooming - Nerul",
        address: "Shop No. 12, Sector 19, Nerul, Navi Mumbai - 400706",
        phone: "+91 9876543210",
        whatsapp: "+91 9876543210",
        email: "nerul@freshandfurry.com",
        hours: {
          "Monday": "Closed",
          "Tuesday - Friday": "10:00 AM - 8:00 PM",
          "Saturday - Sunday": "9:00 AM - 9:00 PM"
        },
        googleMapsUrl: "https://maps.google.com/?q=Nerul+Sector+19+Fresh+and+Furry",
        isPrimary: false
      }
    },
    socials: {
      instagram: "https://www.instagram.com/freshandfurryspa?igsh=MThtYmg3cGt3MTl0NA==",
      facebook: "https://facebook.com/freshandfurry",
      youtube: "https://youtube.com/@freshandfurry"
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
      url: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      title: "Professional Dog Grooming",
      description: "Expert grooming services for dogs of all breeds and sizes",
      species: "dog",
      category: "grooming",
      date: "2024-01-15",
      tags: ["professional", "dog-grooming", "expert"]
    },
    {
      id: "gallery-2",
      type: "image",
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      title: "Cat Grooming Specialist",
      description: "Gentle and stress-free grooming for our feline friends",
      species: "cat",
      category: "grooming",
      date: "2024-01-14",
      tags: ["cat-grooming", "gentle", "stress-free"]
    },
    {
      id: "gallery-3",
      type: "image",
      url: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop",
      title: "Before & After Transformation",
      description: "Amazing transformation of a Golden Retriever after professional grooming",
      species: "dog",
      category: "before-after",
      date: "2024-01-13",
      tags: ["before-after", "transformation", "golden-retriever"]
    },
    {
      id: "gallery-4",
      type: "image",
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      title: "Happy Groomed Dog",
      description: "A satisfied client after their spa treatment",
      species: "dog",
      category: "grooming",
      date: "2024-01-12",
      tags: ["happy", "satisfied", "spa-treatment"]
    },
    {
      id: "gallery-5",
      type: "image",
      url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
      title: "Cat Bath Time",
      description: "Professional cat bathing with specialized techniques",
      species: "cat",
      category: "grooming",
      date: "2024-01-11",
      tags: ["cat-bath", "specialized", "professional"]
    },
    {
      id: "gallery-6",
      type: "image",
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
      title: "Dog Spa Treatment",
      description: "Luxury spa treatment for ultimate pet pampering",
      species: "dog",
      category: "spa",
      date: "2024-01-10",
      tags: ["spa-treatment", "luxury", "pampering"]
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

// Branch helper functions
export function getPrimaryBranch(): BranchInfo {
  const config = getDefaultSiteConfig();
  return config.branches.vashi; // Vashi is the primary branch
}

export function getBranch(branchId: 'vashi' | 'nerul'): BranchInfo {
  const config = getDefaultSiteConfig();
  return config.branches[branchId];
}

export function getAllBranches(): BranchInfo[] {
  const config = getDefaultSiteConfig();
  return [config.branches.vashi, config.branches.nerul];
}