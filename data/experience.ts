export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    period: "2025 - Present",
    role: "Senior Full Stack Engineer",
    company: "Enterprise Healthcare Platforms",
    description:
      "Development and maintenance of enterprise applications and integrations for complex business workflows.",
    technologies: [
      "Java",
      "Spring",
      "Hibernate",
      "Angular",
      "Oracle",
      "REST API",
    ],
  },
  {
    period: "2019 - 2025",
    role: "Senior Software Engineer",
    company: "Cybersecurity & Public Administration",
    description:
      "Design and development of secure software platforms and portals with focus on reliability, data protection and system integration.",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Angular",
      "TypeScript",
      "MySQL",
      "REST",
    ],
  },
  {
    period: "2002 - 2019",
    role: "Software Engineer",
    company: "Mission Critical Systems",
    description:
      "Development and integration of embedded and real-time software systems for defense, transportation and industrial domains.",
    technologies: [
      "C++",
      "Linux",
      "QNX",
      "Embedded Systems",
      "Real-Time Software",
    ],
  },
];