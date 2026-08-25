import { siteConfig, credentials } from "./constants";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.fullName,
    jobTitle: "Психолог",
    description: credentials.join(". "),
    url: siteConfig.url,
    knowsAbout: [
      "Тревожные расстройства",
      "Панические атаки",
      "Стыд",
      "Когнитивно-поведенческая терапия",
      "Психолог онлайн"
    ],
    sameAs: [siteConfig.telegram.href, siteConfig.whatsapp.href],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.fullName} — психолог онлайн`,
    url: siteConfig.url,
    provider: { "@id": `${siteConfig.url}/#person` },
    areaServed: "Worldwide",
    availableLanguage: "Russian",
    priceRange: siteConfig.priceLabel,
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: { "@id": `${siteConfig.url}/#person` },
    areaServed: "Worldwide",
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
