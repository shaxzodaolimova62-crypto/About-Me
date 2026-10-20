import type { TranslationKey } from '../i18n';
import { IMAGES } from './images';

/* ---------- Navigation ---------- */
export const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'services',
  'journey',
  'contact'
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_ITEMS: { id: SectionId; label: TranslationKey }[] = [
  { id: 'hero', label: 'nav_home' },
  { id: 'about', label: 'nav_about' },
  { id: 'skills', label: 'nav_skills' },
  { id: 'projects', label: 'nav_projects' },
  { id: 'services', label: 'nav_services' },
  { id: 'journey', label: 'nav_journey' },
  { id: 'contact', label: 'nav_contact' }
];

/* ---------- Hero ---------- */
export const HERO_STATS: { value: string; label: TranslationKey }[] = [
  { value: '19', label: 'stat_age' },
  { value: '1st', label: 'stat_year' },
  { value: '5+', label: 'stat_tools' }
];

/* ---------- Services ---------- */
export const SERVICES: { icon: string; title: TranslationKey; desc: TranslationKey }[] = [
  { icon: 'brush', title: 'srv1_title', desc: 'srv1_desc' },
  { icon: 'filter_vintage', title: 'srv2_title', desc: 'srv2_desc' },
  { icon: 'movie_edit', title: 'srv3_title', desc: 'srv3_desc' },
  { icon: 'terminal', title: 'srv4_title', desc: 'srv4_desc' },
  { icon: 'smart_toy', title: 'srv5_title', desc: 'srv5_desc' },
  { icon: 'music_note', title: 'srv6_title', desc: 'srv6_desc' }
];

/* ---------- Skills ---------- */
export type SkillStatus = 'practicing' | 'learning' | 'exploring';

export const SKILLS: { icon: string; label: TranslationKey; status: SkillStatus }[] = [
  { icon: 'terminal', label: 'sk1', status: 'practicing' },
  { icon: 'image', label: 'sk2', status: 'practicing' },
  { icon: 'videocam', label: 'sk3', status: 'learning' },
  { icon: 'web', label: 'sk4', status: 'practicing' },
  { icon: 'auto_stories', label: 'sk5', status: 'practicing' },
  { icon: 'music_cast', label: 'sk6', status: 'exploring' }
];

export const STATUS_LABEL: Record<SkillStatus, TranslationKey> = {
  practicing: 'status_practicing',
  learning: 'status_learning',
  exploring: 'status_exploring'
};

export const TOOLS = ['ChatGPT', 'Google Stitch', 'Gemini', 'Suno AI', 'Google Flow'] as const;

/* ---------- Curated notes ---------- */
export const NOTES: {
  icon: string;
  href: string;
  title: TranslationKey;
  desc: TranslationKey;
}[] = [
  { icon: 'menu_book', href: '#projects', title: 'note1_title', desc: 'note1_desc' },
  { icon: 'psychology_alt', href: '#journey', title: 'note2_title', desc: 'note2_desc' }
];

/* ---------- Projects ---------- */
export type ProjectBadge = 'practice' | 'progress' | 'future';

export const PROJECT_BADGE_LABEL: Record<ProjectBadge, TranslationKey> = {
  practice: 'badge_practice_tag',
  progress: 'badge_progress',
  future: 'badge_future_tag'
};

export type ProjectCover =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'icon'; icon: string; caption: string };

export interface Project {
  id: number;
  title: TranslationKey;
  desc: TranslationKey;
  badge: ProjectBadge;
  stack: string;
  cover: ProjectCover;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'proj1_title',
    desc: 'proj1_desc',
    badge: 'practice',
    stack: 'Figma / Google Stitch',
    cover: {
      kind: 'image',
      src: IMAGES.projectLanding,
      alt: 'Minimalist editorial website concept shown on desktop and mobile'
    }
  },
  {
    id: 2,
    title: 'proj2_title',
    desc: 'proj2_desc',
    badge: 'practice',
    stack: 'Midjourney / Gemini',
    cover: {
      kind: 'image',
      src: IMAGES.projectBotanical,
      alt: 'Generative botanical photographs in soft olive tones'
    }
  },
  {
    id: 3,
    title: 'proj3_title',
    desc: 'proj3_desc',
    badge: 'progress',
    stack: 'Runway / Claude',
    cover: {
      kind: 'image',
      src: IMAGES.projectStoryboard,
      alt: 'Storyboard grid with video scenes in a warm olive filter'
    }
  },
  {
    id: 4,
    title: 'proj4_title',
    desc: 'proj4_desc',
    badge: 'future',
    stack: 'Python / Telegram API',
    cover: { kind: 'icon', icon: 'smart_toy', caption: 'Architecture Concept' }
  },
  {
    id: 5,
    title: 'proj5_title',
    desc: 'proj5_desc',
    badge: 'future',
    stack: 'Gemini Pro / Vector DB',
    cover: { kind: 'icon', icon: 'hub', caption: 'RAG & Obsidian Concept' }
  },
  {
    id: 6,
    title: 'proj6_title',
    desc: 'proj6_desc',
    badge: 'practice',
    stack: 'Suno AI / Audio Editor',
    cover: { kind: 'icon', icon: 'graphic_eq', caption: 'Audio Synthesis Track' }
  }
];

/* ---------- Learning journey ---------- */
export type StepTone = 'primary' | 'secondary' | 'muted';

export const JOURNEY: {
  stage: TranslationKey;
  title: TranslationKey;
  desc: TranslationKey;
  tone: StepTone;
}[] = [
  { stage: 'step1_stage', title: 'step1_title', desc: 'step1_desc', tone: 'primary' },
  { stage: 'step2_stage', title: 'step2_title', desc: 'step2_desc', tone: 'primary' },
  { stage: 'step3_stage', title: 'step3_title', desc: 'step3_desc', tone: 'secondary' },
  { stage: 'step4_stage', title: 'step4_title', desc: 'step4_desc', tone: 'secondary' },
  { stage: 'step5_stage', title: 'step5_title', desc: 'step5_desc', tone: 'muted' }
];

/* ---------- Contact ---------- */
export interface ContactLink {
  id: string;
  label: string;
  handle: string;
  icon: string;
  href?: string; // undefined => not available yet
  external?: boolean;
}

export const CONTACTS: ContactLink[] = [
  {
    id: 'telegram',
    label: 'Telegram',
    handle: '@shaxxzzodaaa',
    icon: 'send',
    href: 'https://t.me/shaxxzzodaaa',
    external: true
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'shaxzodaolimova62@gmail.com',
    icon: 'mail',
    href: 'mailto:shaxzodaolimova62@gmail.com'
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'shaxzodaolimova62-crypto',
    icon: 'code',
    href: 'https://github.com/shaxzodaolimova62-crypto',
    external: true
  },
  { id: 'instagram', label: 'Instagram', handle: '', icon: 'photo_camera' }
];

export const FORM_TOPICS: TranslationKey[] = ['opt1', 'opt2', 'opt3', 'opt4'];
