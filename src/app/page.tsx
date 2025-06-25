import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { Building, Users, Goal, ArrowRight } from "lucide-react";

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

const teamMembers = [
  {
    name: "Alex Mirran",
    role: "Lead Architect",
    image: "https://placehold.co/300x300.png",
    hint: "architect portrait",
  },
  {
    name: "Samantha Chen",
    role: "Project Manager",
    image: "https://placehold.co/300x300.png",
    hint: "woman portrait",
  },
  {
    name: "David Lee",
    role: "Structural Engineer",
    image: "https://placehold.co/300x300.png",
    hint: "man portrait",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-background/50 z-10"></div>
          <Image src="https://placehold.co/1920x1080.png" alt="Hero background" layout="fill" objectFit="cover" className="z-0" data-ai-hint="architecture abstract" />
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
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-md text-primary"><Building /></div>
                    <div>
                      <h3 className="font-semibold font-headline">Our Philosophy</h3>
                      <p className="text-muted-foreground text-sm">To create spaces that are not only aesthetically pleasing but also functional, durable, and environmentally responsible.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-md text-primary"><Users /></div>
                    <div>
                      <h3 className="font-semibold font-headline">Our Team</h3>
                      <p className="text-muted-foreground text-sm">A collective of passionate architects, designers, and engineers dedicated to pushing the boundaries of design.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-md text-primary"><Goal /></div>
                    <div>
                      <h3 className="font-semibold font-headline">Our Mission</h3>
                      <p className="text-muted-foreground text-sm">To design and deliver exceptional architectural solutions that exceed client expectations and contribute positively to the built environment.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                   <div key={member.name} className={`rounded-lg overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}>
                    <Image src={member.image} alt={member.name} width={index === 0 ? 600 : 300} height={300} objectFit="cover" data-ai-hint={member.hint} className="w-full h-full" />
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Location Map */}
        <section id="map" className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center font-headline mb-4">Our Project Locations</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We have had the privilege of shaping skylines and communities across the region.
            </p>
            <div className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
              <Image 
                src="https://placehold.co/1200x600.png" 
                alt="Map of project locations" 
                width={1200}
                height={600}
                className="w-full"
                data-ai-hint="world map"
              />
            </div>
             <p className="text-center text-xs text-muted-foreground mt-4">*Interactive map coming soon.</p>
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
