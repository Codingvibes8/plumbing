import React from "react";
import { CheckCircle, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh - h-16] md:min-h-[700px] overflow-hidden px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/plumbing-hero.jpg"
          alt="Plumbing background"
          fill
          priority
          className="object-cover"
          quality={100}
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="flex flex-col sm:flex-row gap-8 md:gap-12 items-center">
        {/* Content Section (60% width on desktop) */}
        <div className="lg:w-[60%] pt-20 w-full space-y-4 z-10">
          <Badge className="px-3 py-4 bg-indigo-950 text-white">
            24/7 Emergency Service
          </Badge>
          <h2
            className={"text-3xl font-serif font-bold text-primary-foreground"}
          >
            Apex Plumbing
          </h2>
          <h1 className="text-primary-foreground text-xl font-bold tracking-tight">
            Professional Plumbing Services
          </h1>
          <p className="max-w-lg text-sm px-4 py-3 text-yellow-100 text-balance bg-slate-600/90 rounded-lg backdrop-blur-sm">
            Expert plumbers delivering reliable solutions for all your
            residential and commercial plumbing needs.
          </p>
          <div className="flex items-center justify-center pt-4">
            <Button
              size="lg"
              className="w-fit bg-indigo-950 hover:bg-indigo-900"
              asChild
            >
              <Link href="/contact">Services</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-6 items-center">
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

        {/* Image Section (40% width on desktop) */}
        <div className="lg:w-[40%] w-full relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/plumb2.jpg"
            alt="Professional plumber at work"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
