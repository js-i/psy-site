import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const STEPS = [
  {
    title: "Заявка",
    description: `Коротко пишете о запросе через форму — отвечаю ${siteConfig.responseTime}.`,
  },
  {
    title: "Первая встреча",
    description:
      "Знакомимся, обсуждаем, что беспокоит, формируем понятный план работы.",
  },
  {
    title: "Регулярные сессии",
    description: `${siteConfig.sessionMinutes} минут по видеосвязи, в удобное время.`,
  },
  {
    title: "Прозрачный прогресс",
    description: "Периодически возвращаемся к целям и корректируем план.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Процесс" title="Как проходит консультация" />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="font-display text-3xl font-semibold text-sage">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-2xl space-y-3 rounded-2xl border border-ink/10 bg-white p-6">
          <p className="text-sm leading-relaxed text-ink/70">
            Консультация — {siteConfig.priceLabel} за {siteConfig.sessionMinutes}{" "}
            минут, оплата перед началом встречи.
          </p>
          <p className="text-sm leading-relaxed text-ink/70">
            Решение продолжать — всегда за вами, без давления после каждой
            встречи.
          </p>
        </div>

        <div className="mt-8">
          <ButtonLink href="#contact" variant="secondary">
            Начать с первой консультации
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
