import { useState } from 'react';
import { ChevronRight, MapPin, Terminal } from 'lucide-react';
import { EXPERIENCE, type ExperienceItem } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

type ExperienceTrack = 'all' | 'ai-research' | 'systems-ops';

const TRACK_FILTERS: { id: ExperienceTrack; label: string }[] = [
  { id: 'all', label: 'All Entries' },
  { id: 'ai-research', label: 'AI & ML Research' },
  { id: 'systems-ops', label: 'Engineering & Ops' },
];

const AI_RESEARCH_IDS = new Set(['outlier-ai', 'isro-sac']);

function matchesTrack(item: ExperienceItem, track: ExperienceTrack): boolean {
  if (track === 'all') return true;
  if (track === 'ai-research') return AI_RESEARCH_IDS.has(item.id);
  return !AI_RESEARCH_IDS.has(item.id);
}

export function Experience() {
  const [activeTrack, setActiveTrack] = useState<ExperienceTrack>('all');

  const visibleItems = EXPERIENCE.filter((item) => matchesTrack(item, activeTrack));

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        index="02"
        title="Experience"
        subtitle="AI evaluation, GNSS machine learning research, backend API engineering, and digital operations."
        meta="2024 – PRESENT"
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div
          role="group"
          aria-label="Filter experience by track"
          className="inline-flex flex-wrap gap-1.5 rounded-md border border-zinc-200 bg-zinc-50/80 p-1 dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          {TRACK_FILTERS.map((filter) => {
            const isActive = activeTrack === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTrack(filter.id)}
                className={`cursor-pointer rounded px-2.5 py-1 font-mono text-xs transition-colors ${
                  isActive
                    ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
          <Terminal className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
          <span>
            experience.log · {String(visibleItems.length).padStart(2, '0')} /{' '}
            {String(EXPERIENCE.length).padStart(2, '0')}
          </span>
        </span>
      </div>

      <div className="relative space-y-5 before:absolute before:bottom-4 before:left-2.5 before:top-4 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800 md:before:left-[13rem]">
        {visibleItems.map((item, idx) => {
          const isOngoing = item.period.includes('Present');
          const indexLabel = String(idx + 1).padStart(2, '0');

          return (
            <article
              key={item.id}
              className="group relative pl-8 md:flex md:items-start md:gap-8 md:pl-0"
            >
              {/* Desktop left date & location rail */}
              <div className="hidden shrink-0 pt-5 text-right md:block md:w-48">
                <div className="font-mono text-xs font-medium tabular-nums text-cyan-700 dark:text-cyan-400">
                  {item.period}
                </div>
                {item.location ? (
                  <div className="mt-1 inline-flex items-center justify-end gap-1 font-mono text-[11px] text-zinc-500">
                    <MapPin className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
                    <span>{item.location}</span>
                  </div>
                ) : null}
              </div>

              {/* Timeline node anchored on the spine */}
              <div
                aria-hidden="true"
                className="absolute left-2.5 top-6 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:left-[13rem]"
              >
                {isOngoing ? (
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-600/85 ring-4 ring-white dark:bg-cyan-400/85 dark:ring-zinc-950" />
                ) : (
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-zinc-400 bg-white ring-4 ring-white transition-colors group-hover:border-cyan-600 dark:border-zinc-600 dark:bg-zinc-950 dark:ring-zinc-950 dark:group-hover:border-cyan-400" />
                )}
              </div>

              {/* Floating spec card */}
              <div className="flex-1 rounded-lg border border-zinc-200 bg-zinc-50/70 p-5 transition-colors group-hover:border-zinc-300 group-hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/35 dark:group-hover:border-zinc-700 dark:group-hover:bg-zinc-900/60">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                      EXP_{indexLabel}
                    </span>
                    <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                      {item.domain}
                    </span>
                  </div>

                  {/* Compact mobile date + location */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] md:hidden">
                    <span className="tabular-nums text-cyan-700 dark:text-cyan-400">
                      {item.period}
                    </span>
                    {item.location ? (
                      <span className="text-zinc-500">· {item.location}</span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
                    {item.organization}
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {item.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                    >
                      <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-700 dark:text-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:border-zinc-800/90 dark:bg-zinc-950/70 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
