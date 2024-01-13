export type Education = {
  title: string;
  institution: { name: string; url: string };
  description: string;
};

export const education: Education[] = [
  {
    title: "MSc in Software Engineering",
    institution: { name: "CIn (UFPE)", url: "https://cin.ufpe.br" },
    description:
      "My research is focused on code merging tools, more specifically structured and semi-structured merge tools.",
  },
  {
    title: "B.Sc. in Computer Science",
    institution: { name: "CIn (UFPE)", url: "https://cin.ufpe.br" },
    description: "Graduated with honours (9.69/10)",
  },
];
