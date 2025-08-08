
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { SubscriptionForm } from "@/components/subscription-form";
import { Building, Users, Goal, ArrowRight, Mail, Youtube, Linkedin, FileText } from "lucide-react";

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
    image: "https://placehold.co/600x400.png",
    hint: "lake house",
  },
  {
    id: 2,
    title: "Chic Urban Loft",
    description: "A stylish loft conversion in the city center, featuring exposed brick and industrial-chic design.",
    image: "https://placehold.co/600x400.png",
    hint: "urban loft",
  },
  {
    id: 3,
    title: "Cozy Country Cottage",
    description: "A charming countryside cottage, thoughtfully restored to blend rustic character with modern comforts.",
    image: "https://placehold.co/600x400.png",
    hint: "country cottage",
  },
  {
    id: 4,
    title: "Coastal Retreat",
    description: "A serene residential home designed to embrace the coastal elements, featuring natural materials.",
    image: "https://placehold.co/600x400.png",
    hint: "beach house",
  },
    {
    id: 5,
    title: "Luxury B&B Suite",
    description: "An elegant and inviting bed & breakfast suite, designed for ultimate guest comfort and relaxation.",
    image: "https://placehold.co/600x400.png",
    hint: "luxury suite",
  },
  {
    id: 6,
    title: "Modern Studio Apartment",
    description: "A compact and functional studio apartment, maximizing space with smart design and multi-purpose furniture.",
    image: "https://placehold.co/600x400.png",
    hint: "studio apartment",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-transparent z-10" />
          <Image src="https://placehold.co/1920x1080.png" alt="Hero background" fill className="object-cover z-0" data-ai-hint="architecture abstract" />
          <div className="relative z-20 container px-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 drop-shadow-lg">Crafting Beautiful Spaces for Living</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90 drop-shadow-md">
              Mirran Architecture blends innovative design with sustainable practices to create homes and rentals that inspire.
            </p>
            <Button size="lg" className="mt-8">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center font-headline mb-4">Our Portfolio</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover a selection of our finest work, showcasing our commitment to design excellence and innovation in residential architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h2 className="text-4xl font-bold font-headline mb-4">About Mirran Architecture</h2>
                <p className="text-muted-foreground mb-6">
                  Founded on the principles of creativity, integrity, and sustainability, Mirran Architecture has been at the forefront of architectural innovation for over two decades. We believe that great design can transform lives and build better futures.
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
              <div className="flex items-center justify-center">
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
            <div className="flex flex-wrap justify-center gap-8">
              <div className="aspect-video w-full max-w-2xl lg:max-w-none lg:w-[calc(33.333%-1.5rem)] rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/z3QZ6g-q4wA"
                  title="Luxury Modern House Architectural Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video w-full max-w-2xl lg:max-w-none lg:w-[calc(33.333%-1.5rem)] rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YgQ_eAutX-s"
                  title="Modern Villa Architectural Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video w-full max-w-2xl lg:max-w-none lg:w-[calc(33.333%-1.5rem)] rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
                <iframe
                  className="w-full h-full"
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
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold font-headline mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-12">
                Have a project in mind? We'd love to hear from you. Fill out the form below or connect with us on social media.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <Card className="p-8 bg-background">
                <ContactForm />
              </Card>
              <div className="flex flex-col items-center justify-center space-y-8 pt-8 md:pt-0">
                <div className="text-center">
                  <h3 className="font-bold text-lg text-foreground mb-4">Connect with us</h3>
                  <div className="flex items-center justify-center gap-6">
                      <a href="#" aria-label="X" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125">
                          <XIcon className="h-8 w-8" />
                      </a>
                      <a href="#" aria-label="YouTube" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125">
                          <Youtube className="h-8 w-8" />
                      </a>
                      <a href="#" aria-label="LinkedIn" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125">
                          <Linkedin className="h-8 w-8" />
                      </a>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Mirran%20Architecture%20I%20would%20like%20to%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-green-500/10 text-green-400 p-4 rounded-lg transition-all duration-300 hover:bg-green-500/20 hover:scale-105 w-full max-w-xs"
                >
                  <WhatsAppIcon className="h-12 w-12 text-green-500 transition-transform duration-300 group-hover:rotate-12" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Chat on WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Start a conversation instantly</p>
                  </div>
                </a>

                <Button variant="outline" asChild className="w-full max-w-xs">
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    Download My CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
