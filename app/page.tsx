import { Badge } from "@/components/ui/badge";

import { TestimonialCarousel } from "@/components/TestimonialCarousel";

import CtaSection from "@/components/CtaSection";

import ServicePage from "@/app/services";
import ChooseUs from "@/components/ChooseUs";
import HeroPage from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroPage />

      {/* Services Section */}
      <ServicePage />

      {/* Why Choose Us Section */}
      <ChooseUs />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied
              customers have to say about our services.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
