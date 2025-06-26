import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import { siteConfig } from "@/config/site"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-xl bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Need a Plumber Today?</h2>
            <p className="text-xl opacity-90">
              Our expert plumbers are ready to solve your plumbing problems quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-primary/20 hover:bg-primary/30 border-primary-foreground/20"
                asChild
              >
                <Link href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

