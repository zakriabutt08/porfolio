import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Muhammad Zakria",
  description: "Contact Muhammad Zakria for backend engineering and web development work.",
};

const contactLinks = [
  {
    label: "Email",
    value: "zakriabutt08@gmail.com",
    href: "mailto:zakriabutt08@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Muhammad Zakria",
    href: "https://www.linkedin.com/in/muhammad-zakria-77557a185/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "zakriabutt08",
    href: "https://github.com/zakriabutt08",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-[1fr_320px] md:px-6">
          <div className="flex max-w-3xl flex-col gap-5">
            <Badge variant="outline" className="w-fit">
              Contact
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s build a reliable backend for your next product.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m open to backend engineering roles, Laravel and Django projects, API
              development, database design, and practical web systems for real businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2" asChild>
                <Link href="mailto:zakriabutt08@gmail.com">
                  <Mail className="h-4 w-4" /> Send email
                </Link>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
          </div>

          <Card className="rounded-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Based in Pakistan</p>
                <p className="text-sm text-muted-foreground">Available for remote work</p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm font-medium">Best fit</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Backend APIs, admin dashboards, real estate systems, authentication, permissions,
                database workflows, and testing.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 md:grid-cols-3 md:px-6">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                <Card className="h-full rounded-lg transition-colors hover:border-primary/50">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-5 text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
