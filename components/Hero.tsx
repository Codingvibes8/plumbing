import Image from "next/image";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import {
  Badge,
  CheckCircle,
  Clock,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroPage = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 md:py-28 overflow-hidden px-8">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/plumbing-hero.jpg"
          alt="Plumbing background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <Badge className="px-3 py-1 text-sm">24/7 Emergency Service</Badge>
            <h1 className="text-yellow-200 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional Plumbing Services You Can Trust
            </h1>
            <p className="z-40 max-w-md text-xl flex items-center px-2 py-2 text-yellow-100 text-balance  text-blue-900 rounded-lg">
              Expert plumbers delivering reliable solutions for all your
              residential and commercial plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className={"bg-indigo-950"} asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-yellow-200"
                asChild
              >
                <Link
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                  className={"text-white"}
                >
                  <PhoneCall className="h-4 w-4 text-white" />
                  {siteConfig.contact.phone}
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 items-center">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-5 w-5" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          {/*<div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">*/}
          {/*  <Image*/}
          {/*    src="/plumb2.jpg"*/}
          {/*    alt="Professional plumber at work"*/}
          {/*    fill*/}
          {/*    priority*/}
          {/*    className="object-cover"*/}
          {/*    sizes="(max-width: 1024px) 100vw, 50vw"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
