import { HERO_STATS } from '../data/content';
import { IMAGES } from '../data/images';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="panel-lg relative lg:p-14">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Portrait */}
        <div className="settle relative flex justify-center lg:col-span-5">
          <div className="relative h-80 w-64 overflow-hidden rounded-full bg-surface-container shadow-xl shadow-secondary/15 sm:h-96 sm:w-72">
            <img
              src={IMAGES.hero}
              alt="Olimova Shaxzoda"
              width={288}
              height={384}
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div
            className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-lowest/70 shadow-md backdrop-blur-md motion-safe:animate-bounce"
            style={{ animationDuration: '4s' }}
          >
            <Icon name="eco" size={28} className="text-primary" />
          </div>

          <div className="absolute -right-3 top-4 rounded-full bg-secondary-container/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
            <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-secondary-container">
              <span className="h-2 w-2 rounded-full bg-primary motion-safe:animate-ping" />
              {t('badge_available')}
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <p className="section-label">{t('hero_role_sub')}</p>
            <h1 className="font-display-hero text-display-hero-mobile font-semibold text-on-surface sm:text-display-hero">
              Olimova
              <br />
              <span className="font-normal italic text-primary">Shaxzoda</span>
            </h1>
          </div>

          <div className="h-0.5 w-16 rounded-full bg-primary/30" />

          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            {t('hero_bio')}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#journey" className="btn-primary group">
              {t('btn_journey')}
              <Icon
                name="arrow_forward"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#skills" className="btn-soft">
              {t('btn_skills')}
              <Icon name="psychology" size={18} />
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-3 border-t border-outline-variant/30 pt-4">
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse p-2">
                <dt className="font-body-sm text-body-sm text-on-surface-variant">{t(label)}</dt>
                <dd className="font-headline-md text-headline-md font-semibold text-primary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
