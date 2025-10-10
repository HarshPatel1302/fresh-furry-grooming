export interface SiteConfig {
  name: string;
  tagline: string;
  address: string;
  hours: {
    [key: string]: string;
  };
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface Service {
  id: string;
  species: 'dog' | 'cat' | 'both';
  title: string;
  description: string;
  bullets: string[];
  duration: string;
  fromPrice: number;
  popular?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  fromPrice: number;
  description: string;
  includes: string[];
}

export interface PricingConfig {
  dogs: {
    [key: string]: PricingTier;
  };
  cats: {
    [key: string]: PricingTier;
  };
  addOns: {
    id: string;
    name: string;
    price: number;
    species: 'dog' | 'cat' | 'both';
  }[];
  combos: {
    id: string;
    name: string;
    description: string;
    originalPrice: number;
    discountedPrice: number;
    includes: string[];
  }[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  experience?: string;
  specialties?: string[];
  socials?: {
    instagram?: string;
    facebook?: string;
  };
}

export interface FeaturedItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  cloudinaryId?: string;
  title?: string;
  description?: string;
  species?: 'dog' | 'cat' | 'both';
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: 'google' | 'facebook' | 'instagram' | 'direct';
  petName?: string;
  service?: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  cloudinaryId?: string;
  title?: string;
  description?: string;
  species: 'dog' | 'cat' | 'both';
  category: 'grooming' | 'before-after' | 'spa' | 'staff' | 'facility';
  date: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'safety' | 'booking';
}

export interface BookingFormData {
  petType: 'dog' | 'cat';
  breed: string;
  petName: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  ownerName: string;
  phone: string;
  email?: string;
  notes?: string;
  source: 'website';
  createdAt: string;
}
