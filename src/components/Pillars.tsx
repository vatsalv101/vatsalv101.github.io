import { Cpu, ShieldCheck, Workflow } from 'lucide-react';
import { PILLARS, type PillarItem } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

const PILLAR_ICONS: Record<PillarItem['icon'], typeof Cpu> = {
  cpu: Cpu,
  workflow: Workflow,
  shield: ShieldCheck,
};

export function Pillars() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        index="01"
        title="Technical Focus Areas"
        subtitle="From ground-up PyTorch modeling and alignment audits to evaluated, cloud-deployed RAG and agent systems."
        meta="THE DUAL PERSPECTIVE"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PILLARS.map((pillar) => {
          const Icon = PILLAR_ICONS[pillar.icon];
          return (
            <article
              key={pillar.id}
              className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/35 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-cyan-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    PILLAR_{pillar.index}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                  {pillar.title}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-cyan-700 dark:text-cyan-400/90">
                  {pillar.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-5">
                {pillar.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
