import { useEffect, useState } from 'react';
import { FileDown, Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data/portfolio';
import type { ResolvedTheme, ThemePreference } from '../hooks/useTheme';
import { GithubIcon } from './BrandIcons';
import { NotesTrigger } from './NotesTrigger';

interface NavbarProps {
  onOpenNotes: () => void;
  onDownloadCv: () => void;
  themePreference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  onCycleTheme: () => void;
}

const THEME_LABELS: Record<ThemePreference, string> = {
  system: 'Auto',
  light: 'Light',
  dark: 'Dark',
};

export function Navbar({
  onOpenNotes,
  onDownloadCv,
  themePreference,
  resolvedTheme,
  onCycleTheme,
}: NavbarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 140) {
        setActiveId('');
      }
    };

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 140) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ThemeIcon =
    themePreference === 'system' ? Monitor : resolvedTheme === 'dark' ? Moon : Sun;

  const themeTitle = `Theme: ${THEME_LABELS[themePreference]} (${resolvedTheme} active) — click to switch`;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-zinc-200 bg-white/85 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={() => setActiveId('')}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap font-mono text-sm font-medium tracking-tight text-zinc-950 dark:text-zinc-100"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan-600 transition-transform group-hover:scale-125 dark:bg-cyan-400" />
          <span>{PROFILE.handle}</span>
          <span className="hidden text-zinc-300 xl:inline dark:text-zinc-600">/</span>
          <span className="hidden text-xs text-zinc-500 xl:inline">ai-eng</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`whitespace-nowrap rounded-md px-2 py-1.5 font-mono text-xs transition-colors ${
                  isActive
                    ? 'bg-zinc-100 text-cyan-700 dark:bg-zinc-900 dark:text-cyan-400'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100'
                }`}
              >
                <span className="mr-1 text-zinc-400 dark:text-zinc-600">{item.index}.</span>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          <button
            type="button"
            onClick={onCycleTheme}
            title={`${themeTitle} · Shortcut: [T]`}
            aria-label={themeTitle}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 font-mono text-xs text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <ThemeIcon className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>{THEME_LABELS[themePreference]}</span>
            <kbd className="hidden font-mono text-[9px] text-zinc-400 dark:text-zinc-600 xl:inline">
              T
            </kbd>
          </button>

          <NotesTrigger
            label="Notes"
            shortcutKey="N"
            onOpenNotes={onOpenNotes}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 px-2.5 py-1 font-mono text-xs text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          />

          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={onDownloadCv}
            title="Download or Preview CV · Shortcut: [C]"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-cyan-600/25 bg-cyan-50 px-2.5 py-1 font-mono text-xs font-medium text-cyan-700 transition-colors hover:border-cyan-600/40 hover:bg-cyan-100 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-500/20"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>CV</span>
            <kbd className="hidden font-mono text-[9px] text-cyan-600/70 dark:text-cyan-400/70 xl:inline">
              C
            </kbd>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onCycleTheme}
            title={themeTitle}
            aria-label={themeTitle}
            className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 font-mono text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
            <ThemeIcon className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-400" />
            <span>{THEME_LABELS[themePreference]}</span>
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 lg:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-xs text-zinc-700 hover:border-zinc-300 hover:text-cyan-700 dark:border-zinc-800/70 dark:bg-zinc-900/40 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-cyan-400"
              >
                <span className="mr-1.5 text-zinc-400 dark:text-zinc-600">{item.index}.</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-2 border-t border-zinc-200 pt-3 dark:border-zinc-800/80">
            <NotesTrigger
              label="Notes"
              onOpenNotes={onOpenNotes}
              onAfterTrigger={() => setMobileOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-mono text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
            />
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onDownloadCv();
              }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-cyan-600/25 bg-cyan-50 px-3 py-1.5 font-mono text-xs text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300"
            >
              <FileDown className="h-3.5 w-3.5" />
              Download CV
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
