"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-lg font-semibold">Let&apos;s build something together.</h3>
          <p className="text-muted-foreground text-sm">
            Open to new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="flex gap-4">
            <Button size="icon" variant="ghost" asChild>
                <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || "zakriabutt08"}`} target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.linkedin.com/in/muhammad-zakria-77557a185/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:zakriabutt08@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl mt-12 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Software Engineer Portfolio.
      </div>
    </footer>
  );
}
