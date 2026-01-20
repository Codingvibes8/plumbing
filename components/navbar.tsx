"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PhoneCall, Menu, X, ChevronDown, CalendarDays } from "lucide-react"
import { siteConfig } from "@/config/site"
import { ModeToggle } from "@/components/mode-toggle"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Update the navItems array to remove the services item since we'll add a dropdown
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  // Add this after the navItems array
  const serviceItems = [
    { href: "/services/emergency-plumbing", label: "Emergency Plumbing" },
    { href: "/services/leak-detection", label: "Leak Detection & Repair" },
    { href: "/services/water-heater", label: "Water Heater Services" },
    { href: "/services/bathroom-remodeling", label: "Bathroom Remodeling" },
    { href: "/services/drain-cleaning", label: "Drain Cleaning" },
    { href: "/services/maintenance", label: "Maintenance Plans" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Plumbing Pros</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 z-50 flex flex-col gap-4 border-b bg-background p-4 shadow-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="py-2">
                  <p className="text-lg font-medium mb-2">Services</p>
                  <div className="pl-4 flex flex-col gap-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-4 border-t">
                  <Button size="lg" className="w-full gap-2" asChild>
                    <Link href="/book-online">
                      <CalendarDays className="h-4 w-4" />
                      Book Online
                    </Link>
                  </Button>
                  <div className="flex items-center justify-between">
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <Link href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                        <PhoneCall className="h-4 w-4" />
                        <span className="hidden sm:inline-block">{siteConfig.contact.phone}</span>
                        <span className="sm:inline-block">Call Now</span>
                      </Link>
                    </Button>
                    <ModeToggle />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative group">
              <button
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                  pathname.includes("/services") ? "text-primary" : "text-muted-foreground",
                )}
              >
                Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-md border bg-background shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2 grid gap-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t my-1"></div>
                  <Link
                    href="/services"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    All Services
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}

        {!isMobile && (
          <div className="flex items-center gap-4">
            <Button variant="default" size="sm" className="gap-2" asChild>
               <Link href="/book-online">
                <CalendarDays className="h-4 w-4" />
                Book Online
              </Link>
            </Button>
            <Button size="sm" variant="outline" className="gap-2" asChild>
              <Link href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                <PhoneCall className="h-4 w-4" />
                {siteConfig.contact.phone}
              </Link>
            </Button>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}

