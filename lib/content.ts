import fs from 'fs';
import path from 'path';
import { 
  siteConfigSchema, 
  serviceSchema, 
  staffMemberSchema, 
  testimonialSchema, 
  featuredItemSchema, 
  galleryItemSchema, 
  faqItemSchema 
} from './validations';

type SiteConfig = z.infer<typeof siteConfigSchema>;
type Service = z.infer<typeof serviceSchema>;
type StaffMember = z.infer<typeof staffMemberSchema>;
type Testimonial = z.infer<typeof testimonialSchema>;
type FeaturedItem = z.infer<typeof featuredItemSchema>;
type GalleryItem = z.infer<typeof galleryItemSchema>;
type FAQItem = z.infer<typeof faqItemSchema>;

import { z } from 'zod';

const contentDir = path.join(process.cwd(), 'content');

function readJsonFile<T>(filename: string, schema: z.ZodSchema<T>): T {
  try {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    return schema.parse(data);
  } catch (error) {
    console.warn(`Failed to read ${filename}, using defaults:`, error);
    return getDefaultContent(filename, schema);
  }
}

function getDefaultContent<T>(filename: string, schema: z.ZodSchema<T>): T {
  // Return safe defaults for each content type
  switch (filename) {
    case 'site.json':
      return {
        name: 'Fresh & Furry Pet Grooming',
        tagline: 'Professional Pet Grooming & Spa Services in Vashi',
        address: 'Vashi, Navi Mumbai, Maharashtra',
        hours: {
          'Monday - Friday': '9:00 AM - 7:00 PM',
          'Saturday': '9:00 AM - 6:00 PM',
          'Sunday': '10:00 AM - 4:00 PM',
        },
        contacts: {
          phone: '+91-XXXX-XXXX',
          whatsapp: '+91-XXXX-XXXX',
          email: 'hello@freshandfurry.com',
        },
        socials: {
          instagram: 'https://instagram.com/freshandfurry',
        },
      } as T;
    
    case 'services.json':
      return [] as T;
    
    case 'staff.json':
      return [] as T;
    
    case 'testimonials.json':
      return [] as T;
    
    case 'featured.json':
      return [] as T;
    
    case 'gallery.json':
      return [] as T;
    
    case 'faq.json':
      return [] as T;
    
    default:
      return {} as T;
  }
}

export function getSiteConfig(): SiteConfig {
  return readJsonFile('site.json', siteConfigSchema);
}

export function getServices(): Service[] {
  return readJsonFile('services.json', z.array(serviceSchema));
}

export function getStaff(): StaffMember[] {
  return readJsonFile('staff.json', z.array(staffMemberSchema));
}

export function getTestimonials(): Testimonial[] {
  return readJsonFile('testimonials.json', z.array(testimonialSchema));
}

export function getFeatured(): FeaturedItem[] {
  return readJsonFile('featured.json', z.array(featuredItemSchema));
}

export function getGallery(): GalleryItem[] {
  return readJsonFile('gallery.json', z.array(galleryItemSchema));
}

export function getFAQ(): FAQItem[] {
  return readJsonFile('faq.json', z.array(faqItemSchema));
}

// Helper functions for content filtering
export function getServicesBySpecies(species: 'dog' | 'cat' | 'both'): Service[] {
  const services = getServices();
  return services.filter(service => service.species === species || service.species === 'both');
}

export function getFeaturedBySpecies(species?: 'dog' | 'cat' | 'both'): FeaturedItem[] {
  const featured = getFeatured();
  if (!species) return featured;
  return featured.filter(item => item.species === species || item.species === 'both');
}

export function getGalleryByCategory(category?: string, species?: 'dog' | 'cat' | 'both'): GalleryItem[] {
  let gallery = getGallery();
  
  if (category) {
    gallery = gallery.filter(item => item.category === category);
  }
  
  if (species) {
    gallery = gallery.filter(item => item.species === species || item.species === 'both');
  }
  
  return gallery;
}

export function getFAQByCategory(category?: string): FAQItem[] {
  const faq = getFAQ();
  if (!category) return faq;
  return faq.filter(item => item.category === category);
}
