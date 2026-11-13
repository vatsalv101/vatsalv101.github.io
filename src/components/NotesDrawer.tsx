import { useState } from 'react';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import { RESEARCH_NOTES } from '../data/portfolio';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface NotesDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NotesDrawer({ open, onClose }: NotesDrawerProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  useEscapeKey(open, onClose);

  if (!open) return null;

  const tags = ['All', ...Array.from(new Set(RESEARCH_NOTES.map((n) => n.tag)))];
  const filteredNotes =
    selectedTag === 'All'
      ? RESEARCH_NOTES
      : RESEARCH_NOTES.filter((note) => note.tag === selectedTag);

  return (
    <div
      className="no-print fixed inset-0 z-50 flex justify-end bg-zinc-950/50 backdrop-blur-sm dark:bg-zinc-950/80"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notes-drawer-title"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-xl flex-col border-l border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <BookOpen className="h-4 w-4 text-cyan-700 dark:text-cyan-400" />
            <h2
              id="notes-drawer-title"
              className="font-mono text-sm font-medium text-zinc-950 dark:text-zinc-100"
            >
              Notes &amp; Research Log
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close research notes"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5 border-b border-zinc-200 px-6 py-3 dark:border-zinc-800/80">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`cursor-pointer rounded border px-2.5 py-1 font-mono text-xs transition-colors ${
                selectedTag === tag
                  ? 'border-cyan-600/30 bg-cyan-50 text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-300'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {filteredNotes.map((note) => (
            <article
              key={note.id}
              className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/35"
            >
              <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                <span className="text-zinc-500">{note.date}</span>
                <span className="rounded border border-cyan-600/25 bg-cyan-50 px-2 py-0.5 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
                  {note.tag}
                </span>
              </div>

              <h3 className="mt-2.5 text-base font-semibold text-zinc-950 dark:text-zinc-100">
                {note.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {note.summary}
              </p>

              <ul className="mt-3 space-y-1.5 border-t border-zinc-200 pt-3 dark:border-zinc-800/80">
                {note.keyTakeaways.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 font-mono text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-cyan-700 dark:text-cyan-400">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {note.repoUrl ? (
                <div className="mt-3 border-t border-zinc-200 pt-3 dark:border-zinc-800/80">
                  <a
                    href={note.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-cyan-700 hover:underline dark:text-cyan-400"
                  >
                    <span>{note.repoLabel ?? 'View Repository'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
