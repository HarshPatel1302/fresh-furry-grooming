import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/mobile.css";
import { LocalBusinessJSONLD } from "@/components/seo/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh & Furry Pet Grooming",
  description: "Professional pet grooming and spa services in Vashi & Nerul, Navi Mumbai. Making your furry friends look and feel their best.",
  keywords: [
    "pet grooming",
    "dog grooming",
    "cat grooming",
    "Vashi",
    "Nerul",
    "Navi Mumbai",
    "pet spa",
    "professional grooming",
    "pet care"
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' }
  },
  manifest: '/manifest.json',
  themeColor: '#10B981',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <LocalBusinessJSONLD
          name="Fresh & Furry Pet Grooming"
          description="Professional pet grooming services in Vashi, Navi Mumbai. Expert groomers for dogs and cats with premium grooming and spa treatments."
          address="Shop No. 5, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703"
          phone="+919876543210"
          email="hello@freshandfurry.com"
          website="https://freshandfurry.com"
          openingHours={[
            "Monday-Friday: 9:00 AM - 7:00 PM",
            "Saturday: 9:00 AM - 6:00 PM",
            "Sunday: Closed"
          ]}
          priceRange="₹600-₹2500"
          image="https://freshandfurry.com/og-image.jpg"
          latitude={19.0754}
          longitude={72.9981}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
