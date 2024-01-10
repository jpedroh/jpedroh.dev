import { ReactNode } from "react";
import { twc } from "react-twc";
import { Paragraph } from "./paragraph";

export const Experience = {
    Root: ({ children }: { children: ReactNode }) => <li><div className='flex flex-col'>{children}</div></li>,
    Period: twc.header`text-zinc-500 text-xs font-bold uppercase mb-1`,
    Title: twc.h3`text-zinc-300 font-semibold text-xl mb-2`,
    Description: Paragraph,
}