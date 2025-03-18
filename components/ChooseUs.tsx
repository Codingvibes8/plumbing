import Image from "next/image";
import { Badge, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ChooseUsPage = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
          {/* Image Section */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl mx-auto w-full max-w-2xl">
            <Image
              src="/why-choose-us.jpg"
              alt="Professional plumbing team"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Badge className="text-sm px-4 py-1">Why Choose Us</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mx-auto lg:mx-0 max-w-2xl">
              The Trusted Choice for Quality Plumbing Services
            </h2>
            <p className="text-lg text-muted-foreground mx-auto lg:mx-0 max-w-2xl">
              With decades of experience and a commitment to excellence, we
              deliver reliable plumbing solutions that stand the test of time.
            </p>

            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Licensed & Insured Professionals",
                  content:
                    "Our team consists of fully licensed, insured, and background-checked plumbers.",
                },
                {
                  title: "Transparent Pricing",
                  content:
                    "No hidden fees or surprise costs. We provide upfront pricing before any work begins.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  content:
                    "We stand behind our work with a 100% satisfaction guarantee on all services.",
                },
                {
                  title: "24/7 Emergency Response",
                  content:
                    "Plumbing emergencies don't wait, and neither do we. Available 24/7 for urgent issues.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start max-w-2xl mx-auto lg:mx-0"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-left">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-left">
                      {feature.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="mt-6 mx-auto lg:mx-0" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUsPage;
