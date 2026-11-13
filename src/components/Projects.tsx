import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, FolderGit2, Layers } from 'lucide-react';
import { PROJECTS, SUPPORTING_REPOS } from '../data/portfolio';
import { GithubIcon } from './BrandIcons';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleProjectSpec = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        index="03"
        title="Featured Projects"
        subtitle="From-scratch PyTorch architectures, compliance & security-aware RAG systems, autonomous sensor pipelines, and evaluation infrastructure."
        meta="AI & AUTONOMOUS SYSTEMS"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((project, idx) => {
          const isExpanded = Boolean(expandedIds[project.id]);
          const cardNumber = String(idx + 1).padStart(2, '0');

          return (
            <article
              key={project.id}
              className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/35 dark:hover:border-zinc-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-zinc-500">
                    PRJ_{cardNumber}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">/</span>
                  <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400">
                    {project.category}
                  </span>
                  {project.status === 'Active' ? (
                    <>
                      <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-cyan-700 dark:text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                        <span>Active</span>
                      </span>
                    </>
                  ) : null}
                </div>

                {project.badge ? (
                  <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                    {project.badge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                {project.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Focus:{' '}
                </span>
                {project.focus}
              </p>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => toggleProjectSpec(project.id)}
                  aria-expanded={isExpanded}
                  className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs text-zinc-600 transition-colors hover:text-cyan-700 dark:text-zinc-400 dark:hover:text-cyan-400"
                >
                  <Layers className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
                  <span>Architecture &amp; Constraint Spec</span>
                  {isExpanded ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>

                {isExpanded ? (
                  <div className="mt-2.5 overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800/90 dark:bg-zinc-950/85">
                    <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-100/60 px-3 py-1 font-mono text-[10px] text-zinc-500 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <span className="text-cyan-600 dark:text-cyan-400">&gt;_</span>
                        <span>{project.id}.manifest</span>
                        {project.status === 'Active' ? (
                          <span className="rounded bg-cyan-100/80 px-1 py-0.2 text-[9px] font-medium text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300">
                            ACTIVE_DEV
                          </span>
                        ) : null}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/70 dark:bg-cyan-400/70" />
                      </div>
                    </div>
                    <div className="space-y-2 p-3.5 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                      <div>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                          Design ·{' '}
                        </span>
                        {project.architectureNote}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                          Constraints / Eval ·{' '}
                        </span>
                        {project.evalOrConstraint}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-auto pt-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-cyan-600/25 bg-cyan-50 px-2.5 py-1 font-mono text-xs font-medium text-cyan-700 transition-colors hover:border-cyan-600/45 hover:bg-cyan-100 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-500/20"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/20">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3 dark:border-zinc-800/80">
          <div className="flex items-center gap-2 font-mono text-xs font-medium text-zinc-800 dark:text-zinc-200">
            <FolderGit2 className="h-4 w-4 text-cyan-700 dark:text-cyan-400" />
            <span>Additional ML Coursework &amp; Problem Trackers</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">
            github.com/vatsalv101
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SUPPORTING_REPOS.map((repo) => (
            <a
              key={repo.id}
              href={repo.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-md border border-zinc-200 bg-white p-4 transition-colors hover:border-cyan-600/40 dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:border-cyan-500/40"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-zinc-950 group-hover:text-cyan-700 dark:text-zinc-100 dark:group-hover:text-cyan-400">
                  {repo.name}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-700 dark:text-zinc-500 dark:group-hover:text-cyan-400" />
              </div>

              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {repo.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                {repo.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
