



import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge"

import { ArrowRight, Wrench, Droplet, Thermometer, Home, ShieldCheck, Clock } from "lucide-react"
import  CtaSection  from "@/components/CtaSection"
import {services} from '@/constants/data'
export const metadata: Metadata = {
    title: "Plumbing Services",
    description:
        "Professional plumbing services for residential and commercial properties. From emergency repairs to bathroom remodeling, we do it all.",
}



const ServicePage = () => {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4">Our Services</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Plumbing
                        Solutions</h2>
                    <p className="text-lg text-muted-foreground">
                        From emergency repairs to complete bathroom remodels, our expert plumbers have you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<Wrench className="h-10 w-10"/>}
                        title="Emergency Repairs"
                        description="24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage."
                        href="/services/emergency-plumbing"
                    />
                    <ServiceCard
                        icon={<Droplet className="h-10 w-10"/>}
                        title="Leak Detection & Repair"
                        description="Advanced technology to locate and fix hidden leaks with minimal disruption to your property."
                        href="/services/leak-detection"
                    />
                    <ServiceCard
                        icon={<Thermometer className="h-10 w-10"/>}
                        title="Water Heater Services"
                        description="Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water."
                        href="/services/water-heater"
                    />
                    <ServiceCard
                        icon={<Home className="h-10 w-10"/>}
                        title="Bathroom Remodeling"
                        description="Transform your bathroom with our expert plumbing and fixture installation services."
                        href="/services/bathroom-remodeling"
                    />
                    <ServiceCard
                        icon={<ShieldCheck className="h-10 w-10"/>}
                        title="Drain Cleaning"
                        description="Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly."
                        href="/services/drain-cleaning"
                    />
                    <ServiceCard
                        icon={<Clock className="h-10 w-10"/>}
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
    )

}
export default ServicePage