import { PROJECTS, PROJECT_BADGE_LABEL, type Project, type ProjectBadge } from '../data/content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

const BADGE_STYLE: Record<ProjectBadge, string> = {
  practice: 'bg-surface-container-lowest/90 text-on-surface backdrop-blur-md',
  progress: 'bg-primary-fixed text-on-primary-fixed',
  future: 'bg-secondary-container text-on-secondary-container'
};

function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const { cover, badge } = project;

  return (
    <article className="flex flex-col justify-between space-y-4 rounded-2xl bg-surface-container-low p-5 transition-shadow hover:shadow-md">
      <div className="space-y-3">
        <div
          className={`relative h-40 w-full overflow-hidden rounded-xl bg-surface-container ${
            cover.kind === 'icon' ? 'flex items-center justify-center' : ''
          }`}
        >
          {cover.kind === 'image' ? (
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="p-4 text-center">
              <Icon name={cover.icon} size={40} className="text-primary" />
              <p className="mt-1 font-label-sm text-label-sm text-secondary">{cover.caption}</p>
            </div>
          )}
          <span
            className={`chip absolute right-2.5 top-2.5 !px-2.5 !py-0.5 shadow-sm ${BADGE_STYLE[badge]}`}
          >
            {t(PROJECT_BADGE_LABEL[badge])}
          </span>
        </div>

        <h3 className="font-headline-md text-headline-md leading-tight text-on-surface">
          {t(project.title)}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{t(project.desc)}</p>
      </div>

      <div className="flex items-center justify-between border-t border-outline-variant/30 pt-2">
        <span className="font-label-sm text-label-sm text-secondary">{project.stack}</span>
        <button
          type="button"
          className="group flex items-center gap-1 font-label-md text-label-md text-primary transition-colors hover:text-on-surface"
        >
          {t('btn_explore_concept')}
          <Icon
            name="arrow_forward"
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="panel-lg space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-label">{t('proj_sub')}</p>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            {t('proj_title')}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip bg-secondary-fixed text-on-secondary-fixed">
            {t('badge_practice')}
          </span>
          <span className="chip bg-primary-fixed text-on-primary-fixed">{t('badge_future')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
