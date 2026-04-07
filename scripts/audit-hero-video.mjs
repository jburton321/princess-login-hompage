#!/usr/bin/env node
/**
 * Static audit: hero background video wiring + asset on disk.
 * For live playback, open the page and confirm the <video> plays (DevTools → Network → hero-loop.mp4).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mp4 = path.join(root, "public", "hero-loop.mp4");
const pageTsx = path.join(root, "app", "page.tsx");
const hero2Tsx = path.join(root, "app", "components", "Hero2.tsx");
const hero2LeftPanelTsx = path.join(root, "app", "components", "Hero2LeftPanel.tsx");
const heroBackgroundVideoTsx = path.join(root, "app", "components", "HeroBackgroundVideo.tsx");

let failed = false;
function ok(msg) {
  console.log(`✓ ${msg}`);
}
function fail(msg) {
  console.error(`✗ ${msg}`);
  failed = true;
}

console.log("Hero video audit — princess-promotions-login-page\n");

if (!fs.existsSync(mp4)) {
  fail(`Missing ${path.relative(root, mp4)} — video cannot play without this file.`);
} else {
  const st = fs.statSync(mp4);
  if (st.size < 512) {
    fail(`${path.relative(root, mp4)} exists but is tiny (${st.size} bytes); likely corrupt or placeholder.`);
  } else {
    ok(`public/hero-loop.mp4 exists (${(st.size / 1024 / 1024).toFixed(2)} MiB)`);
  }
}

const heroSrc = [pageTsx, hero2Tsx, hero2LeftPanelTsx, heroBackgroundVideoTsx]
  .filter((p) => fs.existsSync(p))
  .map((p) => fs.readFileSync(p, "utf8"))
  .join("\n");

if (!fs.existsSync(pageTsx)) {
  fail(`Missing ${path.relative(root, pageTsx)}`);
} else if (!fs.existsSync(hero2Tsx)) {
  fail(`Missing ${path.relative(root, hero2Tsx)}`);
} else if (!fs.existsSync(hero2LeftPanelTsx)) {
  fail(`Missing ${path.relative(root, hero2LeftPanelTsx)}`);
} else if (!fs.existsSync(heroBackgroundVideoTsx)) {
  fail(`Missing ${path.relative(root, heroBackgroundVideoTsx)}`);
} else {
  const pageContent = fs.readFileSync(pageTsx, "utf8");
  const hero2Content = fs.readFileSync(hero2Tsx, "utf8");
  const leftPanelContent = fs.readFileSync(hero2LeftPanelTsx, "utf8");
  const checks = [
    [/<video[\s\S]*?>/i.test(heroSrc), "<video> present (HeroBackgroundVideo / hero stack)"],
    [/hero-loop|HERO_LOOP_SRC|\/hero-loop\.mp4/.test(heroSrc), "hero video path /hero-loop.mp4"],
    [/autoPlay/.test(heroSrc), "autoPlay (required for background playback)"],
    [/muted/.test(heroSrc), "muted (required for autoplay in browsers)"],
    [/loop/.test(heroSrc), "loop"],
    [/playsInline/.test(heroSrc), "playsInline (iOS)"],
    [/Hero2/.test(pageContent), "page.tsx renders Hero2"],
    [/Hero2LeftPanel/.test(hero2Content), "Hero2 renders Hero2LeftPanel"],
    [leftPanelContent.includes("isolate") && leftPanelContent.includes("overflow-hidden"), "Hero2LeftPanel: isolate + overflow-hidden"],
  ];
  for (const [pass, label] of checks) {
    if (pass) ok(`${label}`);
    else fail(`missing — ${label}`);
  }
}

console.log("");
if (failed) {
  console.error("Audit failed.\n");
  process.exit(1);
}
console.log("Static audit passed. In the browser: open / → Elements → <video> should not be paused after load (muted autoplay).\n");
process.exit(0);
