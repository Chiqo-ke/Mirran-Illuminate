"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Palette, DollarSign, Eye, Hammer, X, PenTool, Calculator, ClipboardCheck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

// Data content for the modals
const serviceDetails = {
  design: {
    id: "design",
    title: "Architectural Design",
    triggerIcon: Palette,
    modalIcon: PenTool,
    description: "We offer comprehensive architectural design services tailored to your needs:",
    items: [
      "1-3 storey residential houses",
      "Small lodges, guesthouses & resorts",
      "Container homes & modular units",
      "Small mixed-use developments"
    ]
  },
  costing: {
    id: "costing",
    title: "Accurate Costing",
    triggerIcon: DollarSign,
    modalIcon: Calculator,
    description: "We prepare accurate cost documents to help clients understand and control their budgets:",
    items: [
      "Detailed Bills of Quantities (BOQs)",
      "Preliminary cost plans",
      "Contractor quotations and comparisons",
      "Cost optimization and value-engineering advice"
    ]
  },
  supervision: {
    id: "supervision",
    title: "Site Supervision",
    triggerIcon: Eye,
    modalIcon: ClipboardCheck,
    description: "We provide independent oversight during construction to protect project quality, cost, and timelines:",
    items: [
      "Site supervision and inspections",
      "Quality control and specification compliance",
      "Progress monitoring and reporting",
      "Contractor coordination",
      "Interim valuation and payment certification"
    ]
  },
  development: {
    id: "development",
    title: "Development Works",
    triggerIcon: Hammer,
    modalIcon: Wrench,
    description: "We undertake small-scale renovation and upgrade works such as:",
    items: [
      "Residential renovations and extensions",
      "Interior upgrades and space reconfiguration",
      "Container modifications and refurbishments",
      "Targeted improvement works"
    ]
  }
};

export function HeroServices() {
  const [activeModal, setActiveModal] = useState<keyof typeof serviceDetails | null>(null);
  const [tagsVisible, setTagsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const triggerTags = () => {
    if (activeModal) return; // don't hide/show cycle while a modal is explicitly open
    
    setTagsVisible(true);
    
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setTagsVisible(false);
    }, 4500); // Disappear after 4.5 seconds of inactivity
  };

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Just trigger tags if it enters the view
        if (entry.isIntersecting) {
          triggerTags();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [activeModal]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // A much more forgiving boundary for mobile screens
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              triggerTags();
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeModal]);

  const openModal = (id: keyof typeof serviceDetails) => {
    setActiveModal(id);
    setTagsVisible(true); 
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  const closeModal = () => {
    setActiveModal(null);
    triggerTags(); 
  };

  return (
    <>
      {/* MOBILE / TABLET INTERACTIVE HOUSE */}
      <div 
        className="md:hidden flex items-center justify-center mt-20 mb-20 relative" 
        ref={containerRef}
        onMouseEnter={() => triggerTags()}
        onClick={() => triggerTags()}
        onTouchStart={() => triggerTags()}
      >
        {/* Central house icon with soft pulse ring */}
        <div className="group relative w-32 h-32 z-30 flex items-center justify-center cursor-pointer">
          <div className={cn("absolute inset-0 bg-primary/10 rounded-full transition-opacity duration-500", tagsVisible ? "animate-ping opacity-50" : "opacity-0")}></div>
          <div className={cn("relative z-10 w-24 h-24 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-transform duration-500", tagsVisible ? "scale-105" : "scale-100")}>
            <svg className="w-12 h-12 text-primary" viewBox="0 0 64 64" fill="none" stroke="currentColor">
              <path d="M8 28 L32 8 L56 28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14" y="28" width="36" height="26" strokeWidth="3" rx="2" />
              <rect x="30" y="38" width="8" height="16" fill="currentColor" />
            </svg>
          </div>

          {/* Top Left - Design */}
          <div className={cn("absolute bottom-full right-1/2 mr-1 pb-4 z-20 transition-all duration-500 ease-out", tagsVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none")}>
            <button onClick={(e) => { e.stopPropagation(); openModal('design'); }} onTouchEnd={(e) => { e.stopPropagation(); openModal('design'); }} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap active:scale-95 transition-transform hover:bg-muted cursor-pointer">
              <Palette className="w-3.5 h-3.5 mr-1.5 text-primary" /> Design
            </button>
          </div>
          
          {/* Top Right - Costing */}
          <div className={cn("absolute bottom-full left-1/2 ml-1 pb-4 z-20 transition-all duration-500 ease-out delay-75", tagsVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none")}>
            <button onClick={(e) => { e.stopPropagation(); openModal('costing'); }} onTouchEnd={(e) => { e.stopPropagation(); openModal('costing'); }} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap active:scale-95 transition-transform hover:bg-muted cursor-pointer">
              <DollarSign className="w-3.5 h-3.5 mr-1.5 text-primary" /> Costing
            </button>
          </div>

          {/* Bottom Left - Supervision */}
          <div className={cn("absolute top-full right-1/2 mr-1 pt-4 z-20 transition-all duration-500 ease-out delay-150", tagsVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6 pointer-events-none")}>
            <button onClick={(e) => { e.stopPropagation(); openModal('supervision'); }} onTouchEnd={(e) => { e.stopPropagation(); openModal('supervision'); }} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap active:scale-95 transition-transform hover:bg-muted cursor-pointer">
              <Eye className="w-3.5 h-3.5 mr-1.5 text-primary" /> Supervision
            </button>
          </div>

          {/* Bottom Right - Development */}
          <div className={cn("absolute top-full left-1/2 ml-1 pt-4 z-20 transition-all duration-500 ease-out delay-200", tagsVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6 pointer-events-none")}>
            <button onClick={(e) => { e.stopPropagation(); openModal('development'); }} onTouchEnd={(e) => { e.stopPropagation(); openModal('development'); }} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap active:scale-95 transition-transform hover:bg-muted cursor-pointer">
              <Hammer className="w-3.5 h-3.5 mr-1.5 text-primary" /> Renovation
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP SERVICE CARDS */}
      <div className="hidden md:flex flex-nowrap gap-2 lg:gap-3">
        {Object.values(serviceDetails).map((service, index) => (
          <Card
            key={service.id}
            onClick={() => openModal(service.id as keyof typeof serviceDetails)}
            className="p-2 md:p-2.5 lg:p-3 bg-card/50 border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-accent/50 animate-[fade-in-up_1s_ease-out] opacity-0 cursor-pointer"
            style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              {React.createElement(service.triggerIcon, { className: "w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" })}
              <h3 className="font-semibold text-xs md:text-sm lg:text-base text-foreground">
                {service.id === 'development' ? 'Renovation' : service.triggerIcon === Palette ? 'Design' : service.triggerIcon === DollarSign ? 'Costing' : 'Supervision'}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      {/* SHARED MODAL OVERLAY */}
      {mounted && createPortal(
        <div 
          className={cn("fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 transition-all duration-300", activeModal ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none")}
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={closeModal}
          onTouchStart={closeModal}
        >
          {activeModal && (
             <div 
             className={cn(
               "bg-background border border-border rounded-2xl p-6 shadow-2xl max-w-sm w-full relative transform transition-all duration-300",
               activeModal ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
             )}
             onClick={(e) => e.stopPropagation()}
             onTouchStart={(e) => e.stopPropagation()}
           >
             <button 
               onClick={closeModal}
               className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
             >
               <X className="w-5 h-5" />
             </button>

             <div className="flex flex-col items-center text-center mb-6">
               <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4 border border-primary/20 shadow-inner">
                 {React.createElement(serviceDetails[activeModal].modalIcon, { className: "w-8 h-8 text-primary" })}
               </div>
               <h3 className="text-xl font-bold font-headline text-foreground">{serviceDetails[activeModal].title}</h3>
             </div>
             
             <p className="text-sm text-muted-foreground mb-5 text-center leading-relaxed">
               {serviceDetails[activeModal].description}
             </p>

             <ul className="space-y-3">
               {serviceDetails[activeModal].items.map((item, idx) => (
                 <li key={idx} className="flex items-start text-sm text-foreground">
                   <div className="mr-3 mt-1 rounded-full bg-primary/20 p-1 flex-shrink-0">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   </div>
                   <span className="leading-tight text-left">{item}</span>
                 </li>
               ))}
             </ul>
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
