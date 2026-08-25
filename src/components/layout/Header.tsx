import Link from "next/link";
import { NAV_ITEMS, siteConfig } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/icons/TelegramIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link href="/#top" className="font-display text-lg font-semibold text-ink">
          {siteConfig.fullName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-sage hover:text-sage-dark sm:h-10 sm:w-10"
          >
            <TelegramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>

          <ButtonLink href="/#contact" className="text-xs sm:text-sm">
            Записаться
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
