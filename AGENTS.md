# Repository Guidelines

## Project Overview
Fallow Ground is a theological website built with Next.js 15, featuring biblical studies content, a podcast, and newsletter signup. The project uses the App Router, MDX for article content, and follows a clean academic aesthetic.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with nav/footer
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── articles/     # Article listing + dynamic [slug] routes
│   ├── newsletter/   # Newsletter signup
│   └── podcast/      # Podcast episodes listing
├── components/       # Reusable React components
├── content/          # MDX article files
└── lib/              # Utility functions and helpers
```

## Build & Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Coding Style

- **Formatting:** 2-space indentation, standard TypeScript conventions
- **Components:** PascalCase component names, colocated with their usage when simple
- **Styling:** Tailwind CSS v4 classes; use semantic color tokens from `globals.css`
- **MDX Articles:** Place in `src/content/` with frontmatter (`title`, `date`, `excerpt`)
- **No console.log:** Avoid leaving debug statements in code

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- MDX for content
- ESLint for linting

## Adding Content

**Articles:** Create `.mdx` files in `src/content/` with frontmatter:
```mdx
---
title: 'Article Title'
date: '2026-04-18'
excerpt: 'Brief description'
---

Content here...
```

**Podcast Episodes:** Add to the data structure in `src/app/podcast/page.tsx`

## Design Guidelines

- Serif headings (Cormorant Garamond), sans body (Inter)
- Color palette: forest green `#1a3a2a`, cream `#f5f0e8`, gold accent `#8b7355`
- Mobile-first responsive design
- Tasteful, refined aesthetic — no flashy animations
