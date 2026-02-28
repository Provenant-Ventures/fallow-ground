# Fallow Ground — Build Instructions

## What You're Building
A biblical studies/theological website called "Fallow Ground" by Emmett Yeagley.

Read BRIEF.md for full details on design, pages, and tech stack.

## Tech Stack
- Next.js 15 with App Router
- Tailwind CSS v4
- TypeScript
- MDX for article content
- Google Fonts (Cormorant Garamond for headings, Inter for body)

## Design Requirements
- Academic, refined, high-education aesthetic
- Serif headings (Cormorant Garamond), sans body (Inter)
- Color palette: deep forest green (#1a3a2a), warm cream (#f5f0e8), aged white (#faf8f5), gold accent (#8b7355), dark text (#2c2c2c)
- Generous whitespace and padding
- Mobile-first responsive
- Subtle, tasteful — no flashy animations
- Dark mode with inverted earth tones

## Pages to Build
1. Home — hero section with "Fallow Ground" title, Hosea 10:12 tagline, Psalm 63:5-8 featured, recent articles preview, about preview
2. About — Emmett Yeagley bio (placeholder text), mission, meaning of "Fallow Ground" (Hosea 10:12 explanation)
3. Articles — listing page with sample MDX articles (2-3 placeholder theological essays)
4. Podcast — episode listing with placeholder episodes
5. Contact/Newsletter — simple email signup placeholder

## Content Guidelines
- Use real theological language, not generic placeholder lorem ipsum
- Sample articles should reference real biblical concepts
- Tone: scholarly but accessible, warm but rigorous

## Structure
Use Next.js App Router conventions:
- app/layout.tsx (root layout with nav + footer)
- app/page.tsx (home)
- app/about/page.tsx
- app/articles/page.tsx
- app/articles/[slug]/page.tsx
- app/podcast/page.tsx
- Components in components/

## When Done
- Run `npm run build` to verify it compiles
- Commit all files with message "Initial build: Fallow Ground website"

When completely finished, run this command to notify me:
openclaw system event --text "Done: Built Fallow Ground website - Next.js theological site for Emmett Yeagley" --mode now
