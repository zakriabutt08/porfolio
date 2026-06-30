"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tech", href: "/#tech-stack" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "zakriabutt08";

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#") || pathname !== "/") {
      return;
    }

    const section = document.getElementById(href.replace("/#", ""));

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-sm font-bold">Muhammad Zakria</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Backend Engineer
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  isActive && item.href !== "/#tech-stack" && item.href !== "/#experience"
                    ? "bg-muted text-foreground"
                    : ""
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" asChild>
            <Link href={`https://github.com/${username}`} target="_blank" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="icon" variant="outline" asChild>
            <Link href="/contact" aria-label="Contact">
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
