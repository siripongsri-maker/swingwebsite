---
name: swing-foundation-design
description: Use this skill to generate well-branded interfaces and assets for SWING Foundation (Service Workers in Group Foundation, Thailand) — either for production or throwaway prototypes, mocks, slides, social posts, etc. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit recreation of the public marketing site.
user-invocable: true
---

# SWING Foundation — Design Skill

SWING is a Thai NGO of and for service workers, working on health, education, and rights advocacy since 2004. The brand is bilingual Thai/English, warm but unflinching in voice, and visually built on a pride-rainbow wordmark layered with a pink-and-purple wave system over white.

## How to use this skill

1. Read `README.md` first — it contains content fundamentals, visual foundations, and iconography rules with worked examples.
2. Pull tokens from `colors_and_type.css` (CSS custom properties for color, type, spacing, radii, shadows, motion). Don't hand-roll new colors; the brand is bichromatic for a reason.
3. Use real assets from `assets/` — the rainbow logo, the wave PNG decorations, and the community photography. Never redraw the logo or invent new wave shapes.
4. For full surfaces, look at `ui_kits/marketing-site/` — there's a working bilingual React recreation with Header, Hero, Mission, ServiceGrid, BlogList, Footer, LineWidget, and an AppointmentModal. Lift components or whole sections.
5. For Design System tab cards, see `preview/` — each is a small focused specimen that can be cribbed for spec docs.

## What to make

If creating **visual artifacts** (slides, mocks, throwaway prototypes, social cards) — copy assets out and write static HTML files for the user to view. Use the wave PNGs as section transitions, photography as round 100×100 chips, and the rainbow logo only at brand stamps.

If working on **production code** — copy the assets and read `colors_and_type.css` to set up your token layer. Lift the UI-kit component patterns; they're cosmetic-only (no real backend), so they're safe to adapt.

If the user invokes this skill without other guidance, ask them what they want to build, gather a few clarifying questions (audience, language, surface), and then act as an expert designer who outputs HTML artifacts or production code.

## House rules

- **Bilingual or single-language is fine — but commit.** If a piece is EN-only it should not include Thai placeholder strings, and vice versa.
- **No emoji in body copy.** The rainbow lives in the logo, not in 🌈.
- **Keep the wave-system bichromatic.** Pink (`--swing-pink`, `#FF0099`) on top of indigo-purple (`--swing-purple`, `#4F3E78`), or as a top-to-bottom gradient. Don't apply rainbow gradients to chrome.
- **Use Prompt (display) + Sarabun (body).** These are both Thai/Latin-capable Cadson Demak families. If the user has access to a brand font, ask for it — these are our flagged substitutes.
- **Icons: Lucide via CDN** at 1.75px stroke. Substitution — flagged in `## Caveats` of README.
- **Photography vibe: community-photographed, naturalistic, no filters.** When generating placeholders, do not invent stock imagery — use a flat tinted box and label it `[photo]`.
