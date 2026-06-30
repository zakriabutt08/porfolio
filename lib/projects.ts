import { Database, KeyRound, Layers3, ShieldCheck } from "lucide-react";

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  status: "Live" | "In progress" | "Case study";
  role: string;
  year: string;
  category: string;
  stack: string[];
  keywords: string[];
  repository?: string;
  demo?: string;
  icon: typeof Database;
  overview: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "rentify",
    title: "Rentify",
    subtitle: "Real estate platform for rentals, sales, accounts, and agreements",
    summary:
      "A Python and Django real estate platform built for companies that manage rented and for-sale properties without relying on third-party agents.",
    status: "Case study",
    role: "Backend Engineer",
    year: "2026",
    category: "Django Real Estate Platform",
    stack: ["Python", "Django", "Django REST Framework", "React", "MYSQL", "REST APIs"],
    keywords: ["rentify", "rental", "property", "real estate"],
    icon: Database,
    overview: [
      "Rentify is designed for real estate companies that want to manage rental properties, sale properties, customers, agreements, and internal financial accounts from one system.",
      "The core idea is to remove the middleman from property dealing. Customers deal directly with the company, which reduces fraud risk and improves transparency.",
      "Every customer who rents or buys a property can have a secure agreement record based on stamp-paper documentation.",
    ],
    features: [
      "Rental and sale property upload workflows",
      "Company-side property management dashboard foundations",
      "Customer portal for direct customer-to-company interaction",
      "Agreement module for rental and purchase agreements based on stamp-paper records",
      "Internal financial account handling for company property operations",
      "Structured property, customer, agreement, and account data models",
    ],
    challenges: [
      "Designing a property system that supports both rented and for-sale properties",
      "Connecting customer records, property records, financial accounts, and agreement documents cleanly",
      "Reducing fraud risk by replacing agent-led workflows with direct company-managed workflows",
      "Keeping stamp-paper agreement data secure, traceable, and easy for customers to understand",
    ],
    outcomes: [
      "Created a real estate management system with stronger transparency between company and customer",
      "Reduced dependency on agents by supporting direct customer dealings through the platform",
      "Added agreement and account modules that make the product more than a basic property listing site",
      "Built a strong Django case study around business workflows, trust, and backend data design",
    ],
  },
  {
    slug: "drf-auth-starter",
    title: "DRF Auth Starter",
    subtitle: "Authentication API starter for Django applications",
    summary:
      "A secure Python and Django REST Framework authentication API with registration, login, token handling, and protected endpoints.",
    status: "Case study",
    role: "Backend Developer",
    year: "2025",
    category: "Django Authentication",
    stack: ["Python", "Django", "Django REST Framework", "JWT Auth", "PostgreSQL", "Postman"],
    keywords: ["drf", "django", "auth", "authentication", "token"],
    icon: KeyRound,
    overview: [
      "This project explains how I structure authentication in Django REST Framework when a frontend needs a reliable API authentication layer.",
      "It highlights security basics, route protection, clean validation, and repeatable testing with Postman.",
    ],
    features: [
      "User registration and login endpoints",
      "Token issuing and refresh workflow",
      "Protected profile and logout routes",
      "Centralized validation and error responses",
      "Postman testing workflow for auth scenarios",
    ],
    challenges: [
      "Keeping authentication responses simple for frontend usage",
      "Handling invalid tokens and validation errors consistently",
      "Designing an auth starter that can be reused across projects",
    ],
    outcomes: [
      "Produced a reusable authentication base for Django REST Framework projects",
      "Reduced setup time for new backend applications",
      "Made security and testing decisions visible in the case study",
    ],
  },
  {
    slug: "spatie-permission-system",
    title: "Spatie Permission System",
    subtitle: "Role and permission architecture",
    summary:
      "A Laravel permissions implementation that shows how roles, permissions, guards, and admin access can be structured.",
    status: "Case study",
    role: "Backend Developer",
    year: "2025",
    category: "Access Control",
    stack: ["Laravel", "Spatie", "PHP", "MySQL", "Policies"],
    keywords: ["spatie", "permission", "roles", "rbac"],
    icon: ShieldCheck,
    overview: [
      "This case study focuses on role-based access control in Laravel using Spatie permissions.",
      "It is designed to show practical authorization decisions instead of only listing package installation steps.",
    ],
    features: [
      "Role and permission setup",
      "Protected admin workflows",
      "Permission-aware route and controller checks",
      "Seeded roles for predictable local setup",
      "Clear separation between authentication and authorization",
    ],
    challenges: [
      "Avoiding hard-coded access rules across controllers",
      "Keeping permissions understandable as features grow",
      "Designing defaults that work for both admin and user roles",
    ],
    outcomes: [
      "Built a clean RBAC foundation for Laravel applications",
      "Improved maintainability by centralizing access decisions",
      "Created a strong example of backend architecture beyond CRUD",
    ],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    subtitle: "Personal developer portfolio",
    summary:
      "A Next.js portfolio that combines live GitHub data, project case studies, experience, and contact flows.",
    status: "Live",
    role: "Full Stack Developer",
    year: "2026",
    category: "Portfolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub API"],
    keywords: ["portfolio", "next", "react"],
    icon: Layers3,
    overview: [
      "This portfolio is the presentation layer for my backend work, experience, and live GitHub activity.",
      "The goal is to make technical work easier to evaluate through clear project pages and direct links.",
    ],
    features: [
      "Live GitHub repository fetching",
      "Dedicated project listing page",
      "Case study pages for selected projects",
      "Responsive dark interface",
      "Contact and social links",
    ],
    challenges: [
      "Balancing live GitHub data with curated project explanations",
      "Keeping the UI simple while adding more depth",
      "Making the project structure easy to extend later",
    ],
    outcomes: [
      "Turned a one-page portfolio into a multi-page project hub",
      "Added space for project storytelling, not only repository links",
      "Created a maintainable data file for future projects",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectForRepoName(repoName: string) {
  const normalizedName = repoName.toLowerCase();

  return portfolioProjects.find((project) =>
    project.keywords.some((keyword) => normalizedName.includes(keyword))
  );
}
