# Dr. Krupa's Child Dental Clinic — Website

Premium pediatric dental clinic website for **Dr. Krupa's Child Dental Clinic**, Gandhidham (Gujarat).
Built with **Next.js (App Router) · React · Tailwind CSS · Framer Motion**.

## Run

```bash
npm install
npm run dev      # development server (http://localhost:3000)
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.jsx          # SEO metadata, fonts, Dentist JSON-LD
  page.jsx            # home page (all sections)
  globals.css         # design system: buttons, cards, fields, motion
  dental-tips/        # lightweight dental-tips page (blog-ready)
components/
  Navbar.jsx          # sticky nav, scroll-spy, mobile hamburger
  Hero.jsx            # hero composition + parallax
  AboutSection.jsx    # "Where Little Smiles Feel Safe"
  TrustSection.jsx    # 3 trust pillars
  PainlessDentistry.jsx
  Services.jsx        # 6 service cards
  WhyChooseUs.jsx     # 01–04 features
  DentalExperience.jsx# 4-step visit journey timeline
  ParentEducation.jsx # 3 dental tip cards (blog-ready)
  Testimonials.jsx    # placeholders — replace with REAL Google reviews
  Reviews.jsx         # "Trusted by Families in Gandhidham" (90+ reviews)
  InstagramSection.jsx# 6 placeholder posts
  AppointmentSection.jsx / AppointmentForm.jsx  # validated form
  Contact.jsx / MapSection.jsx / Footer.jsx
components/ui/        # Logo, Icons, Reveal, SectionHeading, StatCounter, FloatingDental
lib/site.js           # ALL clinic content: phone, email, address, links, services…
public/images/        # logo (used as-is), hero + painless illustrations
scripts/qa-check.mjs  # Playwright responsive/interaction smoke tests
```

## Content & configuration

Everything a client might change lives in **`lib/site.js`** — phone, email, address,
Instagram/Facebook URLs, map links, services, tips, etc. The Google Maps embed,
"Get Directions" and "View Google Reviews" links are generated there automatically.

## Before going live — checklist

1. **Domain** — set the real production URL in `app/layout.jsx` (`metadataBase`) for
   correct Open Graph / social preview URLs.
2. **Appointment form** — the form is fully validated client-side and shows a success
   state. Wire `handleSubmit` in `components/AppointmentForm.jsx` to a real endpoint
   (email API, WhatsApp Business API, or a Google Sheet) — a `// TODO` marks the spot.
3. **Testimonials** — replace the placeholder cards in `components/Testimonials.jsx`
   with real Google reviews (keep the source honest — do not fabricate quotes).
4. **Instagram grid** — swap the 6 placeholder tiles in `components/InstagramSection.jsx`
   for real post thumbnails (or an Instagram feed embed).
5. **Dental Tips blog** — `ParentEducation` + `app/dental-tips` are ready to grow into a
   full blog section.
6. **Logo** — the official clinic logo is used as-is (`public/images/logo.png`).
   If the clinic shares a higher-resolution original, simply replace that file.

## Quality checks

```bash
node scripts/qa-check.mjs   # requires the dev server to be running
```

Asserts: mobile hamburger & stacking, no horizontal overflow, tel/social links,
form validation + success flow, map iframe, SEO title, JSON-LD.

Accessibility: semantic landmarks, labelled form fields with inline errors,
`aria-invalid`/`aria-describedby`, skip-link, visible focus rings, alt text,
and `prefers-reduced-motion` support for all animations.
