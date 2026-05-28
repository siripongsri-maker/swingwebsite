# SWING Foundation — Design System

**Brand:** Service Workers in Group Foundation (SWING)
**Locale:** Bangkok, Thailand — bilingual Thai / English
**Sector:** Human-rights NGO · sexual-health clinic · LGBTQ+ advocacy
**Founded:** 2547 BE / 2004 CE

> "คุณค่า ศักดิ์ศรี ความเท่าเทียม ในทางเลือกและโอกาสที่แตกต่าง"
> "Value, dignity, equality — in different choices and opportunities."

---

## What SWING does

SWING is a Thai NGO founded in 2004 by a coalition of sex workers and rights activists. Their mandate has three pillars, each surfaced as a programme area on the public site:

1. **Health services.** A licensed SWING Clinic (certified by the Department of Medical Sciences, Ministry of Public Health) plus a mobile-clinic outreach. Comprehensive STI / HIV screening, PrEP & PEP distribution, Same-Day ART, hormone-level testing for trans women.
2. **Education access.** English-language classes and non-formal / *kor-sor-nor* education routes for service workers who have been outside the formal school system.
3. **Rights & advocacy.** Campaigning to repeal the 1996 Prevention and Suppression of Prostitution Act and bring sex work under Thai labour law; pushing on marriage equality, the title-prefix (คำนำหน้านาม) bill, and welfare access (e.g. the 5,000 THB COVID relief).

Their flagship film is the short documentary **"GIANT SWING"** (2022, co-produced with AHF Thailand), framing sex workers' lives through the COVID lockdowns.

## Products / surfaces this system covers

| Surface | Status | Source |
|---|---|---|
| **Marketing website** (`swingthailand.org`) | Public, bilingual Thai / English | makewebeasy.com template — most visual cues come from here |
| **SWING Clinic booking** (`testd-health.lovable.app`) | Linked from EN homepage as "Make an Appointment" | Lovable-hosted form, not yet reverse-engineered |
| **Zerva booking** (`zerva.app/swingclinic`) | Linked from TH homepage as "จองคิวตรวจกับเรา" | 3rd-party scheduler |
| **Social** | FB / X / IG / YT / TikTok / LINE @swingthailand | Linked in footer |

Only the public marketing site has been studied directly for this system. The two booking flows are 3rd-party / templated, so we keep their UI patterns out of the kit.

## Sources reviewed

- `https://www.swingthailand.org/` — Thai homepage
- `https://www.swingthailand.org/en` — English homepage
- `https://www.swingthailand.org/about-us` — mission, programmes, GIANT SWING
- Logo + decorative wave assets pulled from the makewebeasy CDN (see `assets/`)

No Figma, no codebase, and no slide template were provided.

---

## Index of this folder

| File / folder | Purpose |
|---|---|
| `README.md` | this file — context, content & visual foundations, iconography |
| `colors_and_type.css` | CSS custom properties: colors, type, spacing, radii, shadows |
| `assets/` | Logos, wave decorations, real outreach photography from the site |
| `fonts/` | Google Fonts loaded via `@import` in `colors_and_type.css` (see Caveats) |
| `preview/` | Design System cards rendered into the Design System tab |
| `ui_kits/marketing-site/` | React/JSX recreation of the bilingual marketing site |
| `SKILL.md` | Agent Skill front-matter so the system works in Claude Code too |

---

## CONTENT FUNDAMENTALS

**Voice.** Earnest, warm, plainspoken; refuses the clinical-distance register most public-health orgs default to. They are an organisation **of** sex workers, not **for** them — the writing reflects that ownership. Advocacy claims are stated directly, not hedged.

**Pronouns.** Thai prose drops pronouns where possible (standard Thai register); English prose uses **"we"** for SWING and **"our community" / "service workers" / "they"** for the people served. "You" appears only in calls to action ("Make an Appointment", "Support us") — not as a marketing intimacy device.

**Naming.** Both **SWING** (always all-caps when written in English) and the long form **Service Workers in Group Foundation** are used. In Thai: **มูลนิธิเพื่อนพนักงานบริการ** (Foundation of Friends of Service Workers). The term **"service worker" / "พนักงานบริการ"** is preferred over "sex worker" in branded copy when speaking *about* the community in their own words — though "sex worker" is used unflinchingly when context demands it (e.g. International Day to End Violence Against Sex Workers).

**Casing.** Sentence case in body. Title Case for English section headings is acceptable but not strict. Thai uses no case; section labels rely on weight + colour instead.

**Numbers & honorifics.** Buddhist Era (พ.ศ.) and Common Era are both used in Thai prose; English defaults to CE. Phone numbers written with Thai-style hyphenation: `02-632-9502`.

**Emoji.** Not used in body copy. The site is emoji-free; the rainbow lives in the logo and in real LGBTQ+ pride flags featured in photography, not in glyph form.

**Examples (lifted from live site):**

- > "At SWING, we are committed to improving the lives of male service workers by providing essential healthcare education, English language training, and non-formal education opportunities."
- > "Conducting comprehensive blood tests for HIV, syphilis, Hepatitis C, including CD4 counts and Viral Load assessments." *(used as a service-card heading, sentence-cased mid-list)*
- > "พนักงานบริการคือ 'มนุษย์' คนหนึ่งที่มีศักยภาพและมีความสามารถ" — "Service workers are 'human beings' with potential and capability." *(the quotation marks around "human" / 'มนุษย์' are doing real work — they're a rhetorical wedge against dehumanising language)*

**Tone shifts by context.**

| Context | Register |
|---|---|
| Hero / mission statement | Declarative, dignified, often a single sentence in quotation marks |
| Service descriptions | Clinical-precise (drug names, test names spelled out: PrEP, PEP, Same-Day ART, CD4, Viral Load) |
| Blog & news | Op-ed, willing to be sharp — see the *IceRukchanok* piece's framing of online harassment as a "costly lesson for society" |
| Calls to action | Two-word imperatives: "Make an Appointment", "Support us", "Subscribe" |

---

## VISUAL FOUNDATIONS

The visual identity is doing **two jobs at once** and you have to pick the right one for the moment:

1. **The pride-flag logotype** is a celebration mark — the full rainbow as the word "swing", with a green dot for the *i* (Thailand pride-flag callback). Use it as the brand stamp.
2. **The pink-and-purple wave system** is the editorial mark — every page break, every section header, every hero on the live site is a full-bleed wavy decoration in `#FF0099` pink layered over `#4F3E78` deep indigo. Use it for structure, never decoration.

These two are kept separate. The logo stays multicolour on white; the wave system stays bichromatic; rainbow gradients are never applied to UI chrome or backgrounds.

### Colour
- **Brand primary:** SWING Pink `#FF0099` — used for the wave decorations, CTAs, links, and the underline-on-hover.
- **Brand secondary:** SWING Purple `#4F3E78` — deep indigo. The wave decorations gradient *from* this *to* the pink (top-to-bottom). Also used for body H1/H2 colour on white.
- **Rainbow accents:** the full seven-band pride palette (`#E53935 → #7B1FA2`). Reserve for hero treatments, list-marker rules, the logotype itself.
- **Neutrals:** slightly purple-tinted ink scale (`#1A1626 → #E8E5EF`) so the system stays in family with the indigo. Off-whites have a faint warm-cool cast (`#FAF8FC`) so pure white can be reserved for cards on the muted background.
- **Vibe of imagery:** photography is warm, naturalistic, never staged — real clinic interiors, real outreach buses, real classroom shots. Skin tones honest; no filters; sometimes slightly low-res because they're community-photographed.

### Type
- **Display: Prompt** — a geometric Thai-Latin sans by Cadson Demak. Used for H1, H2, H3, eyebrows, quotes. Weights 600–700 for headings, 500 for quotes.
- **Body: Sarabun** — the Thai-government-standard body face, also a Cadson Demak Thai-Latin. Used for paragraphs at 16/26, captions at 13/19.
- We saw no monospace in use on the site; mono is reserved for code in this design system folder itself.

### Spacing & layout
- 4px base scale, multiples published as `--s-1 … --s-10`.
- The live site uses generous vertical breathing room (~96px between sections on desktop) and tight horizontal gutters (Bangkok web convention).
- Section transitions happen via the **wave decorations**, not via background-colour swaps. A wave on top of a section visually "closes" the section above; a wave on the bottom "opens" the section below. Sections themselves stay white or `--paper-2`.

### Backgrounds
- **Primarily white** with section-bracketing wave decorations as full-bleed PNGs.
- The decorations are *the* signature visual — every long page on the live site has 2-4 of them.
- No repeating textures, no grain, no noise, no large abstract gradient meshes. The site has a clean, almost editorial feel underneath the playful waves.

### Animation
- The live site uses default makewebeasy fades on image-carousel transitions — slow (~600ms) and unremarkable.
- No bounces, no spring physics, no scroll-jacking, no parallax.
- For new work, prefer **220ms `ease-out` opacity + small translateY** on enter, and **120ms colour-only** on hover. Keep it understated.

### Hover & press
- **Links:** colour darkens from `--swing-pink` `#FF0099` to `--swing-pink-deep` `#C2007A`, with a 1.5px underline that's already visible.
- **Primary buttons:** background darkens from pink to pink-deep; **no** opacity dimming.
- **Press:** the live site uses no transform; for new work, a 1px translateY downward is acceptable but optional. No scale shrink.
- **Focus:** 2px outline in `--swing-purple`, offset 2px. Always visible — accessibility is mission-aligned.

### Borders, radii, cards
- **Cards** on the live site are very lightly shadowed circular thumbnails (the blog post stack at 100×100 `r_100x100`) for media, and flat white blocks with thin borders for content.
- **Default radius:** 10px on cards (`--r-md`), 16px on hero blocks (`--r-lg`), 999px (`--r-pill`) on buttons and tag chips.
- **Borders:** 1px `--ink-100` for soft separation; 1px `--ink-300` only when contrast against muted backgrounds is needed.

### Shadows
- Subtle, indigo-tinted. Never grey. See `--shadow-sm/md/lg`.
- A signature **`--shadow-pink`** exists for primary CTAs on white — it gives the pink button a soft halo without resorting to gradients.

### Transparency & blur
- Reserve for overlays only — modal scrims at `rgba(46, 35, 80, 0.4)` (deep purple, not black). No frosted-glass / backdrop-blur navbars; the site's nav is solid white.

### Layout rules / fixed elements
- Sticky white header with the rainbow logotype top-left, primary nav centred, language toggle top-right. The header does **not** change colour on scroll.
- LINE QR widget bottom-right of every page on the live site — keep the corner reserved for it in marketing screens.
- Footer is purple-deep on white background with the logotype repeated, full bilingual address block, and social icon row.

### Protection gradients / capsule treatments
- Photography that needs overlaid text is wrapped in a soft top-to-bottom **purple→transparent** scrim (`linear-gradient(180deg, rgba(46,35,80,0.65), transparent 60%)`) so headings stay readable. No black scrims.
- Pill tags use `--swing-pink-soft` background with `--swing-pink-deep` text — pink on pink, no white capsules.

---

## ICONOGRAPHY

The live website **does not ship a real icon set**. The "service" tiles on the homepage are illustrated PNG thumbnails (rendered as round 100×100 crops by the makewebeasy CDN — see `assets/asset-35.png`, `asset-36.png`, `asset-37.png`, `ed2.webp`, `ed4.webp`, `hr3.webp`, `hr4.webp`). They're hand-drawn / photo composites, not glyphs. There is **no icon font**, **no SVG sprite**, and **no Material/Font-Awesome ligature** loaded by the page.

**For new work in this system:**

- **Default icon set: Lucide** (CDN-loaded). Stroke-based, 1.75px width, rounded caps. Lucide pairs cleanly with Prompt/Sarabun and stays neutral enough that the brand's emotional weight lives in colour and photography, not in icons. **This is a substitution; flag it if a stakeholder wants something else.**
- **Logo / wordmark:** always the full rainbow PNG (`assets/swing-logo-high.png` or `swing-logo.png`). Never recolour or recreate it.
- **Programme illustrations:** the existing PNG thumbnails are kept (`assets/asset-3{5,6,7}.png`, `ed{2,4}.webp`, `hr{3,4}.webp`) and used as round 100×100 chips, just like the live site.
- **Social icons:** Lucide's brand-style or simple-icons CDN — keep them monochrome `--swing-purple` on hover-to-`--swing-pink`.

**Emoji & unicode glyphs:** never. The site does not use them; introducing them would shift register away from advocacy toward marketing.

---

*This system was built from the public website only. Where we substituted defaults (fonts, icons), the substitution is flagged in `## Caveats` below.*

## Caveats
- **Fonts are guesses.** The makewebeasy template doesn't expose a brand font choice. We picked **Prompt + Sarabun** — both are Cadson Demak Thai-Latin pairings, both widely used by Thai NGOs, both free. Ask the team for ground truth before going to print or to a real production codebase.
- **Brand-pink / brand-purple are eyedropped** from the wave PNGs. They're very close but not pixel-exact to whatever the original brand guide says.
- **Icon set is Lucide by default** — the site itself ships no icon set so we chose one. Substitute freely.
- **Booking flows not modeled.** The Lovable and Zerva booking surfaces are templates we did not study.
