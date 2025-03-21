import { twc } from "react-twc";
import { type Experience as ExperienceDto } from "../data/experiences";
import { Markdown } from "./markdown";

const Styles = {
  Root: twc.div`flex flex-col`,
  Period: twc.header`text-zinc-500 text-xs font-bold uppercase mb-1`,
  Title: twc.h3`text-zinc-300 font-semibold text-xl mb-2`,
  Description: Markdown,
  Technologies: twc.ul`flex flex-wrap gap-2 mt-2`,
  Technology: twc.li`bg-blue-800/50 py-1 px-3 rounded-xl text-blue-100 text-xs`,
};

export function Experience({ experience }: { experience: ExperienceDto }) {
  return (
    <Styles.Root key={experience.title}>
      <Styles.Period>
        {experience.period.from} - {experience.period.to}
      </Styles.Period>
      <Styles.Title>
        {experience.title} - {experience.company.name}
      </Styles.Title>
      <Styles.Description>{experience.description}</Styles.Description>
      <Styles.Technologies>
        {experience.technologies.map((technology) => (
          <Styles.Technology key={technology}>{technology}</Styles.Technology>
        ))}
      </Styles.Technologies>
    </Styles.Root>
  );
}
