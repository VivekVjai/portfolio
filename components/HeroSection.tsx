"use client";

import { useEffect, useState } from "react";
import { hero, profile } from "@/lib/portfolio-data";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = hero.roles[roleIndex];
    const roleIsComplete = typedRole === currentRole && !isDeleting;
    const roleIsCleared = typedRole === "" && isDeleting;

    const timeout = window.setTimeout(
      () => {
        if (roleIsComplete) {
          setIsDeleting(true);
          return;
        }

        if (roleIsCleared) {
          setIsDeleting(false);
          setRoleIndex((currentIndex) => (currentIndex + 1) % hero.roles.length);
          return;
        }

        const nextLength = typedRole.length + (isDeleting ? -1 : 1);
        setTypedRole(currentRole.slice(0, nextLength));
      },
      roleIsComplete ? 1300 : roleIsCleared ? 260 : isDeleting ? 38 : 72
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, typedRole]);

  useEffect(() => {
    const currentRole = hero.roles[roleIndex];

    if (!currentRole.startsWith(typedRole)) {
      setTypedRole("");
      setIsDeleting(false);
    }
  }, [roleIndex, typedRole]);

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-28 sm:px-8 lg:px-0"
    >
      <div className="hero-glass max-w-3xl p-8 sm:p-10">
        <p className="mb-4 font-mono text-sm text-[var(--muted)]">Hi, I&apos;m</p>
        <h1
          aria-label={profile.name}
          className="text-5xl font-bold leading-[1.04] text-[var(--accent)] sm:text-6xl lg:text-[72px]"
        >
          {profile.name}
        </h1>
        <h2
          aria-live="polite"
          className="mt-4 min-h-[2.45em] text-3xl font-bold leading-tight text-[var(--foreground)] sm:min-h-[1.3em] sm:text-4xl lg:text-[40px]"
        >
          {typedRole}
          <span className="typewriter-cursor" aria-hidden="true" />
        </h2>
        <p className="mt-7 max-w-[590px] text-base leading-8 text-[var(--muted)]">{hero.bio}</p>
        <a
          href="#projects"
          className="accent-button mt-10 inline-flex px-8 py-4 font-mono text-sm"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
