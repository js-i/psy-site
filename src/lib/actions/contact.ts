"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(1).max(200),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  // Honeypot: real users never fill this hidden field.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    contact: formData.get("contact"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  // Honeypot triggered — silently report success to the bot without notifying anyone.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const { name, contact, message } = parsed.data;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "Contact form submitted, but TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not configured.",
      { name, contact },
    );
    return { status: "error", message: "not_configured" };
  }

  const lines = [
    "Новая заявка на консультацию — сайт Георгия",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    message ? "" : null,
    message ? `Сообщение: ${message}` : null,
  ].filter((line) => line !== null);

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      throw new Error(`Telegram API responded with ${res.status}`);
    }

    return { status: "success" };
  } catch (error) {
    console.error("Failed to deliver contact form to Telegram:", error);
    return { status: "error", message: "delivery_failed" };
  }
}
