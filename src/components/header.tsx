"use client";

import { twc } from "react-twc";
import { Paragraph } from "./paragraph";

export const Header = {
  Root: twc.header`flex flex-col gap-4 md:sticky top-0 max-h-screen py-12 md:py-24 justify-between h-full`,
  Title: twc.h1`text-zinc-100 font-bold text-5xl`,
  Subtitle: twc.h2`text-zinc-300 font-semibold text-2xl`,
  Paragraph: twc(Paragraph)`max-w-96`,
};
