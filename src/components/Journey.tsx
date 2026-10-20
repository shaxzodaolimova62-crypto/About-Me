import { JOURNEY, type StepTone } from '../data/content';
import { useI18n } from '../i18n';

const NODE_STYLE: Record<StepTone, string> = {
  primary: 'bg-primary text-on-primary shadow-md',
  secondary: 'bg-secondary text-on-secondary shadow-md',
  muted: 'bg-surface-container-high text-on-surface-variant shadow-inner'
};

const STAGE_STYLE: Record<StepTone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-outline'
};

export function Journey() {
  const { t } = useI18n();

  return (
    <section id="journey" className="panel-lg space-y-10">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="section-label">{t('journey_sub')}</p>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface sm:text-headline-lg">
          {t('journey_title')}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">{t('journey_intro')}</p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-4 top-4 w-0.5 -translate-x-1/2 bg-outline-variant/50 md:left-1/2"
        />

        <ol className="space-y-8">
          {JOURNEY.map(({ stage, title, desc, tone }, index) => {
            const onLeft = index % 2 === 0;
            return (
              <li
                key={stage}
                className="relative pl-12 md:grid md:grid-cols-2 md:gap-x-16 md:pl-0"
              >
                <span
                  className={`absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full font-label-sm text-label-sm md:left-1/2 ${NODE_STYLE[tone]}`}
                >
                  {index + 1}
                </span>

                <div className={onLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}>
                  <p className={`font-label-sm text-label-sm font-bold uppercase ${STAGE_STYLE[tone]}`}>
                    {t(stage)}
                  </p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{t(title)}</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                    {t(desc)}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
