type SectionHeadingProps = {
  number: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  number,
  title,
  className = ""
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <h2 className="flex shrink-0 items-baseline gap-2 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
        <span className="font-mono text-base font-medium text-[var(--accent)]">{number}</span>
        <span>{title}</span>
      </h2>
      <div className="h-px flex-1 bg-[var(--card-border)]" />
    </div>
  );
}
