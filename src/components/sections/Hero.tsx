import { siteConfig } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:min-h-[calc(100svh-5rem)] sm:py-24">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Я Георгий, психотерапевт. Работаю в подходе
            когнитивно-поведенческой терапии (КПТ) — с тревогой, паническими
            атаками и стыдом. Онлайн, из любой точки, по понятному и
            предсказуемому плану.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="#contact">Записаться на консультацию</ButtonLink>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-ink/70 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              Как проходит консультация →
            </a>
          </div>

          <p className="mt-6 text-sm text-ink/50">
            Онлайн · {siteConfig.priceLabel} за консультацию · Первая встреча — знакомство и план работы
          </p>
        </div>
      </div>
    </section>
  );
}
