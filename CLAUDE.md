# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (port 5173). `predev` auto-runs `kill-port 5173` first to clear a stuck port from a previous crashed session.
- `npm run build` — type-checks via `tsc -b`, then builds to `dist/`. Both must pass; this is the only correctness gate in the repo (there is no test suite).
- `npm run preview` — serves the `dist/` build locally (port 4173, also auto-freed via `prepreview`).
- `npm run lint` — runs oxlint (not ESLint — see below). An IDE diagnostics hook also surfaces oxlint "canonical class" suggestions automatically after edits (e.g. `bottom-[-1rem]` → `-bottom-4`) — these can fire on pre-existing lines you didn't touch; only fix ones actually in scope for the current task.
- `npm run killport` — manually frees ports 5173 and 4173 if something is stuck on them.
- When verifying scroll-scrubbed GSAP animations via browser automation right after a fresh page load, use `window.scrollTo(0, Y)` + wait two `requestAnimationFrame`s rather than `scrollIntoView()` — ScrollTrigger's initial pin/trigger measurement may not have settled yet immediately post-load, producing a screenshot that looks broken but isn't.

There are no tests in this project (deliberately dropped during migration — the original CRA test was already broken boilerplate with no real coverage). Don't add a test runner unless asked.

## Architecture

Single-page marketing/agency site (Hero → About → Services → Testimonials → Contact, all stacked in `src/pages/Home.tsx`), scroll-navigated via anchor links (`#home`, `#about`, etc.) and `scrollIntoView`, not client-side routing. There is no router in this project — it was removed as dead weight since the site has no distinct routes. If multi-page navigation is ever needed, it has to be added from scratch.

**Stack:** Vite + React 19 + TypeScript (strict) + Tailwind CSS v4. `App.tsx` lazy-loads `Home`, `Header`, `Footer`, and `ScrollToTop` inside a single `<Suspense>`.

**File layout** is flat and lowercase by convention: `src/components/` (shared, reusable: `Header`, `Footer`, `Card`, `TextBlock`, `SvgBlock`, `ScrollToTop`), `src/sections/` (one file per page section, not reused elsewhere), `src/pages/` (currently just `Home.tsx`). Each component is a single `.tsx` file — there are no co-located style/test files, so don't recreate the old per-component-folder pattern.

**Styling:** Tailwind utility classes only, no CSS-in-JS. Global theme lives in `src/index.css`:
- Color tokens (`--color-background`, `--color-black`, `--color-purple`, `--color-pink`, `--color-white`, `--color-nav`, `--color-nav2`) are defined in an `@theme` block, which makes them usable directly as utilities (`bg-nav`, `text-pink`, etc).
- Breakpoints intentionally use Tailwind's stock `sm`/`md`/`lg` (640/768/1024px) — the original design's breakpoints happened to line up exactly, so no custom breakpoint config was added.
- Many components use fluid `calc(Xrem + Yvw)` sizing via Tailwind arbitrary values (e.g. `text-[calc(1rem+1.5vw)]`) to preserve smooth responsive scaling from the original design. Don't collapse these into fixed Tailwind size steps — that changes the visual scaling behavior between breakpoints.
- This project's Tailwind v4 (`^4.1.13`) resolves arbitrary spacing multiples off the named scale automatically (e.g. `h-13`/`w-13` work even though `13` isn't a default step), and its canonical gradient utility is `bg-linear-to-*` (`bg-gradient-to-*` still resolves as a legacy alias, but prefer `bg-linear-to-*`).
- **Custom global CSS rules added to `src/index.css` must go inside `@layer base` (or `@layer components`), never left bare after the `@import "tailwindcss"` line.** Tailwind v4 treats unlayered CSS as higher priority than *any* utility class regardless of specificity, so a bare rule targeting `img`/`svg`/etc. will silently override every sizing utility in the app (this exact bug happened once with the `img, svg { width: 100%; height: auto }` Preflight-gap reset).
- That `img, svg` rule in `@layer base` exists so decorative images without an explicit size utility stretch to fill their wrapper (matching the original design's sizing model). Any `<img>` that needs a specific size must set its own `w-*`/`h-*` utility, which will correctly override the base default.

**Animations:** GSAP + `@gsap/react`'s `useGSAP()` hook (not raw `useEffect`) for all ScrollTrigger/timeline work, so tweens and triggers get cleaned up automatically on unmount/re-run. This matters under React 19's `<StrictMode>` (enabled in `main.tsx`), which double-invokes effects in dev — raw GSAP calls without `useGSAP()` will double-fire.
- `src/index.css` deliberately has **no** global `scroll-behavior: smooth`. GSAP's ScrollTrigger docs warn this conflicts with its own scroll-position sampling (native smooth-scroll easing lags a tick behind what ScrollTrigger reads, worse the faster you scroll). Anchor-link smoothness is done per-call instead, via `element.scrollIntoView({ behavior: "smooth", ... })` in `Header.tsx`/`ScrollToTop.tsx` — don't reintroduce the global CSS rule.
- `src/components/Header.tsx` — pins/reshapes the nav on scroll; branches on `window.matchMedia("(max-width: 40em)")`, evaluated once at mount (not reactive to resize — this matches the original behavior, not a bug to "fix").
- `src/sections/Services.tsx` is now a static section (no GSAP/ScrollTrigger) — the earlier pinned scroll-reveal system was removed in favor of a plain `bg-black` section with three static `TextBlock` + `SvgBlock` rows. If scroll animation is reintroduced here, follow the general scrub/`useGSAP()` conventions above; the old `revealRefs`/positional-`childNodes` approach and its gotchas no longer apply.
  - Each row's decorative 3D shape (`Tube`/`Cone`/`Capsule`) is absolutely positioned (`top-[80%]`) relative to the row, which is fine on desktop because `SvgBlock` (hidden below `md`) keeps the row tall. On mobile the row height collapses to just the text, so the shape needs `max-md:static` (plus cleared offsets + its own margin/size) to flow normally below the text instead of relying on `top-80%` of a much shorter box.

**Carousel:** `src/sections/Testimonials.tsx` uses `embla-carousel-react` (not react-slick/swiper). Dots and prev/next arrows are hand-built against Embla's API (`scrollSnapList`, `selectedScrollSnap`, `scrollPrev`/`scrollNext`), not a plugin — follow the same pattern for any carousel changes.

**Assets:** `src/assets/` is flat, kebab-case. `Website Image-1/2/3.png` are currently unused leftovers (kept in place, not wired up to anything). Avoid reintroducing dynamic `require()`-style asset lookups by filename — Vite needs static `import` statements (or `import.meta.glob`) for assets to be bundled correctly.
