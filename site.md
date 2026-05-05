# Nagor Samaj Samuhlagnotsav 2025 — Complete Page Blueprint

> **Purpose:** This document is a full technical + content blueprint for the digital group wedding invitation page for Nagor Samaj. Every section is described in detail — what it contains, how it is structured, what assets it uses, and how it is implemented in the current HTML.

---

## GLOBAL PAGE SETUP

### Page Title & Meta
- **HTML `<title>`:** `Nagor Samaj Samuhlagnotsav 2025 May 10 digital invitation card.`
- **Description:** `A premium mobile-first digital invitation for Nagor Samaj Samuhlagnotsav 2025.`
- **Language:** Gujarati (primary content) + English (labels/headings)
- **Auto-play audio:** Played automatically on load (attempts autoplay, then on interaction).
- **Styling:** Powered by Tailwind CSS, custom glassmorphism, and royal gradients.

### Visual Theme & Aesthetics
- **Color Palette:**
  - Ivory (`#fff7e6`)
  - Marigold (`#e8aa2e`)
  - Vermilion (`#9f1d20`)
  - Wine (`#4a1116`)
  - Rosewood (`#7a1d2b`)
- **Typography:**
  - Display: `Yeseva One`
  - Gujarati: `Eczar`, `Noto Sans Gujarati`
- **Background:** Rich radial gradients with a subtle 32px grid pattern overlay.
- **Decorative Elements:** Traditional Swastika SVGs and foil rails.

### Loading Screen
- A clean full-screen custom invitation preloader (`#loader`) with the Ganpati image, Gujarati event title/date, and one animated progress line.

### Sticky Navigation Bar
- Glassmorphism effect (`backdrop-filter: blur(18px)`).
- Contains traditional Swastika icons and the Nagor Samaj title in Gujarati.

---

## SECTION 1 — HERO / HOME SECTION (`#home`)

### What It Is
A royal-themed hero section with a mandala background, foil rails, decorative Swastikas, and a countdown timer.

### Content
- **Date Label:** `10.May.2026`
- **Main Heading:** `Wedding Ceremony` (Yeseva One font)
- **Subheading (Gujarati):** `નાગોર સમાજ સમૂહલગ્નોત્સવ 2025`
- **Countdown Timer:** Live JS-driven days, hours, minutes, and seconds.
- **Ganpati Medallion:** A floating image of Ganesha in a circular frame.
  - Image: `assets/ganesh-wedding.png`

---

## SECTION 2 — SACRED INVITATION & VENUE

### What It Is
Visual representation of the invitation and community venue.

### Content
- **Krishna Image:** `assets/krishna-wedding.png` with caption `શ્રી કૃષ્ણમ વંદે જગત ગુરૂ`.
- **Invitation Card:** `assets/invitation.png` showing the official community invite.
- **Invitation Text:** Welcoming guests to bless the couples and enjoy the community feast.
- **Venue Gallery:**
  - Nagor Gate No. 1 (`.../1090.JPG`)
  - Nagor Gate No. 2 (`.../956.jpg`)
  - Nagor (`.../966.jpg`)

---

## SECTION 3 — DONOR / SPONSOR BLOCK

### What It Is
Honoring the main donor family with a "Royal Card" design.

### Content
- **Main Donor:** `સ્વ. વાલજીભાઈ પુનાભાઈ બલદાણીયા પરિવાર` (Late Valjibhai Punabhai Baldaniya Family).
- **Sub-tributes:**
  - `સ્વ. મંજુલાબેન રતિલાલભાઈ વાલજીભાઈ બલદાણીયા`
  - `હસ્તે: શ્રી અશ્વીનભાઈ રતિલાલભાઈ વાલજીભાઈ બલદાણીયા પરિવાર.`

---

## SECTION 4 — COUPLES SECTION (`#blog`)

### What It Is
A dynamic grid of 5 couples being married at the Samuhlagnotsav.

### Implementation
- Rendered via JavaScript from a `couples` array.
- Each card includes a photo, names, description, and "Open Invitation" / "WhatsApp" share links.

---

## SECTION 5 — WEDDING EVENTS (`#events`)

### What It Is
Timeline of the wedding rituals on May 10, 2026.

### Events List
1. **Ganesh Sthapana:** 8:00 AM
2. **Mandva Ropan:** 9:30 AM
3. **Grah Shanti:** 10:00 AM
4. **Hast Melap:** 11:00 AM
5. **Samuh Prasad:** 12:00 PM
6. **Mangal Fera:** 12:15 PM
7. **Satkar Samarambh:** 3:15 PM
8. **Kanya Viday:** 5:00 PM

---

## SECTION 6 — KEY CONTACT (`#keycontact`)

### What It Is
Contact details for gifts and information.

---

## SECTION 7 — FOOTER (`#footer`)

### What It Is
Minimalist site-wide footer.

### Content
- **Copyright:** `© 2026 Ekankotri.in | All Rights Reserved`

---

## JAVASCRIPT & INTERACTIVITY

- **Countdown:** Updates every second targeting `1778351400000` (May 10, 2026).
- **Reveal Animations:** Intersection Observer triggers `reveal` class for scroll-in effects.
- **Music:** Automatically plays on load; if blocked, resumes on first user interaction.
- **Dynamic Rendering:** Couples and Events are injected into the DOM via JS.
