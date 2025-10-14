export type PetCategory = 'small-dog' | 'medium-large-dog' | 'cat';

export interface ServicePackage {
  id: string;
  title: string;
  petCategory: PetCategory;
  price: number; // INR
  includes: string[];
}

export interface AddOn {
  id: string;
  title: string;
  price: number; // INR
}

export const CURRENCY = 'INR';

export const PACKAGES: ServicePackage[] = [
  {
    "id": "only-bath-small-dog",
    "title": "Only Bath",
    "petCategory": "small-dog",
    "price": 1000,
    "includes": [
      "Premium pet-safe shampoo",
      "Conditioner",
      "Professional blow dry",
      "Coat brushing"
    ]
  },
  {
    "id": "only-bath-medium-large-dog",
    "title": "Only Bath",
    "petCategory": "medium-large-dog",
    "price": 1200,
    "includes": [
      "Premium pet-safe shampoo",
      "Conditioner",
      "Professional blow dry",
      "Coat brushing"
    ]
  },
  {
    "id": "only-bath-cat",
    "title": "Only Bath",
    "petCategory": "cat",
    "price": 1200,
    "includes": [
      "Premium pet-safe shampoo",
      "Conditioner",
      "Professional blow dry",
      "Coat brushing"
    ]
  },

  {
    "id": "bath-extras-small-dog",
    "title": "Bath + Extras",
    "petCategory": "small-dog",
    "price": 1500,
    "includes": [
      "Premium pet-safe shampoo",
      "Conditioner",
      "Professional blow dry",
      "Nail trimming / filing",
      "Ear cleaning",
      "Sanitary clipping / trimming",
      "Teeth brushing"
    ]
  },
  {
    "id": "bath-extras-medium-large-dog",
    "title": "Bath + Extras",
    "petCategory": "medium-large-dog",
    "price": 1600,
    "includes": [
      "Premium pet-safe shampoo",
      "Conditioner",
      "Professional blow dry",
      "Nail trimming / filing",
      "Ear cleaning",
      "Sanitary clipping / trimming",
      "Teeth brushing"
    ]
  },
  {
    "id": "bath-extras-cat",
    "title": "Bath + Extras",
    "petCategory": "cat",
    "price": 1500,
    "includes": [
      "Premium pet-safe shampoo",
      "Conditioner",
      "Professional blow dry",
      "Nail trimming / filing",
      "Ear cleaning",
      "Sanitary clipping / trimming",
      "Teeth brushing"
    ]
  },

  {
    "id": "full-grooming-small-dog",
    "title": "Full Grooming",
    "petCategory": "small-dog",
    "price": 2400,
    "includes": [
      "Bath, conditioner & blow dry",
      "Professional haircut & styling",
      "Nail trimming / filing",
      "Ear cleaning",
      "Teeth brushing",
      "Sanitary trim"
    ]
  },
  {
    "id": "full-grooming-medium-large-dog",
    "title": "Full Grooming",
    "petCategory": "medium-large-dog",
    "price": 2600,
    "includes": [
      "Bath, conditioner & blow dry",
      "Professional haircut & styling",
      "Nail trimming / filing",
      "Ear cleaning",
      "Teeth brushing",
      "Sanitary trim"
    ]
  },
  {
    "id": "full-grooming-cat",
    "title": "Full Grooming",
    "petCategory": "cat",
    "price": 2200,
    "includes": [
      "Bath, conditioner & blow dry",
      "Coat tidy / trim",
      "Nail trimming / filing",
      "Ear cleaning",
      "Teeth brushing",
      "Sanitary trim"
    ]
  },

  {
    "id": "ayurvedic-spa-small-dog",
    "title": "Ayurvedic Spa",
    "petCategory": "small-dog",
    "price": 1800,
    "includes": [
      "Ayurvedic mud pack",
      "Relaxing massage",
      "Ayurvedic shampoo",
      "Blow dry",
      "Ear cleaning",
      "Nail trimming / filing",
      "Teeth brushing",
      "Sanitary clipping"
    ]
  },
  {
    "id": "ayurvedic-spa-medium-large-dog",
    "title": "Ayurvedic Spa",
    "petCategory": "medium-large-dog",
    "price": 2400,
    "includes": [
      "Ayurvedic mud pack",
      "Relaxing massage",
      "Ayurvedic shampoo",
      "Blow dry",
      "Ear cleaning",
      "Nail trimming / filing",
      "Teeth brushing",
      "Sanitary clipping"
    ]
  }
];

export const ADDONS: AddOn[] = [
  { 
    id: "addon-full-body-haircut", 
    title: "Full Body Haircut", 
    price: 1500 
  },
  { 
    id: "addon-nail-ear-bundle", 
    title: "Nail Trimming / Filing / Ear Cleaning", 
    price: 350 
  },
  { 
    id: "addon-sanitary-clipping", 
    title: "Sanitary Clipping", 
    price: 500 
  }
];

// Helper functions
export function getPackagesByTitle(title: string): ServicePackage[] {
  return PACKAGES.filter(pkg => pkg.title === title);
}

export function getPackagesByPetCategory(category: PetCategory): ServicePackage[] {
  return PACKAGES.filter(pkg => pkg.petCategory === category);
}

export function getPackageTitles(): string[] {
  return [...new Set(PACKAGES.map(pkg => pkg.title))];
}

export function formatPrice(price: number): string {
  return `₹${price}`;
}