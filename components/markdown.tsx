import ReactMarkdown from "react-markdown";
import { Link } from "./link";
import { Paragraph } from "./paragraph";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        /*@ts-expect-error Broken typings on binding */
        p: Paragraph,
        /*@ts-expect-error Broken typings on binding */
        a: (props) => <Link target={"_blank"} {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
