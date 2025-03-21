import { twc } from "react-twc";
import { type Education as EducationDto } from "../data/education";
import { Paragraph } from "./paragraph";

const Styles = {
  Root: twc.div`flex flex-col`,
  Title: twc.h3`text-zinc-300 font-semibold text-xl mb-2`,
  Description: Paragraph,
};

export function Education({ education }: { education: EducationDto }) {
  return (
    <Styles.Root key={education.title}>
      <Styles.Title>
        {education.title} - {education.institution.name}
      </Styles.Title>
      <Styles.Description>{education.description}</Styles.Description>
    </Styles.Root>
  );
}
