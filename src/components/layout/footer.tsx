import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { getSiteConfig, getPrimaryBranch } from "@/lib/content";
import { CONTACT_PHONES } from "@/lib/contact";
import Image from "next/image";

export function Footer() {
  const siteConfig = getSiteConfig();
  const primaryBranch = getPrimaryBranch();

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
  ];

  const services = [
    { name: "Dog Grooming", href: "/services?species=dog" },
    { name: "Cat Grooming", href: "/services?species=cat" },
    { name: "Bath & Blow Dry", href: "/services#bath-blow-dry" },
    { name: "Spa Package", href: "/services#spa-package" },
    { name: "Nail Care", href: "/services#nail-paw-care" },
  ];

  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Image
  src="/fresh&furry.png"  // or .png, .webp, etc.
  alt="Fresh & Furry The Ethical Pet Spa"
  width={120}
  height={60}
  className="h-16 w-auto"
  priority
/>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional pet grooming and spa services in Vashi & Nerul. Making your furry friends look and feel their best.
            </p>
            <div className="flex space-x-4">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {primaryBranch.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  {Object.entries(primaryBranch.hours).map(([day, hours]) => (
                    <div key={day}>
                      <span className="font-medium">{day}:</span> {hours}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>
                    Vashi: <a
                      href={`tel:${CONTACT_PHONES.vashi}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {CONTACT_PHONES.vashi}
                    </a>
                  </div>
                  <div>
                    Nerul: <a
                      href={`tel:${CONTACT_PHONES.nerul}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {CONTACT_PHONES.nerul}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`mailto:${primaryBranch.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {primaryBranch.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-center items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fresh & Furry Pet Grooming. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
