import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Политика конфиденциальности — ${siteConfig.fullName}`,
  description:
    "Как обрабатываются персональные данные, оставленные через форму записи на консультацию.",
  pathname: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-3 text-sm text-ink/50">Последнее обновление: 25.08.2026</p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/80">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                1. Общие положения
              </h2>
              <p className="mt-3">
                Настоящая политика определяет порядок обработки персональных
                данных, которые посетитель сайта {siteConfig.url} передаёт
                через форму записи на консультацию. Политика разработана в
                соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О
                персональных данных».
              </p>
              <p className="mt-3">
                Оператором персональных данных является {siteConfig.fullName},
                оказывающий консультации (далее — «Оператор», «я»). Реквизиты
                регистрации в качестве самозанятого/ИП предоставляются по
                запросу — свяжитесь через контакты в разделе 6.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                2. Какие данные собираются
              </h2>
              <p className="mt-3">
                Через форму на сайте собираются только имя и контакт для
                связи (телефон, Telegram или email). Других данных форма не
                запрашивает.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                3. Цели обработки
              </h2>
              <p className="mt-3">
                Данные используются исключительно для того, чтобы связаться с
                вами, ответить на заявку и согласовать запись на
                консультацию. Данные не передаются третьим лицам, за
                исключением сервиса Telegram, через который заявка доставляется
                Оператору технически (Telegram Bot API).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                4. Срок хранения
              </h2>
              <p className="mt-3">
                Сайт не хранит данные на своём сервере и не имеет базы
                данных: заявка технически пересылается напрямую в
                Telegram-чат Оператора через Telegram Bot API. Дальше данные
                существуют только в переписке (Telegram/WhatsApp/email) — до
                тех пор, пока вы или Оператор их не удалите, либо до отзыва
                согласия.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                5. Ваши права
              </h2>
              <p className="mt-3">
                Вы вправе в любой момент отозвать согласие на обработку
                персональных данных, запросить их удаление или уточнение,
                написав через контакты ниже.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                6. Контакты
              </h2>
              <p className="mt-3">
                По вопросам обработки персональных данных пишите в Telegram{" "}
                <a
                  href={siteConfig.telegram.href}
                  className="text-sage-dark underline underline-offset-4 hover:text-ink"
                >
                  {siteConfig.telegram.display}
                </a>{" "}
                или WhatsApp{" "}
                <a
                  href={siteConfig.whatsapp.href}
                  className="text-sage-dark underline underline-offset-4 hover:text-ink"
                >
                  {siteConfig.whatsapp.display}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                7. Cookies и аналитика
              </h2>
              <p className="mt-3">
                Сайт не использует рекламные или аналитические системы,
                собирающие персональные данные посетителей. Если это
                изменится (например, будет подключена аналитика для оценки
                эффективности рекламы), эта политика будет обновлена заранее.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
