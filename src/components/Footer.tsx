import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { SectionHeader } from './SectionHeader';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.links.email}`;
    }
  };

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
      <SectionHeader
        index="06"
        title="Contact & Opportunities"
        subtitle="Open to Working Student (20h/wk) and Internship (40h/wk) roles in Machine Learning, AI Engineering, and Applied Research across Germany and remote."
      />

      {/* Modern, Clean Contact Card — No terminal gimmick */}
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/70 p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900/90 dark:to-zinc-950/70 sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Value Proposition & Key Details */}
          <div className="lg:col-span-7">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Roles · Immediate Start</span>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
              Let&apos;s build reliable, production-ready AI systems together.
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Whether you are looking for an engineer to implement research architectures in PyTorch, design secure RAG pipelines, or build evaluated agent workflows, I would love to connect.
            </p>

            {/* Structured Info Grid */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200/80 bg-white/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <GraduationCap className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-400" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Degree &amp; Univ</div>
                  <div className="truncate text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    M.Sc. Data Science · TU Dortmund
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-zinc-200/80 bg-white/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-400" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Location &amp; Work</div>
                  <div className="truncate text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Dortmund, Germany · Hybrid / Remote
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-zinc-200/80 bg-white/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <Briefcase className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-400" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Work Model</div>
                  <div className="truncate text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    20h Werkstudent · 40h Intern
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-zinc-200/80 bg-white/80 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <Calendar className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-400" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Response Cadence</div>
                  <div className="truncate text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Direct reply within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-conversion Action CTAs */}
          <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Direct Contact
            </span>

            {/* Send Email Button */}
            <a
              href={`mailto:${PROFILE.links.email}`}
              className="flex items-center justify-between rounded-lg bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-cyan-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-cyan-300"
            >
              <span className="inline-flex items-center gap-2.5">
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* One-click Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-300 bg-zinc-50/60 px-4 py-2.5 text-xs font-medium text-zinc-800 transition-colors hover:border-cyan-600/50 hover:bg-white hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-cyan-500/50 dark:hover:bg-zinc-900 dark:hover:text-cyan-300"
            >
              <span className="inline-flex min-w-0 items-center gap-2">
                {copied ? (
                  <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
                )}
                <span className="truncate font-mono">
                  {copied ? 'Copied to clipboard!' : PROFILE.links.email}
                </span>
              </span>
              <span className="shrink-0 text-[11px] text-zinc-500 dark:text-zinc-400">
                {copied ? 'Done' : 'Copy'}
              </span>
            </button>

            {/* Social Network Buttons */}
            <div className="mt-1 grid grid-cols-2 gap-2.5">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-xs font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-400" />
              </a>

              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-xs font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
              >
                <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-400" />
              </a>
            </div>

            <div className="mt-1 text-center text-[11px] text-zinc-500 dark:text-zinc-500">
              Primary inbox: <span className="font-mono text-zinc-700 dark:text-zinc-300">{PROFILE.links.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer copyright and accessibility shortcuts */}
      <div className="no-print mt-10 flex flex-col items-start justify-between gap-2.5 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center dark:border-zinc-900">
        <span>
          © 2026 {PROFILE.name} · {PROFILE.affiliation}
        </span>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-400 dark:text-zinc-600">
          <span className="hidden sm:inline">
            Shortcuts: <kbd className="rounded border border-zinc-200 bg-zinc-100 px-1 py-0.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">T</kbd> theme · <kbd className="rounded border border-zinc-200 bg-zinc-100 px-1 py-0.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">N</kbd> notes · <kbd className="rounded border border-zinc-200 bg-zinc-100 px-1 py-0.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">C</kbd> cv
          </span>
        </div>
      </div>
    </footer>
  );
}
