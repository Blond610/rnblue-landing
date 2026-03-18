# RnBlue Beats — Brand Assets

## Palette

### Colori Primari
- **Nero Profondo (base):** #0A0A0F
- **Nero Card:** rgba(10, 10, 15, 0.8)
- **Blu Notte:** #0D1B2A
- **Indigo Scuro:** #1B2838

### Accenti
- **Blu Accento:** #2E86AB (link, hover, glow)
- **Viola Tenue:** #6B4C9A (accento secondario, usare con moderazione)
- **Bianco Caldo:** #E8E4DF (testo principale — mai bianco puro #FFF)

### Testo
- **Headline:** #E8E4DF (bianco caldo)
- **Body:** rgba(232, 228, 223, 0.75) (bianco caldo al 75%)
- **Muted:** rgba(232, 228, 223, 0.4) (per label, note secondarie)

### Bordi e Superfici
- **Bordo Card:** rgba(232, 228, 223, 0.08)
- **Bordo Hover:** rgba(46, 134, 171, 0.3)
- **Backdrop Blur:** 12px su card e superfici elevate

## Tipografia

### Font Stack
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Caveat:wght@400;700&display=swap');
```

### Uso
| Elemento | Font | Weight | Size (desktop) | Tracking |
|----------|------|--------|----------------|----------|
| H1 Hero | Bebas Neue | 400 | 96-120px | 0.15em |
| H2 Sezione | Bebas Neue | 400 | 48-64px | 0.08em |
| Sottotitolo | DM Sans | 400 | 18-22px | 0.05em |
| Body | DM Sans | 400 | 16px | 0.02em |
| Accento handwritten | Caveat | 400-700 | 24-32px | normal |
| Button | DM Sans | 500 | 14px | 0.1em |

### Regole
- Mai usare bold su Bebas Neue (è già un font bold per natura)
- Caveat SOLO per accenti, titoli sezione contatto, e annotazioni decorative
- Line-height: 1.1 per headlines, 1.6 per body text
- Uppercase per headlines e button, normal case per body

## Texture di Sfondo
- `deepsky-atmosphere.png` — ink-wash midnight, atmosferico (PRIMARIO)
- `deepsky-versatile.png` — fluid art, toni teal/navy (ALTERNATIVA)
- Usare con: `background-size: cover; background-position: center; position: fixed;`

## Logo
- Testo "RNBLUE" in Bebas Neue con tracking 0.2em
- Colore: #E8E4DF
- Nessun logo grafico — solo tipografia
- In alto a sinistra, dimensione contenuta (24-28px)

## Regole d'Oro
1. MAI bianco puro (#FFFFFF) — sempre #E8E4DF o più scuro
2. MAI nero puro (#000000) per sfondo — usare #0A0A0F
3. MAI bordi spessi o ombre aggressive
4. Preferire opacity e blur a colori solidi per le superfici
5. Il sito deve sembrare "uno studio di registrazione buio", non "un template SaaS dark mode"
