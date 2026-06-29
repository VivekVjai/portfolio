import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/lib/portfolio-data";

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn className="h-5 w-5" /> },
  { label: "GitHub", href: profile.github, icon: <FaGithub className="h-5 w-5" /> },
  {
    label: "Backend Lab",
    href: profile.customLink,
    icon: <Code2 className="h-5 w-5" strokeWidth={1.8} />
  }
];

export default function SocialSidebar() {
  return (
    <aside
      aria-label="Social links"
      className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-5 lg:flex"
    >
      <div className="flex flex-col items-center gap-5">
        {links.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="text-[var(--foreground)] opacity-70 transition hover:-translate-y-1 hover:text-[var(--accent)] hover:opacity-100"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="h-24 w-px bg-[var(--foreground)] opacity-25" />
    </aside>
  );
}
