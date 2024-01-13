import { ReactNode } from "react";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { TwitterIcon } from "../icons/twitter";

export type SocialMediaLink = {
  name: string;
  href: string;
  icon: ReactNode;
};

export const socialMediasLinks: Array<SocialMediaLink> = [
  {
    href: "https://github.com/jpedroh",
    name: "GitHub",
    icon: <GithubIcon />,
  },
  {
    href: "https://linkedin.com/in/jpedroh",
    name: "Linkedin",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://twitter.com/eusouojotape",
    name: "Twitter",
    icon: <TwitterIcon />,
  },
];
