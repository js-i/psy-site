import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5F7A68",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#FAF8F4",
            fontSize: 118,
            fontWeight: 700,
            lineHeight: 1,
            transform: "translate(11px, 6px)",
          }}
        >
          Г
        </div>
      </div>
    ),
    { ...size },
  );
}
