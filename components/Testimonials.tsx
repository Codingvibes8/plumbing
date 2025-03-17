import { Badge } from "@/components/ui/badge";

const TestimonialsPage = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-24 px-0 sm:px-12 md:px-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
};
export default TestimonialsPage;
