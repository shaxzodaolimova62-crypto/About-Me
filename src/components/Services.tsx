import { SERVICES } from '../data/content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="panel space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="section-label">{t('services_sub')}</p>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            {t('services_title')}
          </h2>
        </div>
        <span className="chip shrink-0 bg-primary-fixed text-on-primary-fixed">
          {t('badge_student_services')}
        </span>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant">{t('services_intro')}</p>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SERVICES.map(({ icon, title, desc }) => (
          <li
            key={title}
            className="space-y-2 rounded-2xl bg-surface-container-low p-4 transition-colors hover:bg-surface-container"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed text-primary">
              <Icon name={icon} size={20} />
            </div>
            <h3 className="font-label-md text-label-md font-semibold text-on-surface">
              {t(title)}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{t(desc)}</p>
          </li>
        ))}
      </ul>

      <div className="pt-2 text-center">
        <a href="#contact" className="btn-primary !px-6 !py-2.5">
          {t('btn_collaborate')}
          <Icon name="mail" size={16} />
        </a>
      </div>
    </section>
  );
}
