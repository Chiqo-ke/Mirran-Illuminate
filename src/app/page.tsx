import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { SubscriptionForm } from "@/components/subscription-form";
import { Building, Users, Goal, ArrowRight, Mail } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Glass Villa",
    description: "A stunning synthesis of glass and steel, this villa offers panoramic views of the surrounding landscape.",
    image: "https://placehold.co/600x400.png",
    hint: "modern architecture",
  },
  {
    id: 2,
    title: "Urban Oasis Tower",
    description: "A high-rise residential building integrating green spaces and sustainable technologies in a dense urban core.",
    image: "https://placehold.co/600x400.png",
    hint: "skyscraper building",
  },
  {
    id: 3,
    title: "The Heritage Museum",
    description: "A contemporary extension to a historical building, blending old and new with sensitivity and respect.",
    image: "https://placehold.co/600x400.png",
    hint: "museum interior",
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
    title: "Corporate Headquarters",
    description: "A dynamic and collaborative workspace designed to foster innovation and reflect the company's brand identity.",
    image: "https://placehold.co/600x400.png",
    hint: "office building",
  },
  {
    id: 6,
    title: "Community Arts Center",
    description: "A vibrant public space designed to be flexible and welcoming for a variety of cultural events and exhibitions.",
    image: "https://placehold.co/600x400.png",
    hint: "community center",
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
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 drop-shadow-lg">Shaping Tomorrow's Skylines</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90 drop-shadow-md">
              Mirran Architecture blends innovative design with sustainable practices to create spaces that inspire.
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
              Discover a selection of our finest work, showcasing our commitment to design excellence and innovation.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/z3QZ6g-q4wA"
                  title="Luxury Modern House Architectural Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YgQ_eAutX-s"
                  title="Modern Villa Architectural Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
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
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold font-headline mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear from you. Fill out the form below to start the conversation.
              </p>
            </div>
            <Card className="max-w-2xl mx-auto p-8 bg-background">
              <ContactForm />
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
