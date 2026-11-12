# Tanay Patil — Portfolio

Monochrome personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Edit content

All text, links and project data live in **`src/data/content.ts`**. Components never hard-code copy.

## Replace placeholders

| File | What it is |
| --- | --- |
| `public/portrait-bw.png` | Hero portrait (transparent PNG; path set in `content.ts`). Grayscale + fade are applied in CSS. |
| `public/projects/nagarvaani.png` | Placeholder mockup → swap for a real NagarVaani screenshot (4:3 works best) |
| `public/projects/nexusagent.png` | Placeholder mockup → NexusAgent dashboard screenshot |
| `public/projects/wastec.png` | Placeholder mockup → WAStec store screenshot |
| `public/projects/bajaj-ocr.png` | Placeholder mockup → Bajaj workflow / OCR screenshot (blur client data) |
| `public/Tanay_Resume.pdf` | Downloadable resume |

Keep the same filenames, or update the `image` paths in `content.ts`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy

Hosted on Vercel. Redeploy with `vercel --prod`, or push to the connected GitHub repo.
