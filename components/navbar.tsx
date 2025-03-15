"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={cn("text-2xl font-bold transition-colors", isScrolled ? "text-slate-900" : "text-white")}>
              <span className="text-primary">RE</span>
              nova
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-slate-700" : "text-white",
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2 transition-colors",
                isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80",
              )}
            >
              <Phone className="h-4 w-4" />
              <span>+44 (0) 123 456 7890</span>
            </Button>
            <Button
              variant={isScrolled ? "default" : "secondary"}
              className={isScrolled ? "" : "bg-white text-slate-900 hover:bg-white/90"}
            >
              Get a Quote
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-900" : "text-white")} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold">
                      <span className="text-primary">RE</span>
                      nova
                    </span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex flex-col space-y-4 py-8">
                  {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto py-6 border-t">
                  <Button className="w-full mb-4">Get a Quote</Button>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+44 (0) 123 456 7890</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

