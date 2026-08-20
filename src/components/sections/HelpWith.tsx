import { helpTopics } from "@/content/help-with";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

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
          {helpTopics.map((topic) => (
            <div
              key={topic.id}
              id={`help-with-${topic.id}`}
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
