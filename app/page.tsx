import { Experience } from "@/components/experience";
import { Paragraph } from "@/components/paragraph";
import { Header } from "@/components/header";
import { experiences } from "@/data/experiences";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 grid grid-cols-[30rem,1fr] gap-6">
      <Header.Root>
        <Header.Title>
            Joao Pedro Duarte
        </Header.Title>
        <Header.Subtitle>
            Sr Software Engineer at iFood
        </Header.Subtitle>
        <Header.Paragraph>
          A front-end engineer with a passion for building products that truly
          impact people&apos;s life.
        </Header.Paragraph>
      </Header.Root>

      <main className="flex flex-col gap-24 py-24">
        <section className="flex flex-col gap-4">
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
        <section>
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
