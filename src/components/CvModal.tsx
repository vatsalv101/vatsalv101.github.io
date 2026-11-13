import { Printer, X } from 'lucide-react';
import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILL_DOMAINS } from '../data/portfolio';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  useEscapeKey(open, onClose);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm dark:bg-zinc-950/85"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="print-only-sheet flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="no-print flex items-center justify-between border-b border-zinc-200 px-6 py-3.5 dark:border-zinc-800">
          <div>
            <h2
              id="cv-modal-title"
              className="font-mono text-sm font-medium text-zinc-950 dark:text-zinc-100"
            >
              Curriculum Vitae · Print-Ready Preview
            </h2>
            <p className="font-mono text-[11px] text-zinc-500">
              Tip: Place a PDF at public/Vatsal_Vagadiya_CV.pdf to enable direct file download.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-cyan-600/30 bg-cyan-50 px-3 py-1.5 font-mono text-xs font-medium text-cyan-700 transition-colors hover:bg-cyan-100 dark:border-cyan-500/40 dark:bg-cyan-500/15 dark:text-cyan-300 dark:hover:bg-cyan-500/25"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto p-6 text-sm leading-relaxed sm:p-8">
          <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800 print:border-zinc-300">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 print:text-zinc-950">
              {PROFILE.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-cyan-700 dark:text-cyan-400 print:text-zinc-700">
              {PROFILE.role} · {PROFILE.location}
            </p>
            <p className="mt-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600">
              {PROFILE.links.email} · {PROFILE.links.github} · {PROFILE.links.linkedin}
            </p>
          </div>

          <section className="mt-5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              Experience
            </h4>
            <div className="mt-2.5 space-y-3">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold text-zinc-950 dark:text-zinc-100 print:text-zinc-950">
                      {exp.organization} — {exp.role}
                    </span>
                    <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
                    {exp.highlights.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              Selected Projects
            </h4>
            <div className="mt-2.5 space-y-2.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold text-zinc-950 dark:text-zinc-100 print:text-zinc-950">
                      {proj.title}
                      {proj.status === 'Active' ? (
                        <span className="ml-1.5 font-mono text-[10px] font-normal text-cyan-700 dark:text-cyan-400 print:text-zinc-600">
                          (Active)
                        </span>
                      ) : null}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400 print:text-zinc-600">
                      {proj.tech.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
                    {proj.focus}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              Education
            </h4>
            <div className="mt-2.5 space-y-2">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="font-semibold text-zinc-950 dark:text-zinc-100 print:text-zinc-950">
                      {edu.degree}
                    </span>{' '}
                    <span className="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                      · {edu.institution}, {edu.location}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600">
                    {edu.period}
                    {edu.metric ? ` (${edu.metric})` : ''}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
              Technical Stack
            </h4>
            <div className="mt-2 space-y-1 text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800">
              {SKILL_DOMAINS.map((domain) => (
                <div key={domain.id}>
                  <span className="font-semibold text-zinc-950 dark:text-zinc-100 print:text-zinc-950">
                    {domain.domain}:
                  </span>{' '}
                  {domain.items.join(', ')}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
