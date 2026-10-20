# Olimova Shaxzoda — Portfolio (Frontend)

Google Stitch dizaynidan (**Botanical Editorial Portfolio**) yaratilgan zamonaviy frontend.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS 3

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # build'ni lokal ko'rish
```

Node.js 18+ kerak.

## Struktura

```
design/                 Stitch'dan kelgan DESIGN.md va screen.png (referens)
src/
  components/           Header, Hero, About, Services, Skills, CuratedNotes,
                        Projects, Journey, Contact, Footer, Icon, LanguageSwitcher
  data/content.ts       Loyihalar, ko'nikmalar, xizmatlar, timeline, kontaktlar
  data/images.ts        Rasm manzillari
  i18n/                 EN / UZ / RU tarjimalari va til almashtirish (useI18n)
  hooks/                useActiveSection (navigatsiyada faol bo'limni belgilash)
  services/contact.ts   Kontakt forma yuborish logikasi
tailwind.config.ts      Dizayn tokenlari (ranglar, shriftlar, radiuslar)
```

## Kontentni o'zgartirish

- Matnlar: `src/i18n/translations.ts` (har bir til uchun bir xil kalitlar, TypeScript tekshiradi).
- Loyiha, ko'nikma, kontakt ro'yxatlari: `src/data/content.ts`.
- Ranglar va shriftlar: `tailwind.config.ts` (DESIGN.md bilan bir xil).

## Rasmlar

Rasmlar hozircha Stitch hosting manzillaridan yuklanadi. Barqarorlik uchun ularni
`public/images/` papkasiga yuklab oling va `src/data/images.ts` ichida
`"/images/hero.jpg"` ko'rinishiga almashtiring.

## Kontakt forma

Standart holatda forma **prototip** (hech narsa yuborilmaydi). Haqiqiy yuborish uchun
`.env` fayl yarating (`.env.example` dan nusxa) va endpoint kiriting, masalan Formspree:

```
VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Deploy

`npm run build` dan keyin `dist/` papkasini Vercel, Netlify yoki GitHub Pages'ga yuklang.
