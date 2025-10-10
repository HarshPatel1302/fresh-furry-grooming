import { z } from 'zod';

export const siteConfigSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  address: z.string(),
  hours: z.record(z.string(), z.string()),
  contacts: z.object({
    phone: z.string(),
    whatsapp: z.string(),
    email: z.string().email(),
  }),
  socials: z.object({
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    youtube: z.string().optional(),
  }),
});

export const serviceSchema = z.object({
  id: z.string(),
  species: z.enum(['dog', 'cat', 'both']),
  title: z.string(),
  description: z.string(),
  bullets: z.array(z.string()),
  duration: z.string(),
  fromPrice: z.number(),
  popular: z.boolean().optional(),
});

export const staffMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  photo: z.string(),
  bio: z.string(),
  experience: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  socials: z.object({
    instagram: z.string().optional(),
    facebook: z.string().optional(),
  }).optional(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  text: z.string(),
  rating: z.number().min(1).max(5),
  source: z.enum(['google', 'facebook', 'instagram', 'direct']),
  petName: z.string().optional(),
  service: z.string().optional(),
  date: z.string(),
});

export const featuredItemSchema = z.object({
  id: z.string(),
  type: z.enum(['image', 'video']),
  url: z.string(),
  cloudinaryId: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  species: z.enum(['dog', 'cat', 'both']).optional(),
  date: z.string(),
});

export const galleryItemSchema = z.object({
  id: z.string(),
  type: z.enum(['image', 'video']),
  url: z.string(),
  cloudinaryId: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  species: z.enum(['dog', 'cat', 'both']),
  category: z.enum(['grooming', 'before-after', 'spa', 'staff', 'facility']),
  date: z.string(),
  tags: z.array(z.string()),
});

export const faqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.enum(['general', 'services', 'pricing', 'safety', 'booking']),
});

export const bookingFormSchema = z.object({
  petType: z.enum(['dog', 'cat']),
  breed: z.string().min(1, 'Breed is required'),
  petName: z.string().min(1, 'Pet name is required'),
  service: z.string().min(1, 'Service is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  ownerName: z.string().min(2, 'Owner name must be at least 2 characters'),
  phone: z.string().regex(/^(\+91|0)?[6-9]\d{9}$/, 'Invalid Indian phone number'),
  email: z.string().email().optional().or(z.literal('')),
  notes: z.string().optional(),
});

export const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;

export function normalizePhoneNumber(phone: string): string {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Convert to E.164 format
  if (cleaned.startsWith('+91')) {
    return cleaned;
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    return `+${cleaned}`;
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    return `+91${cleaned.substring(1)}`;
  } else if (cleaned.length === 10) {
    return `+91${cleaned}`;
  }
  
  return phone; // Return original if can't normalize
}
