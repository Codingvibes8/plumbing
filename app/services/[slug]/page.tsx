import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, PhoneCall } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { getServiceData } from "@/lib/services"
import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site"

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge>{service.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.title}</h1>
              <p className="text-xl text-muted-foreground">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                    <PhoneCall className="h-4 w-4" />
                    {siteConfig.contact.phone}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Our {service.title}</h2>
            <p className="text-lg text-muted-foreground">{service.benefitDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.processImage || "/placeholder.svg"}
                alt={`${service.title} process`}
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge>Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Handle {service.title}</h2>
              <p className="text-lg text-muted-foreground">{service.processDescription}</p>

              <div className="space-y-8 pt-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Related Services</h2>
            <p className="text-lg text-muted-foreground">
              Explore our other plumbing services that might interest you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.relatedServices.map((relatedService, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                  <p className="text-muted-foreground mb-4">{relatedService.description}</p>
                  <Button variant="ghost" className="gap-2 p-0" asChild>
                    <Link href={relatedService.href}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

