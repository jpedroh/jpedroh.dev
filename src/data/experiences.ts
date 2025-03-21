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
      "Architect, build, and maintain products that impact the daily operations of over 350,000 restaurants in Brazil. Also, I'm responsible for mentoring and coaching junior developers.",
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
    technologies: ["Angular", "React", "Micro-frontends", "CI/CD"],
  },
  {
    period: { from: "jun/2021", to: "aug/2021" },
    title: "Internship in Software Engineer",
    company: { name: "Viitra", url: "https://viitra.com/" },
    description:
      "I've contributed in the development of a process mining tool for the [National Council of Justice](https://www.cnj.jus.br/) using Angular. Additionally, I implemented automated integration test suites using Cypress, configured GitLab CI/CD pipelines, and conducted deployments using Docker containers.",
    technologies: ["Angular", "Docker", "CI/CD", "Gitlab", "Cypress"],
  },
];
