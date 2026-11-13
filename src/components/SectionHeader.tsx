interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  meta?: string;
}

export function SectionHeader({ index, title, subtitle, meta }: SectionHeaderProps) {
  return (
    <div className="mb-8 border-b border-zinc-200 pb-4 dark:border-zinc-800/90">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
            {index} //
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
            {title}
          </h2>
        </div>
        {meta ? (
          <span className="font-mono text-xs text-zinc-500">{meta}</span>
        ) : null}
      </div>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
