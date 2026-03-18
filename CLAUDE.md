# RnBlue Beats — Landing Page

## Progetto
Landing page per **RnBlue Beats** (@rnbluebeats) — canale YouTube di Dark R&B Type Beats. Non un sito generico da beatmaker. Deve comunicare: "questo è un producer serio, con un'estetica propria."

## Regole Generali
- Always invoke the front-end design skill before writing any front-end code every session, no exceptions.
- Reference the `brand_assets/` folder for palette, typography, and texture files.
- Test on localhost before any commit. Never push to GitHub without explicit approval.
- Use semantic HTML5. Mobile-first responsive design.
- Performance target: 60fps animations, FCP < 2s, total page weight < 1.5MB (excluding texture images).
- All animations must respect `@media (prefers-reduced-motion: reduce)`.

## Estetica — NON NEGOZIABILE
- **Mood:** Dark, notturno, atmosferico. Come un studio di registrazione a mezzanotte.
- **MAI:** Template generici, gradiente viola su bianco, estetica "AI slop", Inter/Roboto/Arial, card con bordi arrotondati su sfondo chiaro.
- **SÌ:** Nero profondo (#0A0A0F), texture organiche, tipografia bold con accenti handwritten, spazio negativo generoso, micro-animazioni che respirano.

## Stack Tecnico
- HTML5 + CSS3 + Vanilla JS (no framework, sito statico)
- GSAP 3 + ScrollTrigger (CDN: cdnjs.cloudflare.com)
- Google Fonts: Bebas Neue (headlines), DM Sans (body), Caveat (accenti handwritten)
- Deploy: Vercel via GitHub

## Struttura Pagina
```
index.html
css/
  styles.css
js/
  main.js        (GSAP animations + ScrollTrigger)
  notes-overlay.js (producer notes system — Fase 3)
brand_assets/
  palette.md
  deepsky-atmosphere.png   (texture sfondo hero — ink wash)
  deepsky-versatile.png    (texture sfondo alternativa)
  logo.svg                 (da creare — testo "RNBLUE" stilizzato)
```

## Sezioni (3 totali)

### 1. HERO (viewport completo)
- Background: `deepsky-atmosphere.png` con `object-fit: cover`, position fixed per parallax
- Titolo: "RNBLUE BEATS" grande, Bebas Neue, tracking espanso
- Sottotitolo: "Dark R&B Type Beats" in DM Sans, opacity ridotta
- CTA: "Ascolta su YouTube" — bottone minimal, bordo sottile, hover con glow
- Animazione entrata: titolo fade-in dal basso con stagger per lettera, sottotitolo dopo 0.3s, CTA dopo 0.6s
- Effetto "breathing": lieve oscillazione opacity dello sfondo (0.85 ↔ 1.0, 8s, sine.inOut)

### 2. SERVIZI (2 card affiancate)
- **Beat Leasing** — descrizione breve, link a BeatStars
- **Custom Beats** — descrizione breve, link contatto
- Layout: 2 colonne su desktop, stack su mobile
- Card: sfondo semi-trasparente (rgba nero 80%), bordo sottile, backdrop-blur
- Reveal on scroll: gsap.from con y:40, opacity:0, stagger:0.2, ScrollTrigger start "top 80%"

### 3. CONTATTO / CTA
- Titolo: "Lavoriamo insieme" in Caveat (handwritten)
- Link social: YouTube, Instagram, BeatStars — icone minimal
- Email di contatto
- Sfondo: gradiente dal nero al colore dominante della texture

## Screenshot Loop
- Setup Puppeteer per catturare screenshot automatici durante lo sviluppo
- Salva in `temporary_screenshots/`
- Usa gli screenshot per auto-correzione sezione per sezione
- Per componenti animati: disabilita il confronto screenshot

## Note
- Lo sfondo è un'immagine statica animata con GSAP (drift lento + breathing opacity), NON un video
- In Fase 3 aggiungeremo un overlay di "producer notes" (BPM, KEY, REVERB) con Rough.js — per ora lascia lo spazio nel CSS
- Il sito deve funzionare perfettamente anche senza JavaScript (contenuto leggibile, layout intatto)
