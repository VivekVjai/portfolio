"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/portfolio-data";

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];
  const bullets =
    "bullets" in activeExperience && Array.isArray(activeExperience.bullets)
      ? activeExperience.bullets
      : [];

  return (
    <section id="experience" className="portfolio-section">
      <SectionHeading number="02." title="Experience" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr]">
        <div
          className="flex overflow-x-auto border-b border-[var(--card-border)] lg:block lg:overflow-visible lg:border-b-0 lg:border-l"
          role="tablist"
          aria-label="Experience companies"
        >
          {experiences.map((experience, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={experience.company}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`min-w-fit border-b-2 px-5 py-3 text-left font-mono text-sm transition lg:w-full lg:border-b-0 lg:border-l-2 ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--card-bg)] text-[var(--accent)] lg:-ml-px"
                    : "border-transparent text-[var(--muted)] hover:bg-[var(--card-bg)] hover:text-[var(--accent)]"
                }`}
              >
                {experience.company}
              </button>
            );
          })}
        </div>

        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeExperience.company}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-md sm:p-8 rounded-2xl"
            >
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--accent)] bg-[var(--card-bg)] font-mono text-xl font-semibold text-[var(--accent)] rounded-xl">
                  {activeExperience.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                    {activeExperience.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-[var(--accent)]">
                    {activeExperience.company} / {activeExperience.location}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {activeExperience.dateRange} / {activeExperience.duration}
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
                {activeExperience.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {bullets.length > 0 ? (
                  <ul className="space-y-3 pt-1">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-7">
                        <span className="mt-[0.68rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
