"use client";

import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import about from "@/data/about.md";
import { experiences } from "@/data/experiences";
import { About } from "../components/about";
import { education } from "../data/education";
import { Education } from "../components/education";
import { SocialMediaLink, SocialMediaList } from "../components/social-media";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { TwitterIcon } from "../icons/twitter";
import { socialMediasLinks } from "../data/social-media";

const sections = [
  { selector: "#about", title: "About" },
  { selector: "#education", title: "Education" },
  { selector: "#experiences", title: "Professional experience" },
];

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 grid grid-cols-[30rem,1fr] gap-20">
      <Header.Root>
        <div className="flex flex-col gap-4">
          <Header.Title>Joao Pedro Duarte</Header.Title>
          <Header.Subtitle>Sr Software Engineer at iFood</Header.Subtitle>
          <Header.Paragraph>
            A front-end engineer with a passion for building products that truly
            impact people&apos;s life.
          </Header.Paragraph>
        </div>

        <Nav sections={sections} />

        <SocialMediaList socialMediaLinks={socialMediasLinks} />
      </Header.Root>

      <main className="flex flex-col gap-32 py-24">
        <section id="about" className="flex flex-col gap-4">
          <About markdownText={about} />
        </section>

        <section id="education">
          <ol className="flex flex-col gap-12">
            {education.map((education) => (
              <li key={education.title}>
                <Education education={education} />
              </li>
            ))}
          </ol>
        </section>

        <section id="experiences">
          <ol className="flex flex-col gap-12">
            {experiences.map((experience) => (
              <li key={experience.title}>
                <Experience experience={experience} />
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
