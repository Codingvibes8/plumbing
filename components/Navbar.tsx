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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky px-8 top-0 z-50 w-full border-b bg-green-300 dark:bg-slate-900">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary dark:text-white">
              Apex Plumbing
            </span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="dark:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 z-50 flex flex-col gap-4 border-b bg-background dark:bg-slate-800 p-4 shadow-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary dark:hover:text-blue-400",
                      pathname === item.href
                        ? "text-primary dark:text-blue-400"
                        : "text-muted-foreground dark:text-gray-300",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button size="sm" className="gap-2 dark:text-white bg-blue-500 dark:hover:bg-blue-600">
                    <PhoneCall className="h-4 w-4 dark:text-white" />
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
                  "text-sm font-medium transition-colors hover:text-primary dark:hover:text-blue-400",
                  pathname === item.href
                    ? "text-primary dark:text-blue-400"
                    : "text-muted-foreground dark:text-gray-300",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {!isMobile && (
          <div className="flex items-center gap-4">
            <Button size="sm" className="gap-2 bg-blue-600 hover:bg-amber-700 dark:hover:bg-blue-700 dark:text-white">
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
