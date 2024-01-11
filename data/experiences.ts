type Experience = {
  period: { from: string; to: string };
  title: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    period: { from: "jun/2023", to: "current" },
    title: "Sr Software Engineer - iFood",
    description:
      "Working with React, React Native, NodeJS, AWS, Terraform, Docker, Kubernetes, and more.",
  },
  {
    period: { from: "sep/2021", to: "feb/2023" },
    title: "Software Engineer - CESAR",
    description:
      "Working with React, React Native, NodeJS, AWS, Terraform, Docker, Kubernetes, and more.",
  },
];
