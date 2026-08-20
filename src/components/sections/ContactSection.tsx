import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { TelegramIcon } from "@/components/ui/icons/TelegramIcon";
import { WhatsappIcon } from "@/components/ui/icons/WhatsappIcon";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <SectionHeading
            title="Записаться на консультацию"
            description={`Коротко расскажите о своём запросе — отвечу ${siteConfig.responseTime}.`}
          />
          <p className="mt-2 text-sm text-ink/50">
            Консультация — {siteConfig.priceLabel} / {siteConfig.sessionMinutes} минут.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="lg:pt-2">
          <div className="rounded-2xl border border-ink/10 bg-bg p-6 sm:p-8">
            <p className="text-sm font-medium text-ink">
              Не хочется заполнять форму? Напишите напрямую:
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={siteConfig.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-sage"
              >
                <TelegramIcon className="h-5 w-5 text-sage-dark" />
                Telegram · {siteConfig.telegram.display}
              </a>
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-sage"
              >
                <WhatsappIcon className="h-5 w-5 text-sage-dark" />
                WhatsApp · {siteConfig.whatsapp.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
