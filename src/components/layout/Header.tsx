import { NAV_ITEMS, siteConfig } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="font-display text-lg font-semibold text-ink">
          {siteConfig.fullName}
        </a>

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

        <ButtonLink href="#contact" className="text-xs sm:text-sm">
          Записаться
        </ButtonLink>
      </div>
    </header>
  );
}
