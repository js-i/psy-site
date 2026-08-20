import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAF8F4",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#5F7A68",
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name} · Психотерапевт
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            color: "#2B2A28",
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#C17A5A",
            fontWeight: 500,
          }}
        >
          КПТ-терапия онлайн
        </div>
      </div>
    ),
    { ...size },
  );
}
