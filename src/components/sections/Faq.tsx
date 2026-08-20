import { faqItems } from "@/content/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="bg-bg py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Вопросы" title="Частые вопросы" />

        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className="font-display text-lg font-semibold text-ink">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
