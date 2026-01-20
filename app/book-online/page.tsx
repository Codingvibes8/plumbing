import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Book Online",
  description: "Schedule your plumbing service online. Fast, easy, and convenient booking for repairs, installations, and maintenance.",
}

export default function BookOnlinePage() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/40 min-h-screen">
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Book Your Service</h1>
          <p className="text-lg text-muted-foreground">
            Schedule an appointment with our expert plumbers. Fill out the form below, and we'll confirm your booking shortly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-muted/60">
            <CardHeader className="p-6 md:p-8 bg-muted/20 border-b">
              <CardTitle className="text-2xl">Appointment Request</CardTitle>
              <CardDescription className="text-base mt-2">
                Please provide your contact details and service preferences so we can assist you better.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-8 md:pt-10">
              <BookingForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
