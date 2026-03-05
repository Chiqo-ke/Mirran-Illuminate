
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { SubscriptionForm } from "@/components/subscription-form";
import { Building, Users, Goal, ArrowRight, Mail, Youtube, Linkedin, Palette, DollarSign, Eye, Hammer } from "lucide-react";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512"
      fill="currentColor"
      >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3C31.9 321.8 24 282.7 24 242.2c0-110.2 89.8-200 200-200 55.1 0 105.6 21.5 143.4 59.4s59.4 88.2 59.4 143.4c0 110.2-89.8 200-200 200zm101.7-164.8c-4.8-2.4-28.1-13.8-32.5-15.3s-7.6-2.4-10.8 2.4c-3.2 4.8-12.3 15.3-15.1 18.4s-5.6 3.6-10.4 1.2c-4.8-2.4-20.3-7.5-38.6-23.8s-31.2-35.4-34.9-41.5c-3.7-6.1-.4-9.4 2.1-11.8s4.8-5.6 7.2-8.3c2.4-2.8 4.8-4.8 7.2-8.3s.1-5.6-.9-7.9c-1.1-2.4-10.8-26.2-14.8-35.8s-8.1-8.2-11.2-8.4c-3.1-.2-6.6-.2-10-.2s-8.7 1.2-13.2 6.1c-4.5 4.8-17.3 16.9-17.3 41.2s17.7 47.8 20.1 51.4c2.4 3.6 34.6 52.8 83.8 73.2 12.1 5.1 21.6 8.1 28.9 10.3s14.8 3.6 20.3 2.2c6.1-1.4 28.1-11.5 32-22.6s3.9-20.8 2.7-22.6c-1.2-1.9-4.4-3.1-9.2-5.6z" />
    </svg>
  );
}

const projects = [
  {
    id: 1,
    title: "Serene Lakeside Villa",
    description: "A stunning synthesis of glass and wood, this villa offers panoramic views of a tranquil lake.",
    image: "/images/hom1.jpeg",
    hint: "lake house",
  },
  {
    id: 2,
    title: "Chic Urban Loft",
    description: "A stylish loft conversion in the city center, featuring exposed brick and industrial-chic design.",
    image: "/images/home2.jpeg",
    hint: "urban loft",
  },
  {
    id: 3,
    title: "Cozy Country Cottage",
    description: "A charming countryside cottage, thoughtfully restored to blend rustic character with modern comforts.",
    image: "/images/home3.jpeg",
    hint: "country cottage",
  },
  {
    id: 4,
    title: "Modern Minimalist Home",
    description: "A clean architectural design prioritizing open spaces, natural light, and seamless indoor-outdoor living.",
    image: "/images/home4.jpeg",
    hint: "modern minimalist",
  },
];

const services = [
  { name: "Design", icon: Palette },
  { name: "Costing", icon: DollarSign },
  { name: "Supervision", icon: Eye },
  { name: "Renovation", icon: Hammer },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-10 md:py-20 lg:py-24">
          {/* mobile background removed */}
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 animate-[fade-in-up_1s_ease-out] -mt-6 md:mt-0">

               {/* Large title - hidden on small screens */}
               <h1 className="hidden md:block text-4xl md:text-5xl font-bold font-headline mb-4">
                 <span className="text-primary">Mirran</span> Illuminate Architects
               </h1>

               {/* Main headline always visible */}
               <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Residential <span className="text-primary">Development</span> Services.</h2>

               {/* Description */}
               <p className="text-muted-foreground mb-8">
                We provide professional, cost-conscious construction services for residential and
                small-scale developments. Our approach separates Design, Costing, and Oversight from
                execution risk - giving Clients clarity, control, and confidence from concept to
                completion.
               </p>

               {/* Interactive house illustration for mobile/tablet only */}
               <div className="md:hidden flex items-center justify-center mt-20 mb-20 relative">
                 <div className="group relative w-32 h-32 z-30 flex items-center justify-center cursor-pointer">
                   
                   {/* Central house icon with soft pulse ring */}
                   <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-50"></div>
                   <div className="relative z-10 w-24 h-24 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:scale-105 transition-transform duration-300">
                     <svg className="w-12 h-12 text-primary" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                       <path d="M8 28 L32 8 L56 28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                       <rect x="14" y="28" width="36" height="26" strokeWidth="3" rx="2" />
                       <rect x="30" y="38" width="8" height="16" fill="currentColor" />
                     </svg>
                   </div>

                   {/* Surrounding tags pinned exclusively outside the pulsing circle via padding */}
                   {/* Top Left */}
                   <div className="absolute bottom-full right-1/2 mr-1 pb-4 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                     <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap">
                       <Palette className="w-3.5 h-3.5 mr-1.5 text-primary" /> Design
                     </span>
                   </div>
                   
                   {/* Top Right */}
                   <div className="absolute bottom-full left-1/2 ml-1 pb-4 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-75">
                     <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap">
                       <DollarSign className="w-3.5 h-3.5 mr-1.5 text-primary" /> Costing
                     </span>
                   </div>

                   {/* Bottom Left */}
                   <div className="absolute top-full right-1/2 mr-1 pt-4 z-20 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-150">
                     <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap">
                       <Eye className="w-3.5 h-3.5 mr-1.5 text-primary" /> Supervision
                     </span>
                   </div>

                   {/* Bottom Right */}
                   <div className="absolute top-full left-1/2 ml-1 pt-4 z-20 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-200">
                     <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-card/95 text-foreground shadow-xl backdrop-blur-md border border-border whitespace-nowrap">
                       <Hammer className="w-3.5 h-3.5 mr-1.5 text-primary" /> Development
                     </span>
                   </div>
                 </div>
               </div>

               {/* Service cards - hide on small screens */}
               <div className="hidden md:flex flex-nowrap gap-2 lg:gap-3">
                {services.map((service, index) => (
                  <Card
                    key={service.name}
                    className="p-2 md:p-2.5 lg:p-3 bg-card/50 border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-accent/50 animate-[fade-in-up_1s_ease-out] opacity-0"
                     style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <service.icon className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" />
                      <h3 className="font-semibold text-xs md:text-sm lg:text-base text-foreground">{service.name}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="hidden md:flex relative items-center justify-center w-full min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]"></div>
              <Image
                src="/images/herohouse.png"
                alt="Modern residential house"
                width={1000}
                height={800}
                className="relative z-10 w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center font-headline mb-4">Our Portfolio</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover a selection of our finest work, showcasing our commitment to design excellence and innovation in residential architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  imageHint={project.hint}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-headline mb-4">About Mirran Illuminate Architects</h2>
                <p className="text-muted-foreground mb-6">
                  Founded on the principles of creativity, integrity, and sustainability, Mirran Illuminate Architects has been at the forefront of architectural innovation for over two decades. We believe that great design can transform lives and build better futures.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 border border-transparent hover:border-primary/20 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-md text-primary"><Building /></div>
                    <div>
                      <h3 className="font-semibold font-headline">Our Philosophy</h3>
                      <p className="text-muted-foreground text-sm">To create spaces that are not only aesthetically pleasing but also functional, durable, and environmentally responsible.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 border border-transparent hover:border-primary/20 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-md text-primary"><Users /></div>
                    <div>
                      <h3 className="font-semibold font-headline">Our Team</h3>
                      <p className="text-muted-foreground text-sm">A collective of passionate architects, designers, and engineers dedicated to pushing the boundaries of design.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 border border-transparent hover:border-primary/20 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-md text-primary"><Goal /></div>
                    <div>
                      <h3 className="font-semibold font-headline">Our Mission</h3>
                      <p className="text-muted-foreground text-sm">To design and deliver exceptional architectural solutions that exceed client expectations and contribute positively to the built environment.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-12">
                <Card className="w-full max-w-md p-8 lg:p-10 shadow-lg bg-background">
                  <div className="text-center">
                     <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full text-primary">
                            <Mail className="w-8 h-8"/>
                        </div>
                     </div>
                    <h3 className="text-2xl font-bold font-headline mb-3">Stay in the Loop!</h3>
                    <p className="text-muted-foreground mb-8">
                     Joining our mailing list is your ticket to staying in the loop and ensuring you never miss out on our newest products, exciting promotions, and all the latest news from our brand.
                    </p>
                    <SubscriptionForm />
                  </div>
                </Card>

                <div className="w-full max-w-md flex flex-col items-center justify-center space-y-8 pt-6 border-t border-border/50">
                  <div className="text-center w-full">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-headline">Connect With Us</h3>
                    <p className="text-muted-foreground mb-6">Stay updated closely with our latest projects and architectural insights through our social channels.</p>
                    <div className="flex items-center justify-center gap-6">
                        <a href="#" aria-label="X" className="bg-background p-4 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                            <XIcon className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="YouTube" className="bg-background p-4 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:text-red-500 hover:border-red-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                            <Youtube className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="bg-background p-4 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:text-blue-500 hover:border-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <a 
                      href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Mirran%20Illuminate%20Architects%20I%20would%20like%20to%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 text-green-400 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:from-green-500/20 hover:to-emerald-500/10 hover:border-green-500/40 hover:scale-[1.02] shadow-sm w-full bg-background"
                    >
                      <div className="bg-green-500/10 p-4 rounded-full shrink-0 group-hover:bg-green-500/20 transition-colors">
                        <WhatsAppIcon className="h-10 w-10 text-green-500 drop-shadow-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-foreground mb-1">Chat on WhatsApp</h3>
                        <p className="text-base text-muted-foreground">Start a conversation instantly</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Walkthroughs Section */}
        <section id="walkthroughs" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center font-headline mb-4">Experience Our Designs in 3D</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our 3D walkthroughs bring your vision to life before breaking ground. By combining our professional expertise with your desires, we create immersive virtual experiences that allow you to explore every detail of your future space.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl aspect-video md:aspect-[4/3] lg:aspect-video">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/z3QZ6g-q4wA"
                  title="Luxury Modern House Architectural Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl aspect-video md:aspect-[4/3] lg:aspect-video">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/YgQ_eAutX-s"
                  title="Modern Villa Architectural Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl aspect-video md:aspect-[4/3] lg:aspect-video">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/Gqpud9e9M3I"
                  title="Contemporary Home 3D Animation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
