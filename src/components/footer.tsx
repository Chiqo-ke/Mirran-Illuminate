import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mirran Architecture
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
