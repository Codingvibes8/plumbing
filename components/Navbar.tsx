"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ModeToggle";
import { useMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full mx-auto h-16 bg-blue-200 px-8">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              Plumbing Pros
            </span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 z-50 flex flex-col gap-4 border-b bg-background p-4 shadow-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button size="sm" className="gap-2">
                    <PhoneCall className="h-4 w-4" />
                    <span className="hidden sm:inline-block">
                      {siteConfig.contact.phone}
                    </span>
                    <span className="sm:hidden">Call Now</span>
                  </Button>
                  <ModeToggle />
                </div>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {!isMobile && (
          <div className="flex items-center gap-4">
            <Button size="sm" className="gap-2">
              <PhoneCall className="h-4 w-4" />
              {siteConfig.contact.phone}
            </Button>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  );
}
