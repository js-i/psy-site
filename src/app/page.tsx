import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HelpWith } from "@/components/sections/HelpWith";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { faqItems } from "@/content/faq";
import { siteConfig } from "@/lib/constants";
import { JsonLd, serviceJsonLd, faqJsonLd } from "@/lib/json-ld";

const SERVICES = [
  {
    name: "Психотерапия тревоги онлайн",
    description:
      "КПТ-консультации при тревожных расстройствах: работа с мыслями и привычками, которые поддерживают тревогу.",
    anchor: "#help-with",
  },
  {
    name: "Терапия панических атак онлайн",
    description:
      "Разбор механизма паники и техники, которые снижают частоту и силу приступов.",
    anchor: "#help-with",
  },
  {
    name: "Работа со стыдом",
    description:
      "Постепенное изменение отношения к себе через КПТ-подход, без осуждения.",
    anchor: "#help-with",
  },
] as const;

export default function Home() {
  return (
    <>
      {SERVICES.map((service) => (
        <JsonLd
          key={service.name}
          data={serviceJsonLd({
            name: service.name,
            description: service.description,
            url: `${siteConfig.url}/${service.anchor}`,
          })}
        />
      ))}
      <JsonLd data={faqJsonLd(faqItems)} />

      <Header />
      <main>
        <Hero />
        <HelpWith />
        <HowItWorks />
        <About />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
