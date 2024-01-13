import Markdown from "react-markdown";
import { Link } from "./link";
import { Paragraph } from "./paragraph";

export function About({ markdownText }: { markdownText: string }) {
  {
    /*@ts-expect-error Broken typings on binding */
  }
  return (
    <Markdown components={{ p: Paragraph, a: Link }}>{markdownText}</Markdown>
  );
}
