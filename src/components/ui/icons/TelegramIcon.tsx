export function TelegramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.05 3.53 2.9 10.58c-1.24.5-1.23 1.19-.23 1.5l4.66 1.45 1.8 5.48c.23.62.12.87.78.87.5 0 .73-.23 1.01-.5l2.42-2.35 4.72 3.48c.87.48 1.5.23 1.72-.8l3.12-14.7c.32-1.32-.5-1.9-1.85-1.48Zm-11.6 9.9-1.1-3.4 9.9-6.15c.28-.17.53.04.3.24l-9.1 9.31Z" />
    </svg>
  );
}
