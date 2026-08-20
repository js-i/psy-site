"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ContactChannelLink } from "@/components/ui/ContactChannelLink";
import { TelegramIcon } from "@/components/ui/icons/TelegramIcon";
import { WhatsappIcon } from "@/components/ui/icons/WhatsappIcon";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage";
const labelClass = "text-sm font-medium text-ink";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-sage/40 bg-sage/10 px-6 py-8 text-ink">
        <p className="font-display text-lg font-semibold">Спасибо!</p>
        <p className="mt-2 text-sm text-ink/70">
          Заявка отправлена, я свяжусь с вами {siteConfig.responseTime}.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`mt-1.5 ${inputClass}`}
        />
      </div>

      <div>
        <label htmlFor="contact-info" className={labelClass}>
          Телефон, Telegram или email
        </label>
        <input
          id="contact-info"
          name="contact"
          type="text"
          required
          className={`mt-1.5 ${inputClass}`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Что беспокоит{" "}
          <span className="font-normal text-ink/50">(необязательно)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={`mt-1.5 ${inputClass} resize-none`} />
      </div>

      {state.status === "error" && (
        <div role="alert" className="rounded-lg border border-terracotta/30 bg-terracotta/5 px-4 py-3 text-sm text-ink">
          <p>
            Не получилось отправить форму. Напишите мне напрямую в Telegram или
            WhatsApp — ссылки ниже.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <ContactChannelLink
              href={siteConfig.telegram.href}
              icon={<TelegramIcon className="h-4 w-4" />}
              className="inline-flex items-center gap-1.5 font-medium text-sage-dark hover:underline"
            >
              Telegram
            </ContactChannelLink>
            <ContactChannelLink
              href={siteConfig.whatsapp.href}
              icon={<WhatsappIcon className="h-4 w-4" />}
              className="inline-flex items-center gap-1.5 font-medium text-sage-dark hover:underline"
            >
              WhatsApp
            </ContactChannelLink>
          </div>
        </div>
      )}

      <p className="text-xs leading-relaxed text-ink/50">
        Ваши данные использую только для того, чтобы связаться с вами.
      </p>

      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? "Отправляю…" : "Отправить заявку"}
      </Button>
    </form>
  );
}
