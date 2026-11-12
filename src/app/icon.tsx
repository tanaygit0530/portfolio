import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const font = await readFile(join(process.cwd(), "src/assets/LexendGiga-Regular.ttf"));

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
          borderRadius: 32,
          fontFamily: "LexendGiga",
          fontSize: 34,
          paddingBottom: 2,
        }}
      >
        T.
      </div>
    ),
    { ...size, fonts: [{ name: "LexendGiga", data: font, weight: 400, style: "normal" }] },
  );
}
