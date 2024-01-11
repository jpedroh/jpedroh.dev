"use client";

import { twc } from "react-twc";
import { Paragraph } from "./paragraph";
import { MouseEventHandler, ReactNode } from "react";

export const Header = {
  Root: twc.header`flex flex-col gap-4 sticky top-0 max-h-screen py-24`,
  Title: twc.h1`text-zinc-100 font-bold text-5xl`,
  Subtitle: twc.h2`text-zinc-300 font-semibold text-2xl`,
  Paragraph: twc(Paragraph)`max-w-96`,
  Nav: {
    Root: twc.nav`flex flex-col gap-4`,
    Link: NavLink,
  },
};

function NavLink({
  children,
  href,
  isActive,
}: {
  children: ReactNode;
  href: string;
  isActive: boolean;
}) {
  const navigateToSection: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    const element = document.querySelector(href)!;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      onClick={navigateToSection}
      href="#about"
      className={isActive ? "text-blue-500" : ""}
    >
      {children}
    </a>
  );
}
