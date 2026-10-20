import { NOTES } from '../data/content';
import { IMAGES } from '../data/images';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function CuratedNotes() {
  const { t } = useI18n();

  return (
    <section className="panel space-y-4" aria-labelledby="notes-heading">
      <div className="flex items-center justify-between">
        <h2 id="notes-heading" className="section-label">
          {t('curated_heading')}
        </h2>
        <Icon name="bookmark_border" className="text-secondary" />
      </div>

      <ul className="space-y-3">
        {NOTES.map(({ icon, href, title, desc }) => (
          <li key={title}>
            <a
              href={href}
              className="group flex items-center justify-between rounded-2xl bg-surface-container-low p-3 transition-all hover:bg-surface-container"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed text-primary transition-transform group-hover:scale-105">
                  <Icon name={icon} size={20} />
                </span>
                <span>
                  <span className="block font-label-md text-label-md font-semibold text-on-surface">
                    {t(title)}
                  </span>
                  <span className="block font-body-sm text-body-sm text-on-surface-variant">
                    {t(desc)}
                  </span>
                </span>
              </span>
              <Icon
                name="chevron_right"
                className="text-on-surface-variant transition-transform group-hover:translate-x-1"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="pt-2">
        <div className="h-36 w-full overflow-hidden rounded-2xl bg-surface-container shadow-inner">
          <img
            src={IMAGES.notes}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
