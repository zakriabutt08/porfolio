"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Loader2 } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "zakriabutt08";
        
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
        const data = await response.json();
        
        const processedData = data
          .filter((repo: any) => !repo.fork) 
          .sort((a: any, b: any) => {
            const priority = ["rentify", "sanctum", "spatie"];
            const aMatch = priority.some(word => a.name.toLowerCase().includes(word));
            const bMatch = priority.some(word => b.name.toLowerCase().includes(word));
            if (aMatch && !bMatch) return -1;
            if (!aMatch && bMatch) return 1;
            return 0;
          })
          .slice(0, 6);

        setRepos(processedData);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <Section id="projects">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Featured Repositories</h2>
          <p className="text-muted-foreground">Live projects fetched from my GitHub.</p>
        </motion.div>

        {loading ? (
          <div className="flex h-60 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repos.map((repo, index) => {
              // Bento Grid logic: Make index 0 and 3 wider (span 2) for a visual flow
              const isLarge = index === 0 || index === 3;
              
              return (
                <motion.div
                  key={repo.id}
                  className={isLarge ? "md:col-span-2" : "md:col-span-1"}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-all duration-300">
                    {/* Visual Header */}
                    <div className="relative aspect-video bg-muted/30 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                      <Layers className="size-12 text-muted-foreground/20 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-500" />
                      
                      {/* GitHub Stars Badge */}
                      {repo.stargazers_count > 0 && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="text-[10px] bg-background/80 backdrop-blur-sm">
                            ★ {repo.stargazers_count}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-primary/30 text-primary">
                          {repo.language || "Backend"}
                        </Badge>
                        {repo.topics?.slice(0, 2).map((topic: string) => (
                          <Badge key={topic} variant="outline" className="text-[10px] px-2 py-0.5">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold capitalize">
                          {repo.name.replace(/-/g, " ")}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {repo.description || "Complex backend architecture and custom web implementation."}
                        </p>
                      </div>

                      <div className="mt-auto flex gap-3 pt-2">
                        <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                          <Link href={repo.html_url} target="_blank">
                            <Github className="h-3.5 w-3.5" /> Code
                          </Link>
                        </Button>
                        {repo.homepage && (
                          <Button size="sm" className="w-full gap-2" asChild>
                            <Link href={repo.homepage} target="_blank">
                              <ExternalLink className="h-3.5 w-3.5" /> Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
