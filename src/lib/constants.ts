function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!raw) return "https://ai-site.vercel.app";
  return /^https?:\/\//.test(raw) ? raw : `https://${raw}`;
}

export const siteConfig = {
  name: "Георгий",
  fullName: "Георгий Меньшиков",
  tagline: "Тревогу и панические атаки можно взять под контроль",
  url: resolveSiteUrl(),
  priceRub: 5000,
  priceLabel: "5 000 ₽",
  sessionMinutes: 50,
  responseTime: "в течение суток",
  telegram: {
    display: "@cbt_doc",
    href: "https://t.me/cbt_doc",
  },
  whatsapp: {
    display: "@cbt_doc",
    href: "https://wa.me/@cbt_doc",
  },
} as const;

export const credentials = [
  "Высшее медицинское образование (СПбГУ), специализация — психотерапия",
  "Член Ассоциации когнитивно-поведенческих терапевтов",
  "Опыт работы в сфере ментального здоровья — более 10 лет",
] as const;

export const NAV_ITEMS = [
  { href: "#help-with", label: "С чем помогаю" },
  { href: "#how-it-works", label: "Как проходит" },
  { href: "#about", label: "Обо мне" },
  { href: "#faq", label: "Вопросы" },
] as const;
