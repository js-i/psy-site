import Image from "next/image";
import { credentials, siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-bg">
          <Image
            src="/georgy-portrait.jpg"
            alt={`${siteConfig.fullName}, психолог`}
            width={960}
            height={1200}
            priority
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 384px, 90vw"
          />
        </div>

        <div>
          <SectionHeading eyebrow="Специалист" title="Обо мне" />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
            <p>
              Меня зовут {siteConfig.fullName}, я психолог, работаю в подходе
              когнитивно-поведенческой терапии (КПТ). Помогаю справляться с
              тревогой, паническими атаками и хроническим стыдом — возвращать
              контроль над своим состоянием и повседневной жизнью.
            </p>
            <ul className="space-y-2 border-y border-ink/10 py-4">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-sage-dark">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Я убеждён, что терапия — это не «на всю жизнь», а конкретные
              навыки, которые потом работают самостоятельно.
            </p>
            <p>
              Провожу консультации только онлайн — это удобно, если плотный
              график или в вашем городе сложно найти специалиста по КПТ.
            </p>
          </div>

          <div className="mt-8">
            <ButtonLink href="#contact" variant="secondary">
              Познакомиться на консультации
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
