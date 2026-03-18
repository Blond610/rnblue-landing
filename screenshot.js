/**
 * RnBlue Beats — Screenshot Loop
 *
 * Captures viewport screenshots of each section for design review.
 * Usage: node screenshot.js
 * Requires: npm install (puppeteer + serve)
 */

const puppeteer = require('puppeteer');
const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = path.join(__dirname, 'temporary_screenshots');

const SECTIONS = [
  { name: 'hero', selector: '#hero' },
  { name: 'servizi', selector: '#servizi' },
  { name: 'contatto', selector: '#contatto' }
];

async function run() {
  // Ensure output dir exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Start local server
  console.log(`Starting server on port ${PORT}...`);
  const server = spawn('npx', ['serve', '.', '-l', PORT, '--no-clipboard'], {
    cwd: __dirname,
    shell: true,
    stdio: 'pipe'
  });

  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  let browser;
  try {
    browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

    // Wait for GSAP entrance animations to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

    for (const section of SECTIONS) {
      const el = await page.$(section.selector);
      if (!el) {
        console.warn(`Section "${section.name}" not found, skipping.`);
        continue;
      }

      const filename = `${section.name}_${timestamp}.png`;
      const filepath = path.join(OUTPUT_DIR, filename);

      await el.screenshot({ path: filepath });
      console.log(`Captured: ${filename}`);
    }

    // Full page screenshot
    const fullFilename = `fullpage_${timestamp}.png`;
    const fullFilepath = path.join(OUTPUT_DIR, fullFilename);
    await page.screenshot({ path: fullFilepath, fullPage: true });
    console.log(`Captured: ${fullFilename}`);

    console.log('\nAll screenshots saved to temporary_screenshots/');
  } catch (err) {
    console.error('Screenshot error:', err.message);
  } finally {
    if (browser) await browser.close();
    server.kill();
    process.exit(0);
  }
}

run();
