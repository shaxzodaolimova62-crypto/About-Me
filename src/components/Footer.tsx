import { CONTACTS } from '../data/content';
import { IMAGES } from '../data/images';
import { useI18n } from '../i18n';

const FOOTER_LINKS = CONTACTS.filter((c) => c.href && ['telegram', 'email', 'github'].includes(c.id));

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-surface-container-low py-16 shadow-[0_-1px_12px_rgba(52,55,47,0.03)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:px-12">
        <div className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="" width={36} height={36} className="h-9 w-auto object-contain" />
          <span className="font-headline-md text-headline-md text-on-surface">
            Olimova Shaxzoda
          </span>
        </div>

        <blockquote className="max-w-xl font-headline-md text-headline-md italic text-primary">
          {t('about_motto')}
        </blockquote>

        <ul className="flex flex-wrap items-center justify-center gap-3">
          {FOOTER_LINKS.map(({ id, label, href, external }) => (
            <li key={id}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-block rounded-full bg-surface-container-high px-4 py-2 font-label-md text-label-md text-on-surface transition-all hover:bg-primary hover:text-on-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="pt-4 font-body-sm text-body-sm text-on-surface-variant">
          © {new Date().getFullYear()} Olimova Shaxzoda. {t('footer_rights')}
        </p>
      </div>
    </footer>
  );
}
