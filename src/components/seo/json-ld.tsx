import { FC } from 'react';

interface LocalBusinessProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  openingHours: string[];
  priceRange: string;
  image: string;
  latitude: number;
  longitude: number;
}

export const LocalBusinessJSONLD: FC<LocalBusinessProps> = ({
  name,
  description,
  address,
  phone,
  email,
  website,
  openingHours,
  priceRange,
  image,
  latitude,
  longitude,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetGroomingBusiness',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'Vashi',
      addressRegion: 'Maharashtra',
      postalCode: '400703',
      addressCountry: 'IN',
    },
    telephone: phone,
    email,
    url: website,
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.includes('Monday') ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] : 
                 hours.includes('Saturday') ? 'Saturday' : 'Sunday',
      opens: hours.includes('Closed') ? '00:00' : hours.split(' ')[0],
      closes: hours.includes('Closed') ? '00:00' : hours.split(' ')[2],
    })),
    priceRange,
    image,
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    sameAs: [
      'https://www.facebook.com/freshandfurry',
      'https://www.instagram.com/freshandfurry',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pet Grooming Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dog Grooming',
            description: 'Professional dog grooming services including bath, haircut, nail trimming, and styling',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cat Grooming',
            description: 'Specialized cat grooming services with stress-free techniques for feline comfort',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pet Spa Services',
            description: 'Luxury spa treatments including aromatherapy, facials, and premium grooming packages',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface FAQPageProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQPageJSONLD: FC<FAQPageProps> = ({ questions }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface ServiceProps {
  name: string;
  description: string;
  price?: string;
  duration?: string;
  category: string;
}

export const ServiceJSONLD: FC<ServiceProps> = ({
  name,
  description,
  price,
  duration,
  category,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'PetGroomingBusiness',
      name: 'Fresh & Furry Pet Grooming',
    },
    category,
    offers: price ? {
      '@type': 'Offer',
      price,
      priceCurrency: 'INR',
    } : undefined,
    duration: duration ? `PT${duration.replace(/\D/g, '')}M` : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface ReviewProps {
  reviews: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

export const ReviewsJSONLD: FC<ReviewProps> = ({ reviews }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetGroomingBusiness',
    name: 'Fresh & Furry Pet Grooming',
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
