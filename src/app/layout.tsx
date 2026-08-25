import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, personJsonLd, professionalServiceJsonLd } from "@/lib/json-ld";
import "./globals.css";

const lora = Lora({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `Психолог онлайн · КПТ-терапия при тревоге, панических атаках и стыде — ${siteConfig.fullName}`,
    description: `Онлайн-консультации психолога ${siteConfig.fullName} по методу КПТ. Помогаю справиться с тревогой, паническими атаками и стыдом. Запись на первую консультацию.`,
  }),
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        <JsonLd data={personJsonLd()} />
        <JsonLd data={professionalServiceJsonLd()} />
        {children}
      </body>
    </html>
  );
}
