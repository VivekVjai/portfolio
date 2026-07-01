import { ArrowRight } from "lucide-react";
import { hero, profile } from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-28 sm:px-8 lg:px-0"
    >
      <div className="hero-glass w-full max-w-3xl p-8 sm:p-10">
        <p className="mb-4 font-mono text-sm text-[var(--muted)]">Hi, I&apos;m</p>
        <h1
          aria-label={profile.name}
          className="text-5xl font-bold leading-[1.04] text-[var(--accent)] sm:text-6xl lg:text-[72px]"
        >
          {profile.name}
        </h1>
        <h2
          className="mt-4 min-h-[2.45em] text-3xl font-bold leading-tight text-[var(--foreground)] sm:min-h-[1.3em] sm:text-4xl lg:text-[40px]"
        >
          {hero.subtitle}
        </h2>
        <p className="mt-7 max-w-[590px] text-base leading-8 text-[var(--muted)]">{hero.bio}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="accent-button inline-flex px-8 py-4 font-mono text-sm">
            View My Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-8 py-4 font-mono text-sm text-[var(--foreground)] backdrop-blur-md transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Read my story
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
