import { z } from 'zod';

// Phone number validation for Indian numbers
export const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;

export const normalizePhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return `+${cleaned}`;
  }
  if (cleaned.length === 10) {
    return `+91${cleaned}`;
  }
  return phone;
};

// Site Configuration Schema
export const siteConfigSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  email: z.string().email(),
  hours: z.object({
    mondayToFriday: z.string(),
    saturday: z.string(),
    sunday: z.string(),
  }),
  socials: z.object({
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
  }),
});

// Service Schema
export const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  duration: z.string(),
  price: z.string(),
  category: z.enum(['grooming', 'spa', 'health', 'special']),
  features: z.array(z.string()),
  image: z.string().optional(),
});

// Staff Member Schema
export const staffMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  experience: z.string(),
  specialties: z.array(z.string()),
  photo: z.string(),
  socials: z.object({
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
  }).optional(),
});

// Testimonial Schema
export const testimonialSchema = z.object({
  id: z.string(),
  customerName: z.string(),
  petName: z.string(),
  petType: z.string(),
  rating: z.number().min(1).max(5),
  review: z.string(),
  date: z.string(),
  verified: z.boolean().optional(),
  helpful: z.number().optional(),
  images: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
});

// Featured Item Schema
export const featuredItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string().optional(),
  category: z.string(),
  featured: z.boolean().optional(),
});

// Gallery Item Schema
export const galleryItemSchema = z.object({
  id: z.string(),
  type: z.enum(['image', 'video']),
  url: z.string(),
  title: z.string(),
  description: z.string(),
  species: z.enum(['dog', 'cat', 'both']),
  category: z.enum(['before-after', 'grooming', 'spa', 'facility']),
  date: z.string(),
  tags: z.array(z.string()),
});

// FAQ Item Schema
export const faqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.string().optional(),
});


// Booking Form Schema
export const bookingFormSchema = z.object({
  petName: z.string().min(1, "Pet name is required"),
  petType: z.enum(['dog', 'cat']).refine(val => val === 'dog' || val === 'cat', {
    message: "Please select pet type",
  }),
  breed: z.string().min(1, "Breed is required"),
  size: z.enum(['small', 'medium-large', 'large']),
  age: z.string().min(1, "Age is required"),
  service: z.string().min(1, "Service is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number").optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required").optional(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type StaffMember = z.infer<typeof staffMemberSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type FeaturedItem = z.infer<typeof featuredItemSchema>;
export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type FAQItem = z.infer<typeof faqItemSchema>;
export type BookingForm = z.infer<typeof bookingFormSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type Newsletter = z.infer<typeof newsletterSchema>;
