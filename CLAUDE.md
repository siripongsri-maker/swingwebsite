# CLAUDE.md

Guidance for AI assistants (Claude Code and others) working in this repository.

## What this project is

The **SWING Foundation** website — a rebuilt international/marketing site for
SWING Foundation Thailand (Service Workers in Group Foundation /
มูลนิธิเพื่อนพนักงานบริการ), a Thai human-rights NGO of and for service workers,
working on health, education, and rights advocacy since 2004.

The site is **bilingual Thai / English** and built on a hand-rolled design
system. It is a static, front-end-only site — there is **no backend**. Forms and
booking links are cosmetic or point to third-party schedulers.

## Repository layout

```
README.md                  Short project blurb
CLAUDE.md                  This file
website/                   ← The live production site (PRIMARY working dir)
docs/                      ← Byte-identical copy of website/ for GitHub Pages
project/                   The SWING design system (source of brand truth)
chats/                     Design-session transcript(s) — historical context
```

### `website/` — the production site (edit here)

A **no-build React 18 app**. `index.html` loads vendored scripts in order:

```html
<script src="react.js"></script>        <!-- vendored React 18 UMD -->
<script src="react-dom.js"></script>     <!-- vendored ReactDOM 18 UMD -->
<script src="data.js"></script>          <!-- the DATA object (TH + EN copy) -->
<script src="bundle.js"></script>        <!-- ALL components, precompiled -->
```

Key files:

| File | Role |
|---|---|
| `index.html` | Entry point. Loads `bundle.js`, **not** the `.jsx` files. |
| `data.js` | `DATA` global with `.en` and `.th` trees — every string lives here. |
| `icons.jsx` | `Icon` component: inline Lucide-style SVGs keyed by name. |
| `Header.jsx`, `Footer.jsx` | Site chrome. |
| `Shared.jsx` | Primitives: `Wave`, `SectionHeader`, `PageHero`, `ServiceCard`, `ArticleCard`, `LocationCard`, `CtaBand`. |
| `Modals.jsx` | `AppointmentModal`, `ArticleModal`. |
| `Home/About/Services/Articles/Support/Contact.jsx` | The six pages. |
| `App.jsx` | Root: hash routing, language state, modals, toast. |
| `bundle.js` | **Precompiled** concatenation of all `.jsx` above, Babel-transpiled to `React.createElement`. This is what actually runs. |
| `babel.js` | Vendored Babel standalone. Present but **not referenced** by `index.html`. |
| `styles.css` | Full site styles. `@import`s `colors_and_type.css` + Google Fonts. |
| `colors_and_type.css` | Design-system tokens (CSS custom properties). |
| `assets/` | Logos, wave PNGs, community photography. |

## ⚠️ Critical convention: `.jsx` is source, `bundle.js` is what runs

`index.html` loads **`bundle.js`**, never the individual `.jsx` files. Editing a
`.jsx` file alone changes **nothing** in the browser. When you change a component
you must regenerate `bundle.js`.

`bundle.js` is the Babel-compiled concatenation of the `.jsx` files in this order:

```
icons.jsx → Header.jsx → Footer.jsx → Shared.jsx → Modals.jsx →
Home.jsx → About.jsx → Services.jsx → Articles.jsx → Support.jsx →
Contact.jsx → App.jsx
```

Each component is registered on `window` (e.g. `window.Header = Header`) so the
concatenated, transpiled output can reference siblings as globals. **Preserve the
`window.X = X` line when adding a new component.**

To rebuild (no build script is committed — use Babel standalone):

```bash
npx @babel/core@7 --presets @babel/preset-react \
  website/icons.jsx website/Header.jsx website/Footer.jsx website/Shared.jsx \
  website/Modals.jsx website/Home.jsx website/About.jsx website/Services.jsx \
  website/Articles.jsx website/Support.jsx website/Contact.jsx website/App.jsx \
  | cat > website/bundle.js
```

(Adjust to your local Babel invocation; the goal is JSX → `React.createElement`
in the same file order.) If editing simple JSX, you may hand-edit `bundle.js`
directly to match — but keep `.jsx` and `bundle.js` in sync either way.

## ⚠️ Critical convention: keep `docs/` in sync with `website/`

`docs/` is a **byte-identical deploy copy** of `website/` used for GitHub Pages.
Any change to `website/` must be mirrored into `docs/`:

```bash
cp -r website/. docs/
```

Verify they match before committing:

```bash
diff -rq website docs   # should print nothing
```

## Architecture notes

- **Routing** is hash-based, handled entirely in `App.jsx`. Valid pages:
  `home, about, services, articles, support, contact`. `navigate(target)` sets
  state, scrolls to top, and `pushState`s `#target`. A `popstate` listener and an
  initial-load effect read `location.hash`.
- **Language** is `App` state (`lang`, default `'th'`). It flows down as a prop to
  every page and component. Components read copy via `DATA[lang]` (often aliased
  `const t = DATA[lang]`). The `Header` language toggle calls `setLang`.
- **No router library, no state library, no JSX runtime** — just React `useState`
  / `useEffect` and global components.
- **Modals & toast** are conditionally rendered from `App` state
  (`showAppt`, `article`, `toast`).

## Adding or changing content

- All user-facing text lives in `website/data.js` under both `en` and `th`. **Add
  both languages** — never leave a string in one language only. Mixing TH and EN
  placeholder strings within one language tree is a bug.
- Icons: add a new entry to the `paths` map in `icons.jsx` (Lucide-style, 24×24
  viewBox, stroke-based, 1.75px). Then rebuild `bundle.js`.
- Brand tokens (colors, type, spacing, radii, shadows) come from
  `colors_and_type.css`. Don't hand-roll hex values — use the CSS variables.

## `project/` — the design system (brand source of truth)

This folder is a self-contained design system + Claude Agent Skill
(`project/SKILL.md`, `name: swing-foundation-design`). Read
`project/README.md` before producing any brand-facing visual or copy work — it
documents content fundamentals, visual foundations, and iconography with worked
examples. Highlights:

- **Brand colors:** SWING Pink `#FF0099`, SWING Purple `#4F3E78`. The signature
  motif is a **pink-over-indigo wave system** for section transitions. The
  rainbow lives only in the logotype and real pride-flag photography — never in
  UI chrome and **never as emoji**.
- **Type:** Prompt (display) + Sarabun (body) — both Thai/Latin Cadson Demak
  families. (Flagged substitutes; see the README's Caveats.)
- **Icons:** Lucide-style, 1.75px stroke (also a flagged substitution).
- `project/ui_kits/marketing-site/` is the **original** design-system recreation
  of the site. Unlike `website/`, it uses **CDN React + Babel standalone**
  (`<script type="text/babel" src="...jsx">`), so it transpiles in-browser with
  no bundle step. Its copy lives in `copy.js`. This is a reference/prototype kit,
  distinct from the production `website/`.
- `project/preview/` holds small HTML specimen cards for the Design System tab.

## Voice, language & content conventions

This is advocacy work for and by a marginalized community. When writing copy,
docs, or any public-facing content:

- Use **people-centered, non-stigmatizing, gender-sensitive** language. SWING is
  an organisation **of** service workers, not merely **for** them — the writing
  reflects that ownership.
- Voice is **earnest, warm, plainspoken**; advocacy claims are stated directly,
  not hedged. Avoid clinical distance, moralizing, or fear-based framing.
- Prefer **"service worker" / "พนักงานบริการ"** in branded copy; "sex worker" is
  used unflinchingly where context demands.
- **No emoji** in body copy.
- Support **TH–EN bilingual** content where relevant, and keep each language tree
  internally consistent.
- "SWING" is always all-caps in English. Phone numbers use Thai hyphenation
  (`02-632-9502`).

## Working in this repo (workflow)

1. **Branch:** development happens on `claude/claude-md-docs-AGKbZ` (per current
   task setup). Create it locally if missing; never push to `main` without
   explicit permission.
2. Edit the relevant `website/*.jsx` / `data.js` / `*.css`.
3. **Rebuild `bundle.js`** if you touched any `.jsx`.
4. **Mirror to `docs/`** (`cp -r website/. docs/`) and confirm `diff -rq` is clean.
5. Verify visually: open `website/index.html` via a static server
   (e.g. `python3 -m http.server` from `website/`) — `file://` works too since
   everything is vendored, but a server avoids any path quirks.
6. Commit with a clear message; push with `git push -u origin <branch>`.
   Do **not** open a pull request unless explicitly asked.

## Gotchas

- Editing `.jsx` without rebuilding `bundle.js` = no visible change.
- Forgetting to mirror `website/` → `docs/` = the deployed site goes stale.
- `babel.js` in `website/` is vendored but unused — don't wire it into
  `index.html`; the production path is the precompiled `bundle.js`.
- The header logo is referenced as `../project/assets/swing-logo-high.png` from
  `website/Header.jsx`; other assets use local `assets/`. Mind relative paths
  when moving files.
- There is **no `package.json`, no test suite, and no CI build** in this repo.
