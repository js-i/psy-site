import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactChannelLink } from "@/components/ui/ContactChannelLink";
import { TelegramIcon } from "@/components/ui/icons/TelegramIcon";
import { WhatsappIcon } from "@/components/ui/icons/WhatsappIcon";
import { PhoneIcon } from "@/components/ui/icons/PhoneIcon";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-page max-w-xl">
        <SectionHeading
          title="Записаться на консультацию"
          description={`Напишите напрямую — отвечу ${siteConfig.responseTime}.`}
        />
        <p className="mt-2 text-sm text-ink/50">
          Консультация — {siteConfig.priceLabel} / {siteConfig.sessionMinutes} минут.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <ContactChannelLink
            href={siteConfig.telegram.href}
            icon={<TelegramIcon className="h-5 w-5 text-sage-dark" />}
            className="flex items-center gap-3 rounded-lg border border-ink/10 bg-bg px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-sage"
          >
            Telegram · {siteConfig.telegram.display}
          </ContactChannelLink>
          <ContactChannelLink
            href={siteConfig.whatsapp.href}
            icon={<WhatsappIcon className="h-5 w-5 text-sage-dark" />}
            className="flex items-center gap-3 rounded-lg border border-ink/10 bg-bg px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-sage"
          >
            WhatsApp · {siteConfig.whatsapp.display}
          </ContactChannelLink>
          <ContactChannelLink
            href={siteConfig.phone.href}
            icon={<PhoneIcon className="h-5 w-5 text-sage-dark" />}
            className="flex items-center gap-3 rounded-lg border border-ink/10 bg-bg px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-sage"
          >
            СМС · {siteConfig.phone.display}
          </ContactChannelLink>
        </div>
      </div>
    </section>
  );
}
