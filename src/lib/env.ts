import { z } from 'zod';

const envSchema = z.object({
  // Public environment variables
  NEXT_PUBLIC_SITE_NAME: z.string().default('Fresh & Furry Pet Grooming'),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_ADDRESS: z.string().default('Vashi, Navi Mumbai'),
  NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL: z.string().optional(),
  WHATSAPP_NUMBER: z.string().regex(/^\+91[6-9]\d{9}$/).optional(),
  
  // Integrations
  N8N_WEBHOOK_URL: z.string().url().optional(),
  RESEND_API_KEY: z.string().optional(),
  
  // Admin
  ADMIN_PASSWORD: z.string().default('change_me'),
  
  // Analytics
  ANALYTICS_PROVIDER: z.enum(['plausible', 'gtag', 'none']).default('none'),
  PLAUSIBLE_DOMAIN: z.string().optional(),
  GTAG_ID: z.string().optional(),
});

function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
  }
}

export const env = validateEnv();

export function getRequiredEnv(key: keyof typeof envSchema.shape) {
  const value = env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}
