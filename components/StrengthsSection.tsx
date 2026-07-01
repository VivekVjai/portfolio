import { Briefcase, RefreshCw, Scale } from "lucide-react";
import { strengths } from "@/lib/portfolio-data";

const icons = {
  briefcase: Briefcase,
  scale: Scale,
  refresh: RefreshCw
};

export default function StrengthsSection() {
  return (
    <section
      aria-labelledby="strengths-heading"
      className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-0"
    >
      <h2 id="strengths-heading" className="sr-only">
        Working Style
      </h2>
      <div className="grid gap-5 md:grid-cols-3">
        {strengths.map((strength) => {
          const Icon = icons[strength.icon as keyof typeof icons];

          return (
            <article
              key={strength.title}
              className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-md rounded-2xl"
            >
              <Icon className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.8} />
              <h3 className="mt-5 text-lg font-semibold text-[var(--foreground)]">
                {strength.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{strength.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
