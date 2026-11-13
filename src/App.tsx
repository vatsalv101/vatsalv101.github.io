import { useEffect, useState } from 'react';
import { CvModal } from './components/CvModal';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { NotesDrawer } from './components/NotesDrawer';
import { Pillars } from './components/Pillars';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { PROFILE } from './data/portfolio';
import { useTheme } from './hooks/useTheme';

export function App() {
  const [notesOpen, setNotesOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const { preference, resolvedTheme, cycleTheme } = useTheme();

  const handleDownloadCv = () => {
    if (PROFILE.links.cvPdfUrl) {
      const link = document.createElement('a');
      link.href = PROFILE.links.cvPdfUrl;
      link.download = 'Vatsal_Vagadiya_CV.pdf';
      link.click();
      return;
    }
    setCvOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'c') {
        e.preventDefault();
        setCvOpen((prev) => !prev);
      } else if (key === 'n') {
        e.preventDefault();
        setNotesOpen((prev) => !prev);
      } else if (key === 't') {
        e.preventDefault();
        cycleTheme();
      } else if (e.key === 'Escape') {
        setNotesOpen(false);
        setCvOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cycleTheme]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="no-print">
        <Navbar
          onOpenNotes={() => setNotesOpen(true)}
          onDownloadCv={handleDownloadCv}
          themePreference={preference}
          resolvedTheme={resolvedTheme}
          onCycleTheme={cycleTheme}
        />

        <main>
          <Hero onDownloadCv={handleDownloadCv} />
          <Pillars />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>

        <Footer />
      </div>

      <NotesDrawer open={notesOpen} onClose={() => setNotesOpen(false)} />
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}

export default App;
