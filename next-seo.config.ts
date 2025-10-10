import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Fresh & Furry Pet Grooming',
  defaultTitle: 'Fresh & Furry Pet Grooming - Professional Pet Grooming in Vashi, Navi Mumbai',
  description: 'Professional pet grooming services in Vashi, Navi Mumbai. Expert groomers for dogs and cats. Premium grooming, spa treatments, and pet care services.',
  canonical: 'https://freshandfurry.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://freshandfurry.com',
    siteName: 'Fresh & Furry Pet Grooming',
    title: 'Fresh & Furry Pet Grooming - Professional Pet Grooming in Vashi',
    description: 'Professional pet grooming services in Vashi, Navi Mumbai. Expert groomers for dogs and cats with premium grooming and spa treatments.',
    images: [
      {
        url: 'https://freshandfurry.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fresh & Furry Pet Grooming - Professional Pet Grooming Services',
      },
    ],
  },
  twitter: {
    handle: '@freshandfurry',
    site: '@freshandfurry',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#16a34a',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'keywords',
      content: 'pet grooming, dog grooming, cat grooming, Vashi, Navi Mumbai, pet spa, professional grooming, pet care, grooming services',
    },
    {
      name: 'author',
      content: 'Fresh & Furry Pet Grooming',
    },
    {
      name: 'geo.region',
      content: 'IN-MH',
    },
    {
      name: 'geo.placename',
      content: 'Vashi, Navi Mumbai',
    },
    {
      name: 'geo.position',
      content: '19.0754;72.9981',
    },
    {
      name: 'ICBM',
      content: '19.0754, 72.9981',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export default config;
