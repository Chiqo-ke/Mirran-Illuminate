import { Youtube, X, Linkedin } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mirran Illuminate Architects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="X">
              <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground" />
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
