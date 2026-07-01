import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects, otherProjects } from "@/lib/portfolio-data";

function ProjectVisual({ type, title }: { type: string; title: string }) {
  return (
    <div className="project-visual" role="img" aria-label={`${title} project preview`}>
      <div className="project-visual__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-visual__content">
        {type === "checkout" ? (
          <>
            <div className="project-visual__route">cart / slot / payment</div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Cart", "Date", "Stripe"].map((item) => (
                <div key={item} className="project-visual__tile">
                  <span>{item}</span>
                  <strong />
                </div>
              ))}
            </div>
            <div className="project-visual__code">
              <span>POST /api/orders/checkout</span>
              <span>idempotency_key verified</span>
              <span>swish_payment_intent created</span>
            </div>
          </>
        ) : (
          <>
            <div className="project-visual__route">tenant scoped architecture</div>
            <div className="project-visual__nodes">
              {["Admin", "Seller", "Customer", "Tenant_ID"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-visual__code">
              <span>Tenant model centralizes access</span>
              <span>RBAC checks isolate rows</span>
              <span>Gunicorn + Docker on Azure</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading number="03." title="Projects" />

      <div className="mt-12 space-y-24">
        <div>
          <h3 className="mb-10 text-2xl font-semibold text-[var(--foreground)]">Featured Projects</h3>
          <div className="space-y-20">
            {featuredProjects.map((project, index) => {
              const href = "href" in project ? project.href : undefined;
              const visual = <ProjectVisual type={project.visual} title={project.title} />;
              const copy = (
                <div className="flex flex-col justify-center">
                  <p className="font-mono text-sm text-[var(--accent)]">{project.label}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <h4 className="text-3xl font-semibold text-[var(--foreground)]">{project.title}</h4>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} external link`}
                        className="text-[var(--muted)] transition hover:text-[var(--accent)]"
                      >
                        <ExternalLink className="h-5 w-5" strokeWidth={1.8} />
                      </a>
                    ) : null}
                  </div>
                  <div className="mt-5 border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm backdrop-blur-md rounded-2xl">
                    <p className="leading-8 text-[var(--muted)]">{project.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );

              return (
                <article
                  key={project.title}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center"
                >
                  {index % 2 === 0 ? (
                    <>
                      {visual}
                      {copy}
                    </>
                  ) : (
                    <>
                      {copy}
                      {visual}
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-semibold text-[var(--foreground)]">
            Other Notable Projects
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {otherProjects.map((project) => {
              const github =
                "github" in project && typeof project.github === "string"
                  ? project.github
                  : undefined;
              const preview =
                "preview" in project && typeof project.preview === "string"
                  ? project.preview
                  : undefined;
              const status =
                "status" in project && typeof project.status === "string"
                  ? project.status
                  : undefined;

              return (
                <article
                  key={project.title}
                  className="border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-[var(--accent)] rounded-2xl"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Folder className="h-8 w-8 text-[var(--accent)]" strokeWidth={1.6} />
                    {github || preview ? (
                      <div className="flex items-center gap-4 text-[var(--muted)]">
                        {github ? (
                          <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                            className="transition hover:text-[var(--accent)]"
                          >
                            <FaGithub className="h-5 w-5" />
                          </a>
                        ) : null}
                        {preview ? (
                          <a
                            href={preview}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} preview`}
                            className="transition hover:text-[var(--accent)]"
                          >
                            <ExternalLink className="h-5 w-5" strokeWidth={1.8} />
                          </a>
                        ) : null}
                      </div>
                    ) : status ? (
                      <span className="tech-pill text-[11px]">{status}</span>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl font-semibold text-[var(--foreground)]">{project.title}</h4>
                    {status && (github || preview) ? (
                      <span className="tech-pill text-[11px]">{status}</span>
                    ) : null}
                  </div>
                  <p className="mt-3 min-h-[88px] leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-pill text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
