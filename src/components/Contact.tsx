import { useEffect, useState, type FormEvent } from 'react';
import { CONTACTS, FORM_TOPICS, type ContactLink } from '../data/content';
import { useI18n } from '../i18n';
import { sendContactMessage } from '../services/contact';
import { Icon } from './Icon';

type FormStatus = 'idle' | 'sending' | 'prototype' | 'sent' | 'error';

function ContactPoint({ link }: { link: ContactLink }) {
  const { t } = useI18n();

  if (!link.href) {
    return (
      <div className="flex cursor-not-allowed flex-col items-center gap-2 opacity-60">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-container text-outline">
          <Icon name={link.icon} size={24} />
        </div>
        <span className="font-label-md text-label-md text-outline">{link.label}</span>
        <span className="font-label-sm text-[10px] text-outline">{t('badge_coming_soon')}</span>
      </div>
    );
  }

  return (
    <a
      href={link.href}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex flex-col items-center gap-2"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-container-low text-primary shadow-sm transition-all group-hover:bg-primary group-hover:text-on-primary">
        <Icon name={link.icon} size={24} />
      </span>
      <span className="font-label-md text-label-md text-on-surface transition-colors group-hover:text-primary">
        {link.label}
      </span>
      <span className="max-w-[9.5rem] truncate font-body-sm text-[11px] text-on-surface-variant">
        {link.handle}
      </span>
    </a>
  );
}

export function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<FormStatus>('idle');

  // Hide the feedback message after a while
  useEffect(() => {
    if (status !== 'prototype' && status !== 'sent' && status !== 'error') return;
    const timer = setTimeout(() => setStatus('idle'), 8000);
    return () => clearTimeout(timer);
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');

    try {
      const { delivered } = await sendContactMessage({
        name: String(data.get('name') ?? ''),
        contact: String(data.get('contact') ?? ''),
        topic: String(data.get('topic') ?? ''),
        message: String(data.get('message') ?? '')
      });
      form.reset();
      setStatus(delivered ? 'sent' : 'prototype');
    } catch {
      setStatus('error');
    }
  }

  const feedback =
    status === 'prototype'
      ? t('form_success')
      : status === 'sent'
        ? t('form_sent')
        : status === 'error'
          ? t('form_error')
          : '';

  return (
    <section id="contact" className="panel-lg space-y-8">
      <div className="mx-auto max-w-xl space-y-2 text-center">
        <p className="section-label">{t('contact_sub')}</p>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface sm:text-headline-lg">
          {t('contact_title')}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">{t('contact_invite')}</p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-6 pt-2 sm:gap-10">
        {CONTACTS.map((link) => (
          <ContactPoint key={link.id} link={link} />
        ))}
      </div>

      <div className="mx-auto max-w-xl border-t border-outline-variant/30 pt-6">
        <div className="mb-6 text-center">
          <span className="chip bg-surface-container text-on-surface-variant">
            {t('form_prototype_badge')}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cf-name"
                className="mb-1 block font-label-sm text-label-sm text-on-surface-variant"
              >
                {t('label_name')}
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t('ph_name')}
                className="field"
              />
            </div>
            <div>
              <label
                htmlFor="cf-contact"
                className="mb-1 block font-label-sm text-label-sm text-on-surface-variant"
              >
                {t('label_email')}
              </label>
              <input
                id="cf-contact"
                name="contact"
                type="text"
                required
                autoComplete="email"
                placeholder={t('ph_contact')}
                className="field"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cf-topic"
              className="mb-1 block font-label-sm text-label-sm text-on-surface-variant"
            >
              {t('label_topic')}
            </label>
            <select id="cf-topic" name="topic" className="field">
              {FORM_TOPICS.map((key) => (
                <option key={key} value={t(key)}>
                  {t(key)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="cf-message"
              className="mb-1 block font-label-sm text-label-sm text-on-surface-variant"
            >
              {t('label_message')}
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={3}
              required
              placeholder={t('ph_message')}
              className="field"
            />
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary mx-auto disabled:cursor-wait disabled:opacity-70"
            >
              {status === 'sending' ? t('form_sending') : t('btn_send')}
              <Icon name="send" size={18} />
            </button>
          </div>

          <div aria-live="polite" role="status">
            {feedback && (
              <p
                className={`rounded-xl p-3 text-center font-body-sm text-body-sm ${
                  status === 'error'
                    ? 'bg-error-container text-on-error-container'
                    : 'bg-secondary-container text-on-secondary-container'
                }`}
              >
                {feedback}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
