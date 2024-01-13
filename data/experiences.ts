export type Experience = {
  period: { from: string; to: string };
  title: string;
  company: { name: string; url: string };
  description: string;
  technologies: Array<string>;
};

export const experiences: Experience[] = [
  {
    period: { from: "jun/2023", to: "current" },
    title: "Sr Software Engineer",
    company: { name: "iFood", url: "https://institucional.ifood.com.br/en/" },
    description:
      "Working with React, React Native, NodeJS, AWS, Terraform, Docker, Kubernetes, and more.",
    technologies: [
      "React",
      "Micro-frontends",
      "AWS",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    period: { from: "sep/2021", to: "feb/2023" },
    title: "Software Engineer",
    company: { name: "CESAR", url: "https://www.cesar.org.br/web/english" },
    description:
      "Worked on designing and implementing frontend solutions for foreign costumers. Coordinated the migration of a legacy application using micro-frontends that impacted more than 15,000 users.",
    technologies: ["Angular", "React", "Micro-frontends"],
  },
];
