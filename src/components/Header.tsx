import { useEffect, useState } from 'react';
import { NAV_ITEMS, SECTION_IDS } from '../data/content';
import { IMAGES } from '../data/images';
import { useActiveSection } from '../hooks/useActiveSection';
import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { LanguageSwitcher } from './LanguageSwitcher';

const ids: readonly string[] = SECTION_IDS;

export function Header() {
  const { t } = useI18n();
  const active = useActiveSection(ids);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/85 shadow-[0_10px_30px_-10px_rgba(52,55,47,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 rounded-full">
          <img
            src={IMAGES.logo}
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <span className="flex flex-col text-left">
            <span className="font-headline-md text-headline-md leading-tight tracking-tight text-on-surface">
              Olimova Shaxzoda
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              {t('role_tagline')}
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label={t('nav_label')}
          className="hidden items-center gap-1 rounded-full bg-surface-container-low/90 px-3 py-1.5 shadow-[0_4px_16px_rgba(52,55,47,0.05)] backdrop-blur-md lg:flex"
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-3.5 py-1.5 font-label-md text-label-md transition-all ${
                  isActive
                    ? 'bg-secondary-container font-semibold text-on-secondary-container'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                {t(label)}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-primary px-4 py-2 font-label-md text-label-md text-on-primary shadow-[0_8px_20px_-6px_rgba(86,96,67,0.35)] transition-all hover:bg-primary-container hover:text-on-primary-container sm:inline-flex"
          >
            {t('btn_get_in_touch')}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('nav_close') : t('nav_open')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t('nav_label')}
          className="mx-4 mb-4 rounded-3xl bg-surface-container-lowest/95 p-3 shadow-[0_20px_40px_-12px_rgba(115,125,94,0.16)] backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? 'page' : undefined}
                  className={`block rounded-2xl px-4 py-3 font-label-md text-label-md transition-colors ${
                    active === id
                      ? 'bg-secondary-container text-on-secondary-container'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
