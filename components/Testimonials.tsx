import {Badge} from "lucide-react";


const TestimonialsPage = () => {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4">Testimonials</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
                    <p className="text-lg text-muted-foreground">
                        Don't just take our word for it. Here's what our satisfied customers have to say about our
                        services.
                    </p>
                </div>

                <TestimonialCarousel/>
            </div>
        </section>
    )

}
export default TestimonialsPage