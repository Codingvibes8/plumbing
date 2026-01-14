import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Wrench, Droplet, Thermometer, Home, ShieldCheck, Clock } from "lucide-react"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Professional plumbing services for residential and commercial properties. From emergency repairs to bathroom remodeling, we do it all.",
}

const services = [
  {
    id: "emergency",
    icon: <Wrench className="h-10 w-10" />,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services to quickly resolve urgent issues and prevent further damage.",
    features: [
      "Available 24/7, 365 days a year",
      "Fast response times",
      "Fully equipped service vehicles",
      "Upfront pricing with no overtime charges",
      "Licensed and experienced technicians",
    ],
    image: "/service-emergency.png",
    href: "/services/emergency-plumbing",
  },
  {
    id: "leaks",
    icon: <Droplet className="h-10 w-10" />,
    title: "Leak Detection & Repair",
    description: "Advanced technology to locate and fix hidden leaks with minimal disruption to your property.",
    features: [
      "Non-invasive leak detection",
      "Thermal imaging technology",
      "Slab leak specialists",
      "Water line repairs",
      "Preventative solutions",
    ],
    image: "/service-leaks.png",
    href: "/services/leak-detection",
  },
  {
    id: "water-heater",
    icon: <Thermometer className="h-10 w-10" />,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance for all types of water heaters to ensure reliable hot water.",
    features: [
      "Tank and tankless water heaters",
      "Energy-efficient options",
      "Repairs and maintenance",
      "Replacement and installation",
      "Water heater flushing",
    ],
    image: "/service-water-heater.png",
    href: "/services/water-heater",
  },
  {
    id: "bathroom",
    icon: <Home className="h-10 w-10" />,
    title: "Bathroom Remodeling",
    description: "Transform your bathroom with our expert plumbing and fixture installation services.",
    features: [
      "Fixture installation and upgrades",
      "Shower and tub replacement",
      "Toilet installation",
      "Vanity and sink installation",
      "ADA-compliant bathroom solutions",
    ],
    image: "/service-bathroom.png",
    href: "/services/bathroom-remodeling",
  },
  {
    id: "drains",
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to eliminate clogs and keep your plumbing flowing smoothly.",
    features: [
      "Hydro jetting services",
      "Drain snaking",
      "Video camera inspections",
      "Preventative maintenance",
      "Sewer line cleaning",
    ],
    image: "/service-drains.png",
    href: "/services/drain-cleaning",
  },
  {
    id: "maintenance",
    icon: <Clock className="h-10 w-10" />,
    title: "Maintenance Plans",
    description: "Preventative maintenance plans to keep your plumbing system in optimal condition year-round.",
    features: [
      "Annual plumbing inspections",
      "Priority scheduling",
      "Discounted service rates",
      "Extended warranties",
      "Customized maintenance schedules",
    ],
    image: "/service-maintenance.png",
    href: "/services/maintenance",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Professional Plumbing Services</h1>
            <p className="text-xl text-muted-foreground">
              From emergency repairs to complete bathroom remodels, our expert plumbers have you covered with reliable
              solutions.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="emergency">Emergency</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card key={service.id} className="h-full transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-primary mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="residential" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter((s) => ["leaks", "water-heater", "bathroom", "drains"].includes(s.id))
                  .map((service) => (
                    <Card key={service.id} className="h-full transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-primary mt-1" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild>
                          <Link href={service.href}>Learn More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter((s) => ["maintenance", "drains", "leaks"].includes(s.id))
                  .map((service) => (
                    <Card key={service.id} className="h-full transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-primary mt-1" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild>
                          <Link href={service.href}>Learn More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter((s) => ["emergency", "leaks", "water-heater"].includes(s.id))
                  .map((service) => (
                    <Card key={service.id} className="h-full transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-primary mt-1" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild>
                          <Link href={service.href}>Learn More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge>Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Work</h2>
              <p className="text-lg text-muted-foreground">
                Our streamlined process ensures a hassle-free experience from the initial contact to the completion of
                your plumbing project.
              </p>

              <div className="space-y-8 pt-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Contact Us</h3>
                    <p className="text-muted-foreground">
                      Reach out via phone, email, or our online form to schedule a service or consultation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Diagnosis & Quote</h3>
                    <p className="text-muted-foreground">
                      Our technicians will assess the situation and provide a transparent, upfront quote.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Professional Service</h3>
                    <p className="text-muted-foreground">
                      Our expert plumbers complete the work efficiently and to the highest standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Follow-up & Guarantee</h3>
                    <p className="text-muted-foreground">
                      We follow up to ensure your satisfaction and stand behind our work with a solid guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/services-process.png"
                alt="Plumber working on pipes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

