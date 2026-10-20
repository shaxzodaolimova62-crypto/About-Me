import { LANGUAGES, useI18n } from '../i18n';

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t('lang_label')}
      className="flex items-center rounded-full bg-surface-container-high/70 px-2 py-1 backdrop-blur-md"
    >
      {LANGUAGES.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`rounded-full px-2 py-0.5 font-label-sm text-label-sm uppercase transition-colors ${
              active
                ? 'bg-primary text-on-primary'
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
