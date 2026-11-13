import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        index="05"
        title="Education"
        subtitle="Statistical inference and deep learning theory built on a systems CS foundation."
        meta="M.SC. · B.TECH"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {EDUCATION.map((edu) => (
          <article
            key={edu.id}
            className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/35"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-700 dark:text-cyan-400">
                <GraduationCap className="h-4 w-4" />
                <span className="tabular-nums">{edu.period}</span>
              </div>

              {edu.metric ? (
                <span className="rounded border border-cyan-600/25 bg-cyan-50 px-2.5 py-0.5 font-mono text-xs font-medium tabular-nums text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
                  {edu.metric}
                </span>
              ) : null}
            </div>

            <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
              {edu.degree}
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {edu.institution}
            </p>
            <p className="mt-0.5 font-mono text-xs text-zinc-500">
              {edu.location}
            </p>

            {edu.note ? (
              <p className="mt-2 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                {edu.note}
              </p>
            ) : null}

            {edu.coursework && edu.coursework.length > 0 ? (
              <div className="mt-auto pt-5">
                <div className="border-t border-zinc-200 pt-4 dark:border-zinc-800/80">
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                    Core Coursework
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
