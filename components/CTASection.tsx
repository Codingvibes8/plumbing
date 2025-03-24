import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CTASection() {
  return (
    <section className="dark:bg-slate-900/50">
      <div className="container">
        <div className="rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-white p-8 md:p-12 lg:p-16 text-center shadow-lg dark:shadow-slate-900/30">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">
              Need a Plumber Today?
            </h2>
            <p className="text-xl opacity-90 dark:text-gray-300 dark:opacity-95">
              Our expert plumbers are ready to solve your plumbing problems
              quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                asChild
              >
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-primary/20 hover:bg-primary/30 border-primary-foreground/20
                         dark:bg-blue-600/20 dark:border-blue-400 dark:text-blue-100 dark:hover:bg-blue-600/30"
                asChild
              >
                <Link
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                >
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
