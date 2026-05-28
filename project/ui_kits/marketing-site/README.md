# SWING Marketing Site — UI Kit

Pixel-faithful React/JSX recreation of the public-facing site at `swingthailand.org`. Components are factored small so they can be remixed for new pages without dragging in the whole template.

## What's covered

| Component | Purpose |
|---|---|
| `Header.jsx` | Sticky white nav with rainbow logo, primary nav, language toggle, "Make an Appointment" CTA |
| `Hero.jsx` | Bilingual hero with the logo, headline, lede, and primary CTA |
| `WaveDivider.jsx` | The purple→pink wave decoration used as section transition |
| `ServiceGrid.jsx` | Round-thumbnail tiles for the SWING Clinic services |
| `MissionSection.jsx` | The "Value, dignity, equality" mission block from About Us |
| `BlogList.jsx` | Recent-articles list with round photos, category chips, and date |
| `LineWidget.jsx` | The floating LINE QR chip pinned bottom-right |
| `Footer.jsx` | Bilingual contact block, social icon row, visitor counter |
| `AppointmentModal.jsx` | Click-through booking modal triggered by the primary CTA |

## What's intentionally NOT covered

- The full **Article detail** page is left blank — we only have the index card on the homepage. A stub renders a "preview not available in this kit" banner when a post is clicked.
- The **Lovable booking flow** (`testd-health.lovable.app`) and **Zerva** scheduler are 3rd-party surfaces; we surface a fake form in `AppointmentModal` that mimics the *idea* without claiming to be the real flow.
- The **Donation page** (`/support`) was not opened during research.

## Interactive flow

1. Page loads in EN, scrolls cleanly past hero → mission → services → articles → footer.
2. **Language toggle** (header right) swaps between EN and TH content.
3. **"Make an Appointment"** in header or hero opens a modal with a fake booking form — the user can submit and see a success state.
4. **Article cards** open a stub "preview not available" overlay.
5. **LINE widget** bottom-right opens a fake LINE link toast.
