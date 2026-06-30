"use client";

import { useEffect, useState } from "react"; // 1. Added useState
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Star, Terminal } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "GitHub Stars", value: "8", icon: Star },
  { label: "Commits (2025)", value: "312", icon: GitCommit },
  { label: "Pull Requests", value: "24", icon: GitPullRequest },
  { label: "Core Stack", value: "PHP/JS", icon: Terminal },
];

export function GitHubStats() {
  // 2. Add a mounting state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="github" className="bg-muted/10 rounded-3xl my-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold tracking-tight"
            >
                Development Activity
            </motion.h2>
            <p className="text-muted-foreground">My open-source footprint and coding consistency.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center justify-center p-6 gap-2 text-center hover:border-primary/40 transition-all">
                <stat.icon className="h-5 w-5 text-primary mb-1" />
                <span className="text-2xl font-bold font-mono">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                  {stat.label}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <Card className="p-6 border-muted-foreground/10 bg-background/50">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">Contribution Heatmap</span>
                    <Link href="https://github.com/zakriabutt08" className="text-xs text-primary hover:underline" target="_blank">
                      View on GitHub →
                    </Link>
                </div>
                
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                    {/* 3. Use the mounted check here */}
                    {mounted ? (
                        Array.from({ length: 56 }).map((_, i) => {
                            const levels = ["bg-muted", "bg-emerald-900/30", "bg-emerald-700/50", "bg-emerald-500"];
                            const randomLevel = levels[Math.floor(Math.random() * levels.length)];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.01 }}
                                    className={`h-3 w-3 rounded-[2px] ${randomLevel} hover:ring-2 hover:ring-primary transition-all`}
                                />
                            );
                        })
                    ) : (
                        // Fallback: Gray squares while loading
                        Array.from({ length: 56 }).map((_, i) => (
                            <div key={i} className="h-3 w-3 rounded-[2px] bg-muted" />
                        ))
                    )}
                </div>
                {/* ... rest of the footer ... */}
            </div>
        </Card>
      </div>
    </Section>
  );
}
