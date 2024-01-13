"use client";

import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Nav, NavLink } from "@/components/nav";
import { Paragraph } from "@/components/paragraph";
import about from "@/data/about.md";
import { experiences } from "@/data/experiences";
import { About } from "../components/about";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 grid grid-cols-[30rem,1fr] gap-20">
      <Header.Root>
        <Header.Title>Joao Pedro Duarte</Header.Title>
        <Header.Subtitle>Sr Software Engineer at iFood</Header.Subtitle>
        <Header.Paragraph>
          A front-end engineer with a passion for building products that truly
          impact people&apos;s life.
        </Header.Paragraph>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experiences">Experiences</NavLink>
        </Nav>
      </Header.Root>

      <main className="flex flex-col gap-32 py-24">
        <section id="about" className="flex flex-col gap-4">
          <About markdownText={about} />
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

        <footer>
          <Paragraph>Built with Next.js</Paragraph>
        </footer>
      </main>
    </div>
  );
}
