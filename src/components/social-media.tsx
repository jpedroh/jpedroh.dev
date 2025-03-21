import { type SocialMediaLink } from "../data/social-media";

export function SocialMediaList({
  socialMediaLinks,
}: {
  socialMediaLinks: Array<SocialMediaLink>;
}) {
  return (
    <ul className="flex gap-4 text-xs text-gray-200" aria-label="Social media">
      {socialMediaLinks.map((socialMediaLink) => (
        <SocialMediaLinkItem key={socialMediaLink.name} {...socialMediaLink} />
      ))}
    </ul>
  );
}

function SocialMediaLinkItem({ href, name, icon }: SocialMediaLink) {
  return (
    <a
      className="block hover:text-gray-50"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${name} (opens in a new tab)`}
    >
      <span className="sr-only">{name}</span>
      {icon}
    </a>
  );
}
