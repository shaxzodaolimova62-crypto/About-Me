import { About } from './components/About';
import { Contact } from './components/Contact';
import { CuratedNotes } from './components/CuratedNotes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { useI18n } from './i18n';

export default function App() {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-primary px-4 py-2 text-on-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t('skip_link')}
      </a>

      <Header />

      <main id="main" className="min-h-screen w-full bg-surface pt-20">
        <div className="relative isolate flex w-full flex-col overflow-hidden">
          {/* Ambient botanical light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 -z-10 flex h-[600px] w-full max-w-7xl -translate-x-1/2 justify-between opacity-40"
          >
            <div className="h-96 w-96 -translate-x-1/2 rounded-full bg-primary-fixed/40 blur-3xl" />
            <div className="h-80 w-80 translate-x-1/3 rounded-full bg-secondary-fixed/50 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8 lg:py-14">
            <Hero />

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="space-y-8 lg:col-span-7">
                <About />
                <Services />
              </div>
              <div className="space-y-8 lg:col-span-5">
                <Skills />
                <CuratedNotes />
              </div>
            </div>

            <Projects />
            <Journey />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
