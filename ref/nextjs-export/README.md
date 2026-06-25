# Portfolio — Next.js Export

Drop-in portfolio for a Next.js 13+ (App Router) project.

## Files

```
nextjs-export/
├── app/
│   ├── layout.tsx        ← root layout with font setup
│   ├── globals.css       ← base reset + CSS variable wiring
│   └── page.tsx          ← home page (renders <Portfolio />)
├── components/
│   ├── Portfolio.tsx     ← full portfolio component
│   └── Portfolio.module.css
└── public/
    └── images/           ← all project images (43 files)
```

## How to import

1. Copy the `components/` folder into your project's `components/` directory.
2. Copy `public/images/` into your project's `public/images/` directory.
3. Copy `app/globals.css` content into your existing globals (or replace it).
4. Copy `app/layout.tsx` — or merge the font imports into your existing layout.
5. Use `<Portfolio />` on any page.

## Requirements

- Next.js 13+ with App Router
- `next/font/google` (built into Next.js — no extra install needed)
- TypeScript (or rename `.tsx` → `.jsx` and remove the type annotations)

## Fonts

Loaded via `next/font/google` (zero layout shift, self-hosted automatically):
- **DM Serif Display** — display/headline face
- **DM Sans** — body face

If your project already uses `next/font`, merge the font variables into your existing layout rather than replacing it.
