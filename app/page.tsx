import { Experience } from "@/components/experience";
import { Paragraph } from "@/components/paragraph";
import { experiences } from "../data/experiences";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 grid grid-cols-[30rem,1fr] gap-6">
      <header className="flex flex-col gap-6 sticky top-0 max-h-screen py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-zinc-100 font-bold text-5xl">
            Joao Pedro Duarte
          </h1>
          <h2 className="text-zinc-300 font-semibold text-2xl">
            Sr Software Engineer at iFood
          </h2>
        </div>
        <Paragraph className="max-w-96">
          A front-end engineer with a passion for building products that truly
          impact people's life.
        </Paragraph>
      </header>

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
