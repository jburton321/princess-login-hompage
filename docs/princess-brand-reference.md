# Princess Cruises — Brand Scrape

> **Project copy:** Reference for Princess Promotions / PCL-aligned UI. Source file from local scrape; tokens are applied in `app/globals.css` and Red Hat fonts in `app/layout.tsx`.

**Domain:** princess.com  
**Parent:** Carnival Corporation  
**Founded:** 1965  
**HQ:** Santa Clarita, CA  
**Scraped:** April 2026  

---

## 01 — Color System

### Primary Brand Palette

Pantone-matched colors from the official PCL Brand Book (Feb 2020). These two colors plus white form the entire logo system.

| Name | Hex | Pantone | RGB | CMYK | Role |
|------|-----|---------|-----|------|------|
| Princess Blue | `#00538B` | PMS 7462 C | 0, 83, 139 | 100, 71, 22, 5 | Logo, headers, primary CTA, navigation |
| Princess Grey | `#54575A` | PMS Cool Gray 11 C | 84, 87, 90 | 66, 56, 53, 29 | Logo wordmark, body copy, secondary text |
| White | `#FFFFFF` | — | 255, 255, 255 | 0, 0, 0, 0 | Backgrounds, reversed logo on dark |

### Extended Web Palette

Extracted from the live princess.com style guide (Adobe AEM).

| Token | Hex | Role |
|-------|-----|------|
| Blue Dark | `#003B5C` | Footer, deep overlays, dark sections |
| Auxiliary Blue Dark | `#002B49` | Deepest navy tier |
| Blue Light | `#0067A5` | Hover states, lighter blue accents |
| Blue Bright | `#0071C2` | Links, interactive elements |
| Accent Gold | `#C5A572` | Premium tier, luxury accents |
| Accent Gold Dark | `#A68B5B` | Pressed/hover gold state |
| Accent Silver | `#A7A9AC` | Subtle metallic accent |
| Sanctuary Rose Gold | `#B08D6E` | Sanctuary Collection sub-brand |
| CTA Red | `#D4272E` | Sale badges, urgency elements |
| McKinley Pink | `#E60060` | AI assistant sparkle accent |
| Neutral Dark | `#333333` | Headings, primary text on light bg |
| Neutral Medium | `#666666` | Secondary body text |
| Neutral Light | `#999999` | Tertiary text, placeholders |
| Primary Light | `#F5F5F5` | Section backgrounds, cards |
| Primary Extra Light | `#FAFAFA` | Alternate surface |
| Border | `#E0E0E0` | Card borders, dividers |

### Color Combinations in Use

| Combo | Background | Foreground | Usage |
|-------|-----------|------------|-------|
| Primary CTA | `#00538B` | `#FFFFFF` | Buttons, hero overlays, nav bar |
| Content Cards | `#FFFFFF` | `#00538B` headers / `#333333` body | Dominant content pattern |
| Footer / Dark | `#003B5C` | `#FFFFFF` | Footer, deep promo sections |
| Alternate Sections | `#F5F5F5` | `#54575A` | Visual rhythm between white sections |
| Premium / Luxury | `#C5A572` → `#A68B5B` gradient | `#FFFFFF` | Sanctuary Collection, suite CTAs |
| Sale / Urgency | `#D4272E` | `#FFFFFF` | Spring Savings, last-minute deals |

---

## 02 — Typography

### Web Font System

| Role | Family | Source | License |
|------|--------|--------|---------|
| Display / Headlines | Red Hat Display | Google Fonts | Free / Open |
| Body / UI | Red Hat Text | Google Fonts | Free / Open |
| Logo Wordmark (print only) | Trajan Bold | Adobe | Commercial |
| Former Tagline | Pill Gothic 300mg Regular | Christian Robertson | Commercial |

### Type Scale (from site style guide)

| Element | Font | Size | Weight | Case |
|---------|------|------|--------|------|
| H1 | Red Hat Display | 40–48px | 900 | Sentence |
| H2 | Red Hat Display | 28–32px | 700 | Sentence |
| H3 | Red Hat Display | 20–24px | 700 | Sentence |
| Body XL | Red Hat Text | 20px | 400 | Sentence |
| Body L | Red Hat Text | 18px | 400 | Sentence |
| Body M | Red Hat Text | 16px | 400 | Sentence |
| Body S | Red Hat Text | 14px | 400 | Sentence |
| Eyebrow | Red Hat Text | 16px | 700 | Uppercase, letter-spacing 10% |
| Eyebrow Small | Red Hat Text | 14px | 400 | Uppercase, letter-spacing 10% |

---

## 03 — Logo and Brand Marks

### Sea Witch ("Our Princess")

The primary brand icon — a woman's silhouette with flowing hair that becomes ocean waves, crowned with a tiara. Per the brand book: "Our Princess is not some mythological sea creature or aloof member of royalty. She's real and relatable. Her hair represents that moment of connection that starts as a ripple and turns into a wave."

**Usage rules:**
- The sea witch can be used standalone only where the brand has been clearly established (e.g. on-ship)
- Two-color logo is blue (#00538B) sea witch + grey (#54575A) wordmark — NOT blue and black
- White version for dark backgrounds
- Never change colors, remove the ® mark, stretch, or combine assets from different lockups
- Minimum print width: 2.25 inches / minimum web width: 170px
- Sea witch alone minimum: 0.70 inches / 50px web

### Other Graphic Elements

| Element | Description | Usage Context |
|---------|-------------|---------------|
| Wave Lines | Horizontal sinusoidal wave pattern derived from the sea witch hair | Section dividers, background texture, decorative accents |
| Tiara / Crown | Isolated crown from the sea witch mark | Gold for premium tiers (Sanctuary, Suites), blue for standard |
| MedallionClass Badge | Double-ring circular badge with centered type | Wearable tech branding, app UI, on-ship signage |
| Ship Silhouette | Stylized cruise ship profile with sea witch on hull | Destination cards, itinerary graphics, promo materials |
| Compass Rose | Navigational star motif | Destination exploration, itinerary maps, wayfinding |

---

## 04 — Brand Identity

### Archetype: The Everyperson

- Motto: All men and women are created equal
- Core desire: Connecting with others
- Greatest fear: To be left out or to stand out from the crowd
- Strategy: Develop ordinary solid virtues, be down-to-earth, the common touch
- Talent: Realism, empathy, lack of pretense

### Brand Promise

Help you connect to what matters most — your loved ones, the destinations you visit, and new friends.

### Shared Purpose

Share our world, share our hearts, protect our Earth, and create lasting memories.

### Brand Qualities

Genuine, Engaging, Innovative, Happy, Passionate, Expert

### Brand Personality Traits

- Quiet leader, doesn't show off
- Hard-working and collaborative
- Irresistibly likable and social but not the center of attention
- Empathetic and approachable without being touchy-feely
- Inclusive and open, not elitist or judgmental
- Matter-of-fact, doesn't speak in hyperbole
- Honest and trustworthy
- Down to earth, not fancy — pulled-together without being overdone

### Voice Persona: "Charming Fellow Traveler and Friend"

Happy, relatable, well-traveled but never boring. Contagious enthusiasm without being annoying. Curious and self-aware enough not to take herself too seriously. A glass of wine away from sassy. Everything she says comes from genuine awe and love of the world.

### Target: The Meaningful Traveler

Seeks connection with loved ones, cultures, new destinations, and shared experiences. Hands-on learners with a well-balanced view of life — people-people who understand the world is better experienced together.

### Copy Guidelines

**Do:**
- Write simply, appreciated by all
- Share expertise without talking down or showing off
- Bring the happy — these are vacations not tax audits
- Share passion for travel, people, life
- Use third-party endorsements and awards
- Incorporate guest stories

**Don't:**
- Use clichés
- Use puns (e.g. "Year-End Sail")
- Get cutesy (e.g. "Aloha-ha-ha")
- Cram long feature lists — one or two concrete examples instead
- Be flowery or overly dramatic

---

## 05 — Live Asset URLs

### Logo and Icons

| Asset | URL |
|-------|-----|
| Primary Logo (full) | `https://www.princess.com/content/dam/princess/cfm-assets-demo/Princess%20logo%20redesign.png` |
| Subscribe Icon | `https://www.princess.com/content/dam/princess/cfm-assets-demo/suscribe_icon.png` |
| User Account Icon | `https://www.princess.com/content/dam/princess/cfm-assets-demo/userIcon.png` |
| McKinley AI Sparkle | `https://www.princess.com/content/dam/princess/corporate/icons/sparkle-pink.svg` |

### Sub-Brand Logos

| Asset | URL |
|-------|-----|
| Sanctuary Collection | `https://www.princess.com/content/dam/princess/corporate/icons/Sanctuary-Logo-01_SC-Collection-RoseGold1.png` |
| America 250 Logo | `https://www.princess.com/content/dam/princess/destination/alaska/NavyRed_250_MainLogo.png` |

### Promotional Assets (Current — April 2026)

| Asset | URL |
|-------|-----|
| Spring Sale Lockup (white) | `https://www.princess.com/content/dam/princess/homepage/hero/march-2026/us/mar-31-apr-2-lockup-white.png` |
| Spring Sale Lockup (blue) | `https://www.princess.com/content/dam/princess/homepage/hero/march-2026/us/mar-31-apr-2-lockup-blue.png` |
| Hero Video (desktop) | `https://www.princess.com/content/dam/hero-v2-assets/fy26-q2-spring-web-hp-30.mp4` |
| Hero Video (mobile) | `https://www.princess.com/content/dam/hero-v2-assets/fy26-q2-spring-web-mb-30-v2.mp4` |

### App Store Badges

| Asset | URL |
|-------|-----|
| Apple App Store | `https://www.princess.com/content/dam/princess/corporate/icons/badge-apple-app-store.png` |
| Google Play | `https://www.princess.com/content/dam/princess/corporate/icons/badge-google-play-store.png` |

### Reference Documents

| Asset | URL |
|-------|-----|
| Brand Book PDF | `https://www.princess-cruises.dk/sites/default/files/pdf/pcl_brand_book_mvp.pdf` |

### Image CDN

Base URL: `https://assets.princess.com/is/image/princesscruises/`

Append image name + aspect ratio suffix. Supported ratios: `16x9`, `4x5-Portrait`, `1x1-Square`

Example: `https://assets.princess.com/is/image/princesscruises/whale-fin-sunset:16x9`

---

## 06 — UI Patterns

| Pattern | Details |
|---------|---------|
| Border Radius | Cards: 8–12px. Buttons: 4–6px. No fully rounded pills on primary CTAs. |
| Card Shadows | Subtle — typically `0 2px 8px rgba(0,0,0,0.08)`. Elevation through bg color shifts, not heavy shadows. |
| Primary CTA | Solid `#00538B` bg + white text. No outlines or ghost buttons for primary actions. |
| Secondary CTA | Outlined/bordered with blue text on white/light bg. |
| Carousel Pattern | Horizontal scroll carousels are the dominant content pattern. Counter: "01 / 06" format. Auto-advance. |
| Image Treatment | Scene7 CDN with aspect ratio modifiers. Warm, interpersonal — connection between people, not solo travelers. Soft natural lighting. |
| Platform | Adobe Experience Manager (AEM) as CMS. Adobe Dynamic Media (Scene7) for images. |

---

## 07 — CSS Custom Properties

```css
:root {
  /* ── Princess Blue System ── */
  --pcl-blue:            #00538B;
  --pcl-blue-light:      #0067A5;
  --pcl-blue-dark:       #003B5C;
  --pcl-blue-aux-dark:   #002B49;
  --pcl-blue-bright:     #0071C2;

  /* ── Neutrals ── */
  --pcl-grey:            #54575A;
  --pcl-black:           #000000;
  --pcl-neutral-dark:    #333333;
  --pcl-neutral-medium:  #666666;
  --pcl-neutral-light:   #999999;
  --pcl-surface:         #F5F5F5;
  --pcl-surface-light:   #FAFAFA;
  --pcl-border:          #E0E0E0;
  --pcl-white:           #FFFFFF;

  /* ── Accents ── */
  --pcl-gold:            #C5A572;
  --pcl-gold-dark:       #A68B5B;
  --pcl-silver:          #A7A9AC;
  --pcl-rose-gold:       #B08D6E;
  --pcl-red:             #D4272E;
  --pcl-pink:            #E60060;
  --pcl-green:           #00A651;

  /* ── Typography ── */
  --pcl-font-display:    'Red Hat Display', system-ui, sans-serif;
  --pcl-font-body:       'Red Hat Text', system-ui, sans-serif;
  --pcl-font-logo:       'Trajan Pro', Georgia, serif;
}
```

---

## 08 — Tailwind Config Partial

```js
// tailwind.config.js — extend block
{
  theme: {
    extend: {
      colors: {
        pcl: {
          blue:         '#00538B',
          'blue-light': '#0067A5',
          'blue-dark':  '#003B5C',
          'blue-aux':   '#002B49',
          'blue-bright':'#0071C2',
          grey:         '#54575A',
          gold:         '#C5A572',
          'gold-dark':  '#A68B5B',
          silver:       '#A7A9AC',
          'rose-gold':  '#B08D6E',
          red:          '#D4272E',
          pink:         '#E60060',
          green:        '#00A651',
        },
        neutral: {
          dark:   '#333333',
          medium: '#666666',
          light:  '#999999',
        },
        surface: {
          DEFAULT: '#F5F5F5',
          light:   '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['"Red Hat Display"', 'system-ui', 'sans-serif'],
        body:    ['"Red Hat Text"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        btn:  '5px',
      },
    },
  },
}
```
