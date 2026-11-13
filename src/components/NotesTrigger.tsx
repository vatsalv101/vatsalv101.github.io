import { BookOpen } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface NotesTriggerProps {
  label: string;
  className: string;
  shortcutKey?: string;
  onOpenNotes: () => void;
  onAfterTrigger?: () => void;
}

export function NotesTrigger({
  label,
  className,
  shortcutKey,
  onOpenNotes,
  onAfterTrigger,
}: NotesTriggerProps) {
  if (PROFILE.links.notesExternalUrl) {
    return (
      <a
        href={PROFILE.links.notesExternalUrl}
        target="_blank"
        rel="noreferrer"
        onClick={onAfterTrigger}
        className={className}
      >
        <BookOpen className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        onAfterTrigger?.();
        onOpenNotes();
      }}
      className={`cursor-pointer ${className}`}
    >
      <BookOpen className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
      <span>{label}</span>
      {shortcutKey ? (
        <kbd className="hidden font-mono text-[9px] text-zinc-400 dark:text-zinc-600 xl:inline">
          {shortcutKey}
        </kbd>
      ) : null}
    </button>
  );
}
