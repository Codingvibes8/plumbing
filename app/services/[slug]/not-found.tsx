import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Service Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">Sorry, we couldn't find the service you're looking for.</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/services">View All Services</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

