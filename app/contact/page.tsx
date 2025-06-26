import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/config/site"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our plumbing experts for quotes, service requests, or emergency assistance.",
}

export default function ContactPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our plumbing experts for quotes, service requests, or emergency assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <PhoneCall className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office Address</h3>
                      <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed (Emergency Services Available)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Service</CardTitle>
                  <CardDescription>
                    Need immediate assistance? We're available 24/7 for plumbing emergencies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    If you're experiencing a plumbing emergency such as a burst pipe, major leak, or sewer backup, don't
                    wait! Call our emergency line immediately.
                  </p>
                  <Button size="lg" className="w-full gap-2" asChild>
                    <Link href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                      <PhoneCall className="h-4 w-4" />
                      {siteConfig.contact.phone}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Service Areas</h2>
            <p className="text-lg text-muted-foreground">
              We proudly serve the following areas with professional plumbing services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Anytown",
              "Springfield",
              "Riverdale",
              "Lakeside",
              "Mountainview",
              "Westfield",
              "Eastwood",
              "Northpoint",
              "Southside",
              "Centreville",
              "Brookhaven",
              "Oakridge",
            ].map((area) => (
              <Card key={area} className="text-center">
                <CardContent className="p-4">
                  <p className="font-medium">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our plumbing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Do you offer free estimates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, we provide free estimates for most plumbing projects. For complex jobs, we may charge a
                  diagnostic fee that will be applied to the cost of the work if you choose to proceed with us.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are your plumbers licensed and insured?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Absolutely. All our plumbers are fully licensed, insured, and have undergone background checks. We
                  maintain all required certifications and stay up-to-date with the latest plumbing codes and
                  techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How quickly can you respond to emergencies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  For plumbing emergencies, we typically arrive within 1-2 hours. Our emergency response team is
                  available 24/7, including weekends and holidays, to handle urgent plumbing issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer any warranties or guarantees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, we stand behind our work with a 100% satisfaction guarantee. We offer a 1-year warranty on labor
                  and honor all manufacturer warranties on parts and fixtures we install.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

