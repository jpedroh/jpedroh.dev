"use client";

import { ReactNode, useState, useEffect, MouseEventHandler } from "react";
import { twc } from "react-twc";

export const Nav = twc.nav`flex flex-col gap-4`;

export function NavLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const [isActive, setVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      setVisible(visibleEntry?.target.id === href.substring(1));
    }, options);

    const target = document.querySelector(href)!;
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [href]);

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
