"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/getting-started",
      label: "Get Started",
    },
    {
      href: "/design-library",
      label: "Design Library",
    },
    {
      href: "/examples",
      label: "Examples",
    },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {isMobile ? (
          <>
            <Link href="/" className="flex items-center mr-4">
              <Image
                src="/images/logo.png"
                alt="AI Builders México"
                width={100}
                height={100}
                className="dark:invert"
              />
            </Link>
            <div className="ml-auto">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-2">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-foreground/80",
                          pathname === route.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <ThemeToggle />
            </div>
          </>
        ) : (
          <>
            <Link href="/" className="flex items-center mr-6">
              <Image
                src="/images/logo.png"
                alt="AI Builders Logo"
                width={100}
                height={100}
                className="dark:invert"
              />
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {routes
                .filter((route) => route.href !== "/")
                .map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                      pathname === route.href
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
            </nav>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
