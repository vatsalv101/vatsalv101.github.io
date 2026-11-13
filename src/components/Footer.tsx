import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Terminal } from 'lucide-react';
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
        title="Contact & Links"
        subtitle="Available immediately for 20h/wk Working Student or 40h/wk Mandatory Internship roles across Germany and remote."
        meta="DORTMUND, DE"
      />

      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/45">
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/80 px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-950/70">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <Terminal className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>vatsal@tu-dortmund:~/portfolio</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">
            contact.json
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-12 md:items-center">
          <div className="min-w-0 font-mono text-xs leading-6 text-zinc-700 dark:text-zinc-300 md:col-span-7">
            <div className="text-zinc-500">$ cat contact.json</div>
            <div className="mt-2 rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-800/80 dark:bg-zinc-950/80">
              <div className="text-zinc-400 dark:text-zinc-500">{'{'}</div>
              <div className="pl-4">
                <span className="text-cyan-700 dark:text-cyan-400">&quot;name&quot;</span>:{' '}
                <span className="text-zinc-800 dark:text-zinc-200">&quot;{PROFILE.name}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-700 dark:text-cyan-400">&quot;location&quot;</span>:{' '}
                <span className="text-zinc-800 dark:text-zinc-200">&quot;{PROFILE.location}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-cyan-700 dark:text-cyan-400">&quot;availability&quot;</span>:{' '}
                <span className="text-zinc-800 dark:text-zinc-200">
                  &quot;{PROFILE.availability}&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-cyan-700 dark:text-cyan-400">&quot;email&quot;</span>:{' '}
                <a
                  href={`mailto:${PROFILE.links.email}`}
                  className="break-all text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-cyan-700 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-cyan-300"
                >
                  &quot;{PROFILE.links.email}&quot;
                </a>
                ,
              </div>
              <div className="pl-4">
                <span className="text-cyan-700 dark:text-cyan-400">&quot;github&quot;</span>:{' '}
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-cyan-700 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-cyan-300"
                >
                  &quot;{PROFILE.links.github}&quot;
                </a>
                ,
              </div>
              <div className="pl-4">
                <span className="text-cyan-700 dark:text-cyan-400">&quot;linkedin&quot;</span>:{' '}
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-cyan-700 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-cyan-300"
                >
                  &quot;{PROFILE.links.linkedin}&quot;
                </a>
              </div>
              <div className="text-zinc-400 dark:text-zinc-500">{'}'}</div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-3 md:col-span-5">
            <a
              href={`mailto:${PROFILE.links.email}`}
              className="flex items-center justify-between rounded-md bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-cyan-300"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex min-w-0 cursor-pointer items-center justify-between rounded-md border border-zinc-300 bg-white px-4 py-2.5 font-mono text-xs text-zinc-800 transition-colors hover:border-cyan-600/50 hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-cyan-500/50 dark:hover:text-cyan-300"
            >
              <span className="inline-flex min-w-0 items-center gap-2">
                {copied ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-cyan-700 dark:text-cyan-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5 shrink-0 text-zinc-500 dark:text-zinc-400" />
                )}
                <span className="truncate">
                  {copied ? 'Copied email to clipboard' : `Copy ${PROFILE.links.email}`}
                </span>
              </span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
                <ArrowUpRight className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
              </a>

              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                LinkedIn
                <ArrowUpRight className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="no-print mt-10 flex flex-col items-start justify-between gap-2.5 border-t border-zinc-200 pt-6 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center dark:border-zinc-900">
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
