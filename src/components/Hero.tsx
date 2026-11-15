import { ArrowDown, ArrowUpRight, FileDown, MapPin, Terminal } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface HeroProps {
  onDownloadCv: () => void;
}

const EVIDENCE_MILESTONES = [
  {
    layer: '01 · FROM-SCRATCH REPRODUCTIONS',
    title: '18 Research Papers in PyTorch',
    detail: 'AdamW → Transformer → RoPE → GPT-2 → LoRA → ViT → Mamba',
  },
  {
    layer: '02 · SATELLITE ML RESEARCH',
    title: 'Space Applications Centre (ISRO)',
    detail: 'NavIC GNSS multipath detection PoC via PCA, K-Means & XGBoost',
  },
  {
    layer: '03 · APPLIED & EVALUATED RAG',
    title: 'Multilingual EU AI Act Assistant',
    detail: 'Two-stage retrieval · 94% RAGAS faithfulness · 100% abstention',
  },
  {
    layer: '04 · SECURE SYSTEMS',
    title: 'Tenant-Isolated Vector Search',
    detail: 'Cryptographic JWT verification & strict Qdrant pre-filtering',
  },
];

export function Hero({ onDownloadCv }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75 dark:bg-cyan-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                </span>
                <span>{PROFILE.statusBadge}</span>
              </div>

              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
                {PROFILE.location}
              </span>
            </div>

            <div className="mb-3 font-mono text-xs tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-sm">
              <span className="font-medium text-zinc-950 dark:text-zinc-100">{PROFILE.name}</span>
              <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
              <span className="text-cyan-700 dark:text-cyan-400">{PROFILE.affiliation}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Building AI systems from{' '}
              <span className="text-cyan-700 dark:text-cyan-400">model internals</span> to{' '}
              <span className="text-zinc-900 dark:text-zinc-100">reliable real-world applications</span>.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
              {PROFILE.positioning}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-cyan-300"
              >
                <GithubIcon className="h-4 w-4" />
                <span>View GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-cyan-600/50 hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-cyan-500/50 dark:hover:text-cyan-300"
              >
                <span>View Projects</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>

              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                <LinkedinIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={onDownloadCv}
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                <FileDown className="h-4 w-4 text-cyan-700 dark:text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-5 dark:border-zinc-800/80">
              <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                Core Technical Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.coreBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside
            aria-label="Verified evidence and technical milestones"
            className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5 dark:border-zinc-800 dark:bg-zinc-900/45 lg:col-span-4"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                <Terminal className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
                <span className="hidden sm:inline">track_record.spec</span>
                <span className="font-sans font-medium text-xs sm:hidden">Track Record</span>
              </div>
              <span className="rounded border border-cyan-600/25 bg-cyan-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
                Verified Evidence
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {EVIDENCE_MILESTONES.map((item) => (
                <div
                  key={item.layer}
                  className="rounded-md border border-zinc-200 bg-white p-3 dark:border-zinc-800/90 dark:bg-zinc-950/70"
                >
                  <div className="font-mono text-[9px] tracking-[0.14em] text-cyan-700 dark:text-cyan-400">
                    {item.layer}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-zinc-950 dark:text-zinc-100">
                    {item.title}
                  </div>
                  <div className="mt-0.5 font-mono text-[10.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-1.5 border-t border-zinc-200 pt-3 font-mono text-[11px] text-zinc-500 dark:border-zinc-800">
              <span>STATUS: OPEN_TO_WORK</span>
              <span className="text-cyan-700 dark:text-cyan-400">FOCUS: MODELS + EVALS</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
