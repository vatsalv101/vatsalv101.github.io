import { STACK_COLUMNS } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        index="04"
        title="Technical Stack Matrix"
        subtitle="Organized across model engineering and applied systems—mirroring the dual-frontier architecture."
        meta="2 PILLARS · 6 CATEGORIES"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {STACK_COLUMNS.map((col) => (
          <div
            key={col.id}
            className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/35 dark:hover:border-zinc-700"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                {col.title}
              </h3>
              <span className="rounded border border-cyan-600/25 bg-cyan-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
                {col.code}
              </span>
            </div>

            <div className="mt-5 space-y-5">
              {col.categories.map((cat) => (
                <div key={cat.label}>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {cat.label}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-zinc-200 bg-white px-2.5 py-1 font-mono text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
