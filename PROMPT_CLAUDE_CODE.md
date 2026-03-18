# Prompt per Claude Code — Landing Page RnBlue Beats

## Come usare questo file

### Prerequisiti
1. VS Code aperto con Claude Code estensione installata
2. Apri la cartella `rnblue-landing/` come progetto
3. Trascina le texture scaricate da Flow nella cartella `brand_assets/`:
   - `deepsky-atmosphere.png` (la prima, atmosferica)
   - `deepsky-versatile.png` (la seconda, versatile)
4. Verifica che CLAUDE.md sia nella root del progetto
5. Verifica che `brand_assets/palette.md` esista

### Step 1 — Plan Mode
Attiva Plan Mode in Claude Code, poi incolla questo prompt:

---

Leggi il file CLAUDE.md e brand_assets/palette.md. Ho già le texture di sfondo in brand_assets/.

Voglio che costruisci una landing page one-page per RnBlue Beats — un canale YouTube di Dark R&B Type Beats. La pagina ha 3 sezioni: Hero (viewport completo con la texture come sfondo), Servizi (2 card: Beat Leasing e Custom Beats), e Contatto (link social + email).

L'estetica deve essere dark, notturna, atmosferica — come essere dentro uno studio di registrazione a mezzanotte. Mai template generico. Mai gradiente viola su bianco. Segui esattamente la palette e la tipografia definite in palette.md.

Usa GSAP 3 con ScrollTrigger da CDN per le animazioni: hero entrance con stagger per lettera, breathing opacity sullo sfondo, reveal on scroll per le card servizi.

Setup anche Puppeteer per il screenshot loop — voglio che tu catturi screenshot del sito e ti auto-corregga confrontando il risultato con il brief.

Prima di scrivere codice, presentami il tuo piano completo.

---

### Step 2 — Feedback sul Piano
Leggi il piano che Claude Code propone. Verifica che:
- [ ] La struttura file corrisponde a quella nel CLAUDE.md
- [ ] Usa i font corretti (Bebas Neue, DM Sans, Caveat)
- [ ] Usa i colori dalla palette (#0A0A0F, #E8E4DF, #2E86AB)
- [ ] Include GSAP da CDN
- [ ] Include il screenshot loop con Puppeteer
- [ ] L'hero usa la texture come background fisso

Se tutto ok, rispondi: "Il piano è ok. Procedi con l'esecuzione."

### Step 3 — Bypass Permissions
Attiva Bypass Permissions e lascia Claude Code lavorare.

### Step 4 — Iterazione
Quando Claude Code finisce:
1. Apri localhost nel browser
2. Verifica ogni sezione
3. Se qualcosa non va, torna in Plan Mode e segnala il problema specifico
4. Se il context supera 50%, pulisci la conversazione (il codice nei file resta salvo)

### Step 5 — Screenshot e feedback
Se il sito funziona ma l'estetica non convince:
- Fai uno screenshot full-page (F12 → Ctrl+Shift+P → "Capture full-size screenshot")
- Incolla lo screenshot in Claude Code
- Descrivi cosa vuoi cambiare: "L'hero è troppo vuoto", "Il testo è troppo piccolo", "Le card servizi non hanno abbastanza contrasto"

---

## Prompt extra per iterazioni successive

### Se vuoi aggiungere un componente da 21st.dev:
"Vai su 21st.dev e trova un componente [tipo]. Copiamo il prompt e integralo nella sezione [nome sezione]. Disabilita lo screenshot loop per questo componente perché è animato."

### Se vuoi aggiungere le producer notes (Fase 3):
"Ora aggiungiamo l'overlay delle producer notes. Usa Rough.js per disegnare annotazioni handwritten (BPM 82, KEY Dm, REVERB) sopra la texture hero. Usa il font Caveat. L'overlay deve avere opacity tra 0.03 e 0.20. Anima con GSAP stagger e breathing opacity. Vedi il file notes-overlay.js."

### Per il deploy:
"Il sito è pronto. Aiutami a pushare su GitHub in un repository chiamato rnblue-landing e poi deployiamo su Vercel."
