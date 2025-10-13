import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Navigation, Car } from "lucide-react";
import { getPrimaryBranch } from "@/lib/content";
import { env } from "@/lib/env";

export function LocationSection() {
  const primaryBranch = getPrimaryBranch();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Visit Us in Vashi & Nerul
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Vashi and Nerul, Navi Mumbai. 
            Easy parking and accessible by public transport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                {env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ? (
                  <iframe
                    src={env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Map placeholder</p>
                      <p className="text-sm text-muted-foreground">
                        Add NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL to env
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {primaryBranch.address}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Car className="h-3 w-3" />
                    Free Parking
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Navigation className="h-3 w-3" />
                    Easy Access
                  </Badge>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Operating Hours
                  </h4>
                  <div className="space-y-1">
                    {Object.entries(primaryBranch.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="font-medium">{day}:</span>
                        <span className="text-muted-foreground">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href={`tel:${primaryBranch.phone}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {primaryBranch.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href={`mailto:${primaryBranch.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {primaryBranch.email}
                  </a>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1">
                    <a href={`tel:${primaryBranch.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a 
                      href={`https://wa.me/${primaryBranch.phone.replace(/[^\d]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
