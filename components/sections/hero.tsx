"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, Github, Database, Code2 } from "lucide-react"; // Added backend-relevant icons
import Link from "next/link";

export function Hero() {
  return (
    <Section id="hero" className="flex min-h-[80vh] flex-col justify-center">
      <div className="flex max-w-4xl flex-col gap-6">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-fit rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m <span className="text-primary">Muhammad Zakria</span>. <br />
          <span className="text-muted-foreground text-4xl sm:text-6xl">Backend Systems Engineer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
        >
         with 1+ year of experience in Laravel, specializing in building scalable RESTful APIs, database
        design, and performance optimization. Skilled in debugging and writing clean, maintainable code with a strong
        understanding of SDLC. Experienced in manual and automated API testing using Postman and Playwright to
        ensure application reliability and quality. Passionate about backend development and eager to contribute to
        dynamic teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="#projects">
            <Button size="lg" className="gap-2 px-8">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || "zaki-butt"}`} target="_blank">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-4 w-4" /> GitHub Profile
            </Button>
          </Link>
        </motion.div>

        {/* Quick Tech Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4" /> Database Design
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4" /> API Development
          </div>
        </motion.div>
      </div>
    </Section>
  );
}