# Fresh & Furry Pet Grooming Website

A modern, responsive website for Fresh & Furry Pet Grooming - a professional pet grooming service in Vashi, Navi Mumbai. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **SEO Optimized**: Built-in SEO with metadata, OpenGraph, and JSON-LD structured data
- **Content Management**: JSON-based content system for easy updates
- **Booking System**: Integrated booking form with N8N webhook support
- **PWA Ready**: Progressive Web App with manifest and offline capabilities
- **Analytics Ready**: Support for Plausible, Google Analytics, or custom analytics
- **Cloudinary Integration**: Ready for image/video management
- **Type Safety**: Full TypeScript with Zod validation
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Media**: Cloudinary (optional)
- **Analytics**: Plausible/Google Analytics
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
fresh-furry-grooming/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── contact/           # Booking page
│   │   ├── services/          # Services page
│   │   ├── pricing/           # Pricing page
│   │   └── ...
│   ├── components/            # React components
│   │   ├── forms/            # Form components
│   │   ├── layout/           # Header, footer, etc.
│   │   ├── sections/         # Page sections
│   │   └── ui/               # shadcn/ui components
│   └── lib/                  # Utilities and configurations
├── content/                   # JSON content files
├── public/                    # Static assets
└── scripts/                   # Build and utility scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fresh-furry-grooming
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_NAME=Fresh & Furry Pet Grooming
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_ADDRESS="Vashi, Navi Mumbai"
   WHATSAPP_NUMBER=+919876543210
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/booking
   # ... other variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All website content is managed through JSON files in the `/content` directory:

- `site.json` - Site configuration, contact info, hours
- `services.json` - Available grooming services
- `staff.json` - Team member information
- `testimonials.json` - Customer reviews
- `featured.json` - Daily featured content
- `gallery.json` - Photo/video gallery
- `faq.json` - Frequently asked questions

### Adding New Content

1. Edit the relevant JSON file in `/content`
2. The changes will be reflected immediately (no build required)
3. All content is validated with Zod schemas for type safety

## 🎨 Customization

### Branding
- Update `content/site.json` for business information
- Replace logo and favicon in `/public`
- Modify colors in `src/app/globals.css`

### Services
- Add/edit services in `content/services.json`
- Update pricing in `content/pricing.json`
- Modify service categories and descriptions

### Team
- Add team members in `content/staff.json`
- Include photos, bios, and social links
- Update roles and specialties

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_NAME` | Site name | Yes |
| `NEXT_PUBLIC_SITE_URL` | Site URL | Yes |
| `NEXT_PUBLIC_ADDRESS` | Business address | Yes |
| `WHATSAPP_NUMBER` | WhatsApp contact | No |
| `N8N_WEBHOOK_URL` | Booking webhook URL | No |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | No |
| `CLOUDINARY_API_KEY` | Cloudinary API key | No |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | No |
| `RESEND_API_KEY` | Email API key | No |
| `ANALYTICS_PROVIDER` | Analytics provider | No |

### Analytics Setup

Choose one of the following analytics providers:

**Plausible (Recommended)**
```env
ANALYTICS_PROVIDER=plausible
PLAUSIBLE_DOMAIN=your-domain.com
```

**Google Analytics**
```env
ANALYTICS_PROVIDER=gtag
GTAG_ID=G-XXXXXXXXXX
```

**None**
```env
ANALYTICS_PROVIDER=none
```

## 📱 PWA Features

The website includes Progressive Web App features:

- **Manifest**: App-like installation
- **Icons**: App icons for various devices
- **Offline**: Basic offline functionality
- **Responsive**: Works on all devices

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 📊 Performance

The website is optimized for performance:

- **Lighthouse Score**: 95+ on mobile
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Optimized caching strategies

## 🔒 Security

- **Environment Variables**: Secure handling of sensitive data
- **Input Validation**: Zod schemas for all form inputs
- **HTTPS**: Enforced in production
- **CSP**: Content Security Policy headers

## 📞 Support

For support or questions:

- **Email**: hello@freshandfurry.com
- **Phone**: +91-98765-43210
- **WhatsApp**: +91-98765-43210

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Fresh & Furry Pet Grooming** - Making your furry friends look and feel their best! 🐕🐱# Deployment test - Fri Oct 10 16:05:40 IST 2025
