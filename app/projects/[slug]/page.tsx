import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProjectBySlug, portfolioProjects } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Project Details`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen">
      <section className="border-b border-border py-12 md:py-16">
        <div className="container mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6">
          <Button variant="ghost" size="sm" className="w-fit gap-2" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
          </Button>

          <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{project.category}</Badge>
                <Badge variant="secondary">{project.status}</Badge>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.subtitle}</p>
              </div>

              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.repository && (
                  <Button className="gap-2" asChild>
                    <Link href={project.repository} target="_blank">
                      <Github className="h-4 w-4" /> View code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="h-4 w-4" /> Live demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <Card className="rounded-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
                <Icon className="h-6 w-6" />
              </div>
              <dl className="mt-6 grid gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="mt-1 font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="mt-1 font-medium">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="outline" className="text-[11px]">
                        {item}
                      </Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-[1fr_1fr] md:px-6">
          <DetailBlock title="Overview" items={project.overview} />
          <DetailBlock title="Key Features" items={project.features} />
          <DetailBlock title="Technical Challenges" items={project.challenges} />
          <DetailBlock title="Outcomes" items={project.outcomes} />
        </div>
      </section>
    </main>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
