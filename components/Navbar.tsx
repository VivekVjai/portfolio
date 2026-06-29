"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_1px_28px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 xl:px-10">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold text-[var(--accent)] transition hover:opacity-75"
        >
          VIVEK
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              <span className="mr-1 text-[var(--accent)]">{item.number}</span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              type="button"
              aria-label="Toggle theme"
              title="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--foreground)] transition hover:bg-[var(--card-bg)] hover:text-[var(--accent)]"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" strokeWidth={1.8} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.8} />
              )}
            </button>
          )}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--accent)] rounded px-4 py-2 font-mono text-xs text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
