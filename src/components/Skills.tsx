import { SKILLS, STATUS_LABEL, TOOLS, type SkillStatus } from '../data/content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

const STATUS_STYLE: Record<SkillStatus, string> = {
  practicing: 'bg-secondary-fixed text-on-secondary-fixed',
  learning: 'bg-primary-fixed text-on-primary-fixed',
  exploring: 'bg-surface-container-high text-on-surface-variant'
};

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="panel space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="section-label">{t('skills_heading')}</h2>
        <Icon name="tune" className="text-secondary" />
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant">{t('skills_note')}</p>

      <ul className="space-y-3">
        {SKILLS.map(({ icon, label, status }) => (
          <li
            key={label}
            className="flex items-center justify-between gap-3 rounded-xl bg-surface-container-low p-3 transition-colors hover:bg-surface-container"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-primary">
                <Icon name={icon} size={18} />
              </div>
              <span className="font-label-md text-label-md font-medium text-on-surface">
                {t(label)}
              </span>
            </div>
            <span className={`chip px-2.5 ${STATUS_STYLE[status]}`}>{t(STATUS_LABEL[status])}</span>
          </li>
        ))}
      </ul>

      <div className="pt-2">
        <h3 className="section-label mb-3 block">{t('tools_heading')}</h3>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <li
              key={tool}
              className="flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md text-on-surface shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
