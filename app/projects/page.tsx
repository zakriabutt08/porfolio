import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioProjects } from "@/lib/projects";
import { ArrowRight, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Muhammad Zakria",
  description: "Detailed Laravel, backend, and full-stack project case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto flex max-w-5xl flex-col gap-6 px-4 md:px-6">
          <Button variant="ghost" size="sm" className="w-fit" asChild>
            <Link href="/">Back to home</Link>
          </Button>

          <div className="flex max-w-3xl flex-col gap-4">
            <Badge variant="outline" className="w-fit">
              Project case studies
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Backend projects with the thinking behind the code.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              These pages give each project room for context: what it does, what I built, the
              technical decisions, and what I would improve next.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 md:grid-cols-2 md:px-6">
          {portfolioProjects.map((project) => {
            const Icon = project.icon;

            return (
              <Card key={project.slug} className="flex h-full flex-col gap-5 rounded-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary">{project.status}</Badge>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {project.category} / {project.year}
                  </p>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <Badge key={item} variant="outline" className="text-[11px]">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <Button size="sm" className="gap-2" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      Read details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  {project.repository && (
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <Link href={project.repository} target="_blank">
                        <Github className="h-3.5 w-3.5" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
