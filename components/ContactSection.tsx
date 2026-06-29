import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/portfolio-data";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedinIn className="h-5 w-5" /> },
  { label: "GitHub", href: profile.github, icon: <FaGithub className="h-5 w-5" /> },
  {
    label: "Backend Lab",
    href: profile.customLink,
    icon: <Code2 className="h-5 w-5" strokeWidth={1.8} />
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="portfolio-section pb-12">
      <SectionHeading number="04." title="Contact" className="mx-auto max-w-3xl" />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Get In Touch</h2>
        <p className="mt-6 leading-8 text-[var(--muted)]">
          I am based in the Greater Stockholm Metropolitan Area and open to backend developer
          roles across Sweden. If you are building with Python, Django, APIs, payments,
          Azure, or product-led backend systems, I would love to talk.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="accent-button mt-10 inline-flex px-10 py-4 font-mono text-sm"
        >
          Say Hello
        </a>

        <div className="mt-20 flex items-center gap-7 text-[var(--muted)]">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="transition hover:-translate-y-1 hover:text-[var(--accent)]"
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="mt-7 font-mono text-xs text-[var(--muted)]">
          Designed & Built by {profile.name}
        </p>
      </div>
    </section>
  );
}
