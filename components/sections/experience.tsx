"use client";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge"; // Ensure you have this shadcn component
import { motion } from "framer-motion";

const experience = [
  {
    company: "Apex Web Designers",
    role: "Backend Engineer",
    period: "Apr 2026 - Present",
    description:
      "Developing backend systems using Laravel. Designing database schemas, constructing scalable RESTful APIs, and performing manual and automated testing to ensure system quality and stability.",
    skills: ["Laravel", "PHP", "REST APIs", "Database Design", "Manual Testing", "Automation Testing"],
  },
  {
    company: "Wisdom IT Solutions",
    role: "Junior Backend Engineer",
    period: "Feb 2024 - Mar 2026",
    description: 
      "Promoted to Junior Backend Engineer following a successful internship. Architecting robust server-side logic using Laravel, managing complex database schemas, and implementing secure authentication systems with Laravel Sanctum and Spatie.",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Spatie", "Sanctum", "Cashier"],
  },
  {
    company: "Wisdom IT Solutions",
    role: "Backend Developer Intern",
    period: "Nov 2023 - Jan 2024",
    description: 
      "Completed an intensive 3-month internship focused on PHP and Laravel ecosystems. Contributed to the development of custom web applications and learned industry-standard backend patterns and MVC architecture.",
    skills: ["PHP", "Laravel", "MySQL", "OOP"],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-8">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
        >
            Work Experience
        </motion.h2>

        <div className="flex flex-col gap-10 relative border-l border-border ml-3 pl-8 py-2">
          {experience.map((job, index) => (
            <motion.div
              // FIXED: Using a unique key by combining company and index
              key={`${job.company}-${index}`} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {job.period}
                    </span>
                </div>
                
                <div className="text-base text-primary font-semibold">{job.company}</div>
                
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {job.description}
                </p>

                {/* Skills Row: Highlighting your backend expertise */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-[11px] font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
