import { Markdown } from "./markdown";

const about = `
My journey into the world of technology began in the year 2012. At that time, I wanted to personalize my Blogger blog templates and functionalities. Fast-forward to today, and that spark has evolved into a passion for technology both professionally and academically.

On the professional front, I currently work at [iFood](https://institucional.ifood.com.br/en/), the largest food tech in Latin America, where I architect, build, and maintain products that impact the daily operations of over 350,000 restaurants in Brazil.

Academically, I am a Master's student in Software Engineering at the [Informatics Center](http://www.cin.ufpe.br/) of the Federal University of Pernambuco, Brazil. My research is focused on building, evolving, and experimenting with advanced code merging tools.
`;

export function About() {
  return <Markdown>{about}</Markdown>;
}
