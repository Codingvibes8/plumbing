import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, ShieldCheck } from "lucide-react"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our professional plumbing company, our values, and our commitment to exceptional service.",
}

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge>About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Your Trusted Plumbing Partner Since 1995
              </h1>
              <p className="text-xl text-muted-foreground">
                With over 25 years of experience, we've built a reputation for excellence in the plumbing industry,
                serving both residential and commercial clients.
              </p>
              <p className="text-muted-foreground">
                Plumbing Pros was founded with a simple mission: to provide reliable, high-quality plumbing services at
                fair prices. Over the years, we've grown from a small family business to a team of expert plumbers, but
                our commitment to exceptional service has never wavered.
              </p>
              <p className="text-muted-foreground">
                We take pride in our work and stand behind every job we complete. Our team of licensed plumbers
                undergoes continuous training to stay current with the latest techniques and technologies in the
                industry.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Plumbing Pros team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide everything we do and help us deliver exceptional service to every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for excellence in every job, no matter how big or small. Our work is thorough, precise, and
                  built to last.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We operate with complete transparency and honesty. Our pricing is fair and upfront, with no hidden
                  fees or surprise charges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When you schedule a service with us, we show up on time, ready to work. We respect your time and your
                  property.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use only high-quality parts and materials, and our workmanship is backed by a satisfaction
                  guarantee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Our team of professional plumbers"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge>Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Expert Plumbers</h2>
              <p className="text-lg text-muted-foreground">
                Our team consists of highly skilled, licensed plumbers with years of experience in all aspects of
                plumbing.
              </p>
              <p className="text-muted-foreground">
                Every member of our team undergoes rigorous training and certification. We perform thorough background
                checks and drug testing to ensure we're sending only the most trustworthy professionals to your home or
                business.
              </p>
              <p className="text-muted-foreground">
                Our plumbers are not just technically skilled—they're also friendly, respectful, and committed to
                providing exceptional customer service. They'll take the time to explain the issue, answer your
                questions, and clean up thoroughly when the job is done.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our History</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">A Legacy of Quality Service</h2>
            <p className="text-lg text-muted-foreground">
              From our humble beginnings to becoming a leading plumbing company, we've always put our customers first.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1995
                </div>
                <div className="h-full w-0.5 bg-border mt-4 hidden md:block"></div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">Founded as a Family Business</h3>
                <p className="text-muted-foreground">
                  Plumbing Pros was established by John Smith, a master plumber with a vision to provide honest,
                  reliable plumbing services to the local community. Operating from a small garage with just one truck,
                  John built a reputation for quality workmanship and fair pricing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2005
                </div>
                <div className="h-full w-0.5 bg-border mt-4 hidden md:block"></div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">Expansion and Growth</h3>
                <p className="text-muted-foreground">
                  After a decade of success, we expanded our team to include five full-time plumbers and moved into our
                  first commercial office space. This growth allowed us to serve more customers and offer a wider range
                  of services.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2015
                </div>
                <div className="h-full w-0.5 bg-border mt-4 hidden md:block"></div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">Commercial Division Launch</h3>
                <p className="text-muted-foreground">
                  Recognizing the unique needs of commercial clients, we established a dedicated commercial division to
                  serve businesses, property managers, and contractors with specialized plumbing services.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center md:items-end">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  Today
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">Leading the Industry</h3>
                <p className="text-muted-foreground">
                  Today, Plumbing Pros is a full-service plumbing company with a team of over 20 professionals serving
                  both residential and commercial clients. While we've grown significantly, our commitment to quality,
                  integrity, and customer satisfaction remains unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

