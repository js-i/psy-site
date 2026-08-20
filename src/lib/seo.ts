import type { Metadata } from "next";
import { siteConfig } from "./constants";

export function absoluteUrl(pathname: string = "/") {
  return `${siteConfig.url}${pathname === "/" ? "" : pathname}`;
}

export function buildMetadata({
  title,
  description,
  pathname = "/",
  image,
}: {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(pathname);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "ru_RU",
      type: "website",
      // images омитятся: Next.js подхватывает их автоматически из
      // app/opengraph-image.tsx (file convention), явный `image` — на будущее.
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
