import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="panel space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="section-label">{t('about_heading')}</h2>
        <Icon name="person_pin" className="text-secondary" />
      </div>

      <div className="space-y-3 font-body-md text-body-md text-on-surface">
        <p>{t('about_p1')}</p>
        <p className="text-on-surface-variant">{t('about_p2')}</p>
      </div>

      <figure className="flex items-start gap-3 rounded-2xl bg-surface-container-low p-5">
        <Icon name="format_quote" size={24} className="mt-0.5 text-primary" />
        <blockquote className="font-headline-md text-body-lg italic leading-snug text-secondary">
          {t('about_motto')}
        </blockquote>
      </figure>

      <ul className="flex flex-wrap gap-2 pt-2">
        <li className="chip bg-secondary-fixed text-on-secondary-fixed">{t('tag_economics')}</li>
        <li className="chip bg-secondary-fixed text-on-secondary-fixed">{t('tag_reader')}</li>
        <li className="chip bg-secondary-fixed text-on-secondary-fixed">{t('tag_creator')}</li>
        <li className="chip bg-primary-fixed text-on-primary-fixed">{t('tag_location')}</li>
      </ul>
    </section>
  );
}
