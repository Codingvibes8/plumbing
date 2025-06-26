import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Plumbing Pros</h3>
            <p className="text-muted-foreground">
              Professional plumbing services for residential and commercial properties. Available 24/7 for emergencies.
            </p>
            <div className="flex space-x-4">
              <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/emergency-plumbing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/drain-cleaning"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Drain Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/water-heater"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Water Heater Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/leak-detection"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Leak Detection & Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bathroom-remodeling"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bathroom Remodeling
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for tips and special offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Plumbing Pros. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

