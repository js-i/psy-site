import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const TOPICS = [
  {
    title: "Тревога",
    problem:
      "Постоянное напряжение, мысли, которые сложно остановить, ощущение, что вот-вот случится что-то плохое.",
    approach:
      "Работаем с мыслями и привычками, которые поддерживают тревогу, и возвращаем ощущение контроля.",
  },
  {
    title: "Панические атаки",
    problem:
      "Резкий приступ страха, учащённое сердцебиение, чувство, что теряете контроль над телом или ситуацией.",
    approach:
      "Разбираем механизм паники и осваиваем техники, которые снижают частоту и силу приступов.",
  },
  {
    title: "Стыд",
    problem:
      "Ощущение, что с вами что-то не так, желание спрятаться, трудно говорить о себе открыто.",
    approach:
      "Учимся замечать это состояние и постепенно менять отношение к себе — без осуждения.",
  },
] as const;

export function HelpWith() {
  return (
    <section id="help-with" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Чем я могу помочь"
          title="С чем я работаю"
          description="Если что-то из этого откликается — на консультации разберёмся вместе."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TOPICS.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-ink/10 bg-bg p-6 sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {topic.problem}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sage-dark">
                {topic.approach}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink href="#contact" variant="secondary">
            Обсудить свою ситуацию
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
