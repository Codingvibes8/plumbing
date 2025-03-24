import ServicesPage from "@/app/services/page";
import ChooseUs from "@/components/ChooseUs";
import HeroPage from "@/components/Hero";
import { TestimonialGrid } from "@/components/TestimonialGrid";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroPage />

      {/* Services Section */}
      <ServicesPage />

      {/* Why Choose Us Section */}
      <ChooseUs />

      {/* Testimonials Section */}
      <section className="py-16 flex items-center justify-center md:py-24 bg-muted/50">
        <div className="container">
          <TestimonialGrid />
        </div>
      </section>
    </>
  );
}
