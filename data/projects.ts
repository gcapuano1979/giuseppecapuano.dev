export interface Project {
  title: string;
  type: "Professional" | "Open Source";
  description: string;
  technologies: string[];
  github?: string;
  details?: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Backend Platform",
    type: "Professional",
    description:
      "Backend platform designed to support business workflows through scalable REST APIs and enterprise integrations.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
      "Docker",
    ],
    details:
      "Architecture focused on maintainability, security and integration with external systems.",
  },
  {
    title: "Angular Business Dashboard",
    type: "Professional",
    description:
      "Modern frontend application providing complex user interfaces and data visualization.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "REST API",
    ],
    details:
      "Component-based architecture with focus on usability and performance.",
  },
  {
    title: "Personal Portfolio",
    type: "Open Source",
    description:
      "My personal developer portfolio built with modern frontend technologies.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/gcapuano1979/giuseppecapuano.dev",
  },
];