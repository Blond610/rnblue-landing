# RnBlue Beats — Landing Page

## Progetto
Landing page one-page per **RnBlue Beats** (@rnbluebeatsofficial) — canale YouTube di Dark R&B Type Beats. Non un sito generico da beatmaker. Deve comunicare: "questo è un producer serio, con un'estetica propria."

Sito statico (HTML/CSS/JS vanilla), deploy automatico su **GitHub Pages**.

## Regole Generali
- Always invoke the front-end design skill before writing any front-end code every session, no exceptions.
- Reference the `brand_assets/` folder for palette, typography, textures, video loop, e le title-image pre-renderizzate.
- Test on localhost before any commit (`npm run dev`). Never push to GitHub without explicit approval.
- Use semantic HTML5. Mobile-first responsive design.
- Performance target: 60fps animations, FCP < 2s, total page weight < 1.5MB (escluse texture/video).
- All animations must respect `@media (prefers-reduced-motion: reduce)`.

## Estetica — NON NEGOZIABILE
- **Mood:** Dark, notturno, atmosferico. Come uno studio di registrazione a mezzanotte.
- **MAI:** Template generici, gradiente viola su bianco, estetica "AI slop", Inter/Roboto/Arial, card con bordi arrotondati su sfondo chiaro, bianco puro `#FFF` o nero puro `#000`.
- **SÌ:** Nero profondo (`#0A0A0F`), texture organiche, tipografia bold con accenti handwritten, spazio negativo generoso, micro-animazioni che respirano.
- La palette completa e le regole tipografiche vivono in `brand_assets/palette.md` — è la fonte di verità, leggila prima di toccare colori o font.

## Stack Tecnico
- HTML5 + CSS3 + Vanilla JS (no framework, sito statico, nessuno step di build)
- GSAP 3.12.5 + ScrollTrigger (CDN: cdnjs.cloudflare.com)
- Google Fonts: **Bebas Neue** (logo/nav), **DM Sans** (body), **Caveat** (titolo contatto + sottotitoli), **Permanent Marker** (titoli card + fallback testuale delle title-image)
- Toolchain locale (devDeps): `serve` (dev server), `puppeteer` (screenshot loop), `sharp` (image processing)
- Deploy: **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`), trigger su push a `master`

## Struttura Repository
```
index.html                      Tutta la pagina (nav + 3 sezioni + footer)
css/
  styles.css                    Tutto lo stile, mobile-first + media query
js/
  main.js                       GSAP entrance + ScrollTrigger reveals + breathing/drift
screenshot.js                   Screenshot loop Puppeteer (vedi sotto)
package.json                    Scripts: dev, screenshot
.github/workflows/deploy.yml    Deploy GitHub Pages su push a master
brand_assets/
  palette.md                    Palette + tipografia (fonte di verità)
  hero-loop.mp4                 Video di sfondo hero (loop muted autoplay)
  deepsky-atmosphere.png        Poster/fallback hero + texture ink-wash
  deepsky-versatile.png         Texture alternativa
  notes-overlay.png             Overlay "producer notes" (BPM/KEY/REVERB handwritten)
  title-hero.png                Titolo "RnBlue Beats" pre-renderizzato
  title-cta.png / .jpeg         CTA "Ascolta su YouTube"
  title-logo.png                Logo nav
  title-leasing.png             Titolo card "Beat Leasing"
  title-custom.png              Titolo card "Custom Beats"
  title-contatto.png            Titolo "Lavoriamo insieme"
PROMPT_CLAUDE_CODE.md           Prompt/brief storico di setup del progetto
```

> `temporary_screenshots/`, `node_modules/` e `.claude/` sono gitignored.

## Decisioni di Design Attuali (importante — divergono dal brief originale)
- **L'hero usa un VIDEO** (`hero-loop.mp4`, `autoplay muted loop playsinline`), non un'immagine statica animata con GSAP. `deepsky-atmosphere.png` resta come `poster`/fallback. La drift/breathing GSAP su `.hero-bg` è codice legacy in `main.js` ma non c'è più nessun `.hero-bg` nel markup — è inattivo (no-op difensivo).
- **I titoli sono immagini PNG pre-renderizzate** (`title-*.png`, classe `.handwritten-title`), non testo. Ogni `<img>` ha `alt` + uno stile testuale di fallback (Permanent Marker / Caveat) così la pagina resta leggibile se le immagini non caricano.
- **Le "producer notes" (era Fase 3) sono già implementate**, ma come overlay CSS-only: `#notes-bg::before` applica `notes-overlay.png` con `mix-blend-mode: screen` e `opacity` ~0.4 (0.25 su mobile piccolo). NON si usa Rough.js, NON esiste `js/notes-overlay.js`.
- Tutte le sezioni sotto l'hero stanno dentro `<div id="notes-bg">`, che porta il gradiente di sfondo (`#0A0A0F → #0D1B2A`) e l'overlay note condiviso.

## Sezioni (3 totali)

### 1. HERO (`#hero`, viewport completo)
- `<video class="hero-video">` in `object-fit: cover`, dietro a vignette + overlay scuro + fade inferiore (su mobile vignette/overlay sono spenti per non scurire troppo).
- Titolo: `title-hero.png` centrato (~70% width). CTA: `title-cta.png` linkata a YouTube (`@rnbluebeatsofficial`).
- Entrance GSAP: title spans fade-in dal basso con stagger, subtitle dopo 0.3s, CTA dopo 0.6s (le query su `span`/`.hero__subtitle` sono difensive — restano no-op se gli elementi non esistono nel markup attuale).

### 2. SERVIZI (`#servizi`, 2 card)
- **Beat Leasing** → link BeatStars (`beatstars.com/claudioblond96`)
- **Custom Beats** → ancora `#contatto`
- Layout: 1 colonna mobile, 2 colonne da 768px. Card: `rgba(10,10,15,0.8)`, bordo sottile, `backdrop-blur(12px)`, hover che accende il bordo blu.
- Reveal on scroll: `gsap.from('.service-card', { y:40, opacity:0, stagger:0.2, ScrollTrigger start "top 80%" })`.

### 3. CONTATTO (`#contatto`) + Footer
- Titolo `title-contatto.png` ("Lavoriamo insieme").
- Social inline (YouTube, Instagram `@rnbluebeats`, BeatStars) con icone SVG minimal + email `claudioblond96@gmail.com`.
- Reveal on scroll per titolo / social / email con delay scalati.
- Footer: barra `#0D1B2A` con copyright.

## Comandi
```bash
npm install            # installa devDeps (serve, puppeteer, sharp)
npm run dev            # serve statico su http://localhost:3000
npm run screenshot     # avvia serve + Puppeteer, cattura le 3 sezioni + fullpage
```

### Screenshot Loop
`screenshot.js` avvia un server `serve` su :3000, apre Puppeteer (1440×900), aspetta che le entrance GSAP si assestino, e salva in `temporary_screenshots/` uno screenshot per sezione (`#hero`, `#servizi`, `#contatto`) più un full-page. Usalo per auto-correzione visiva sezione per sezione. Per componenti animati, non confrontare gli screenshot frame-by-frame.

## Convenzioni
- **CSS:** mobile-first. Lo stile base è mobile/small, poi media query additive. Attenzione: ci sono **due** blocchi `max-width:767px` (uno verso fondo file con fix "aggressivi" mobile su brightness/CTA) — verifica entrambi quando tocchi il responsive. Naming BEM-like (`.block__element`, `.block--modifier`).
- **Palette hard-coded:** i colori esatti vivono in `palette.md`; usa quelli (`#0A0A0F`, `#E8E4DF`, `#2E86AB`, `#0D1B2A`). Mai `#FFF`/`#000` puri.
- **JS:** un'unica IIFE in `main.js`, `'use strict'`, esce subito se `prefers-reduced-motion: reduce`. Tutte le query DOM sono difensive (controllo esistenza) prima di animare.
- **Accessibilità / no-JS:** il sito deve funzionare senza JavaScript (contenuto leggibile, layout intatto). Le title-image hanno `alt` + fallback testuale. Touch target ≥44px su mobile, `safe-area-inset-*` per device con notch.

## Workflow Git & Deploy
- **Mai pushare senza approvazione esplicita.** Testa prima su localhost.
- Push a `master` → GitHub Actions builda e pubblica su GitHub Pages (upload dell'intera root come artifact, nessun build step).
- Commit message brevi e descrittivi in stile imperativo (vedi history: "notes overlay covers full page", "update funnel links to new channel handles").

## Note storiche
`PROMPT_CLAUDE_CODE.md` contiene il brief originale di setup (Plan Mode, screenshot loop, Vercel, Rough.js per le note). Diverse di quelle scelte sono cambiate in produzione — questo CLAUDE.md riflette lo **stato attuale**, che ha la precedenza in caso di conflitto.
