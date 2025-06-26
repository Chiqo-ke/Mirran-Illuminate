"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if the header should be visible
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up or at the top
      }
      
      // Update last scroll position
      lastScrollY.current = currentScrollY;

      // Determine if the header should have a background
      setHasScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
      hasScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent",
      !isVisible && "-translate-y-full"
    )}>
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex items-center">
          <div className="text-primary">
            <Logo />
          </div>
          <span className="ml-3 font-headline text-2xl font-bold text-foreground">
            Mirran Architecture
          </span>
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <Button variant="link" className="text-lg text-foreground" onClick={() => scrollTo("projects")}>
            Projects
          </Button>
          <Button variant="link" className="text-lg text-foreground" onClick={() => scrollTo("about")}>
            About
          </Button>
          <Button variant="link" className="text-lg text-foreground" onClick={() => scrollTo("walkthroughs")}>
            Walkthroughs
          </Button>
          <Button onClick={() => scrollTo("contact")}>
            Contact Us
          </Button>
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
