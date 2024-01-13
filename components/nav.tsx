"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

type Section = {
  selector: string;
  title: string;
};

export function Nav({ sections }: { sections: Section[] }) {
  const [visible, setVisible] = useState(sections[0].selector);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setVisible(visibleEntry.target.id);
      }
    }, options);

    const targets = sections.map(
      (section) => document.querySelector(section.selector)!,
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [sections]);

  return (
    <nav className="flex flex-col gap-4">
      {sections.map((section) => (
        <NavLink
          isActive={visible === section.selector.substring(1)}
          href={section.selector}
          key={section.selector}
        >
          {section.title}
        </NavLink>
      ))}
    </nav>
  );
}

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
      href={href}
      className={[
        "transition-all",
        isActive ? "text-white font-bold text-2xl" : "text-gray-500",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
