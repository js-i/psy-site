import { NAV_ITEMS, siteConfig } from "@/lib/constants";
import { ContactChannelLink } from "@/components/ui/ContactChannelLink";
import { TelegramIcon } from "@/components/ui/icons/TelegramIcon";
import { WhatsappIcon } from "@/components/ui/icons/WhatsappIcon";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {siteConfig.name} · Психотерапевт
            </p>
            <p className="mt-1 text-sm text-ink/60">Онлайн-консультации · КПТ</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Навигация в подвале">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <ContactChannelLink
              href={siteConfig.telegram.href}
              icon={<TelegramIcon />}
              aria-label="Написать в Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-sage hover:text-sage-dark"
            />
            <ContactChannelLink
              href={siteConfig.whatsapp.href}
              icon={<WhatsappIcon />}
              aria-label="Написать в WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-sage hover:text-sage-dark"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6">
          <p className="text-xs leading-relaxed text-ink/50">
            Сайт носит информационный характер и не заменяет неотложную
            медицинскую или психиатрическую помощь. Если вам или кому-то рядом
            угрожает опасность, позвоните в службу экстренной помощи по номеру
            112 или вызовите скорую помощь.
          </p>
          <p className="mt-4 text-xs text-ink/40">
            © {new Date().getFullYear()} {siteConfig.name}. Психотерапевт.
          </p>
        </div>
      </div>
    </footer>
  );
}
