import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { aboutParagraphs, technologies } from "@/lib/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <SectionHeading number="01." title="About Me" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.7fr] lg:items-start">
        <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="about-photo-frame">
            <Image
              src="/images/portfolio-image.png"
              alt="Portrait of Vivek Vijai"
              width={1122}
              height={1402}
              className="about-photo-image"
              sizes="(min-width: 1024px) 320px, 80vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="mb-5 text-sm font-semibold text-[var(--foreground)]">
          Technologies I work with:
        </p>
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="tech-pill">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
