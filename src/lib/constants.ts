export const siteConfig = {
  name: "Георгий",
  fullTitle: "Георгий — психотерапевт онлайн",
  tagline: "Тревога и панические атаки поддаются лечению",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://ai-site.vercel.app",
  priceRub: 5000,
  priceLabel: "5 000 ₽",
  sessionMinutes: 50,
  responseTime: "в течение суток",
  // TODO: заменить на реальные контакты перед запуском (см. CLAUDE.md, открытые вопросы).
  telegram: {
    display: "@georgy_therapist",
    href: "https://t.me/georgy_therapist",
  },
  whatsapp: {
    display: "+7 999 000-00-00",
    href: "https://wa.me/79990000000",
  },
} as const;

export const NAV_ITEMS = [
  { href: "#help-with", label: "С чем помогаю" },
  { href: "#how-it-works", label: "Как проходит" },
  { href: "#about", label: "Обо мне" },
  { href: "#faq", label: "Вопросы" },
] as const;
