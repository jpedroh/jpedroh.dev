"use client";

import { Experience } from "@/components/experience";
import { Paragraph } from "@/components/paragraph";
import { Header } from "@/components/header";
import { experiences } from "@/data/experiences";
import { MouseEventHandler, useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "96px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setVisible(visibleEntry.target.id);
      }

      entries.forEach((entry) => console.log(entry));
    }, options);

    const experience = document.querySelector("#experiences")!;
    const about = document.querySelector("#about")!;

    observer.observe(experience);
    observer.observe(about);
    return () => {
      observer.unobserve(experience);
      observer.unobserve(about);
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 grid grid-cols-[30rem,1fr] gap-6">
      <Header.Root>
        <Header.Title>Joao Pedro Duarte</Header.Title>
        <Header.Subtitle>Sr Software Engineer at iFood</Header.Subtitle>
        <Header.Paragraph>
          A front-end engineer with a passion for building products that truly
          impact people&apos;s life.
        </Header.Paragraph>

        <Header.Nav.Root>
          <Header.Nav.Link isActive={visible === "about"} href="#about">About</Header.Nav.Link>
          <Header.Nav.Link isActive={visible === "experiences"} href="#experiences">Experiences</Header.Nav.Link>
        </Header.Nav.Root>
      </Header.Root>

      <main className="flex flex-col gap-24 py-24">
        <section id="about" className="flex flex-col gap-4">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            feugiat scelerisque eros eget eleifend. Nunc nec augue sagittis,
            aliquet nunc in, blandit lectus. Phasellus dignissim laoreet
            feugiat. Morbi ut velit ornare, interdum sapien vitae, feugiat
            justo. Nam ac massa tellus. Integer ut nisl sit amet purus egestas
            egestas id a turpis. Sed gravida vel elit id molestie.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            feugiat scelerisque eros eget eleifend. Nunc nec augue sagittis,
            aliquet nunc in, blandit lectus. Phasellus dignissim laoreet
            feugiat. Morbi ut velit ornare, interdum sapien vitae, feugiat
            justo. Nam ac massa tellus. Integer ut nisl sit amet purus egestas
            egestas id a turpis. Sed gravida vel elit id molestie.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            feugiat scelerisque eros eget eleifend. Nunc nec augue sagittis,
            aliquet nunc in, blandit lectus. Phasellus dignissim laoreet
            feugiat. Morbi ut velit ornare, interdum sapien vitae, feugiat
            justo. Nam ac massa tellus. Integer ut nisl sit amet purus egestas
            egestas id a turpis. Sed gravida vel elit id molestie.
          </Paragraph>
        </section>
        <section id="experiences">
          <ol className="flex flex-col gap-8">
            {experiences.map((experience) => (
              <Experience.Root key={experience.title}>
                <Experience.Period>
                  {experience.period.from} - {experience.period.to}
                </Experience.Period>
                <Experience.Title>{experience.title}</Experience.Title>
                <Experience.Description>
                  {experience.description}
                </Experience.Description>
              </Experience.Root>
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
