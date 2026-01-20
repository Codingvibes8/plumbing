import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, PhoneCall, ShieldCheck, Wrench, Droplet, Thermometer, Home } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"
import { siteConfig } from "@/config/site"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Plumbing background"
            fill
            priority
            className="object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <Badge className="px-4 py-1.5 text-sm font-medium shadow-sm" variant="secondary">
                24/7 Emergency Service
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight drop-shadow-sm leading-tight text-foreground">
                Professional Plumbing Services You Can Trust
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Expert plumbers delivering reliable solutions for all your residential and commercial plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
                  <Link href="/book-online">Book Online Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 h-12 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80 transition-all" asChild>
                  <Link href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                    <PhoneCall className="h-4 w-4" />
                    {siteConfig.contact.phone}
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-sm font-medium text-muted-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-purple-500" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <Image
                src="/hero-image.png"
                alt="Professional plumber at work"
                fill
                className="object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Plumbing Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From emergency repairs to complete bathroom remodels, our expert plumbers have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Wrench className="h-10 w-10" />}
              title="Emergency Repairs"
              description="24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage."
              href="/services/emergency-plumbing"
            />
            <ServiceCard
              icon={<Droplet className="h-10 w-10" />}
              title="Leak Detection & Repair"
              description="Advanced technology to locate and fix hidden leaks with minimal disruption to your property."
              href="/services/leak-detection"
            />
            <ServiceCard
              icon={<Thermometer className="h-10 w-10" />}
              title="Water Heater Services"
              description="Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water."
              href="/services/water-heater"
            />
            <ServiceCard
              icon={<Home className="h-10 w-10" />}
              title="Bathroom Remodeling"
              description="Transform your bathroom with our expert plumbing and fixture installation services."
              href="/services/bathroom-remodeling"
            />
            <ServiceCard
              icon={<ShieldCheck className="h-10 w-10" />}
              title="Drain Cleaning"
              description="Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly."
              href="/services/drain-cleaning"
            />
            <ServiceCard
              icon={<Clock className="h-10 w-10" />}
              title="Maintenance Plans"
              description="Preventative maintenance plans to keep your plumbing system in optimal condition year-round."
              href="/services/maintenance"
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/why-choose-us.png"
                alt="Professional plumbing team"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge>Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The Trusted Choice for Quality Plumbing Services
              </h2>
              <p className="text-lg text-muted-foreground">
                With decades of experience and a commitment to excellence, we deliver reliable plumbing solutions that
                stand the test of time.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Licensed & Insured Professionals</h3>
                    <p className="text-muted-foreground">
                      Our team consists of fully licensed, insured, and background-checked plumbers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      No hidden fees or surprise costs. We provide upfront pricing before any work begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Satisfaction Guaranteed</h3>
                    <p className="text-muted-foreground">
                      We stand behind our work with a 100% satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">24/7 Emergency Response</h3>
                    <p className="text-muted-foreground">
                      Plumbing emergencies don't wait, and neither do we. Available 24/7 for urgent issues.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-6" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

