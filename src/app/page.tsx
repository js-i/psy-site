import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HelpWith } from "@/components/sections/HelpWith";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { faqItems } from "@/content/faq";
import { helpTopics } from "@/content/help-with";
import { siteConfig } from "@/lib/constants";
import { JsonLd, serviceJsonLd, faqJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      {helpTopics.map((topic) => (
        <JsonLd
          key={topic.id}
          data={serviceJsonLd({
            name: topic.seoName,
            description: topic.seoDescription,
            url: `${siteConfig.url}/#help-with-${topic.id}`,
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
