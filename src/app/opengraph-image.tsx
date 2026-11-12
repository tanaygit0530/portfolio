import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [display, inter] = await Promise.all([
  readFile(join(process.cwd(), "src/assets/LexendGiga-Regular.ttf")),
  readFile(join(process.cwd(), "src/assets/Inter-Medium.ttf")),
]);

export default function OpengraphImage() {
  const label = { fontFamily: "Inter", fontSize: 18, letterSpacing: 2, textTransform: "uppercase" as const };
  const metal = {
    backgroundImage: "linear-gradient(180deg, #171717 0%, #737373 52%, #262626 100%)",
    backgroundClip: "text",
    color: "transparent",
  };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "48px 64px",
          color: "#0a0a0a",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", ...label }}>
          <span style={{ fontFamily: "LexendGiga", letterSpacing: 6 }}>TANAY.</span>
          <div style={{ display: "flex", gap: 8 }}>
            {["Home", "About", "Experience", "Projects"].map((t, i) => (
              <span
                key={t}
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: 999,
                  padding: "6px 18px",
                  fontSize: 14,
                  background: i === 0 ? "#0a0a0a" : "#fff",
                  color: i === 0 ? "#fff" : "#0a0a0a",
                }}
              >
                {t.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "LexendGiga" }}>
          <span style={{ fontSize: 112, lineHeight: 1.05, ...metal }}>TANAY PATIL</span>
          <span style={{ fontSize: 56, lineHeight: 1.2, marginTop: 8, ...metal }}>FULL-STACK DEVELOPER</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", ...label }}>
          <span>MERN · Agentic AI · OCR & Automation</span>
          <span>Mumbai · VESIT · CGPA 9.03</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "LexendGiga", data: display, weight: 400, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
      ],
    },
  );
}
