# River & Rebirth Counseling

Website for **River & Rebirth Counseling** — a mental health counseling practice specializing in perinatal mental health, EMDR therapy, and trauma therapy, located in Fenton, Michigan.

## Site Structure

```
├── index.html                   Home page
├── about.html                   About the therapist
├── services.html                Services overview
├── perinatal-mental-health.html Perinatal mental health detail page
├── emdr-therapy.html            EMDR therapy detail page
├── trauma-therapy.html          Trauma therapy detail page
├── perinatal-support-sexual-assault-survivors.html Perinatal survivor support detail page
├── grief-therapy.html           Grief therapy detail page
├── fees-insurance.html          Fees, insurance & Good Faith Estimate
├── contact.html                 Contact details and crisis resources
├── assets/images/logo.png       Site logo and favicon image
└── assets/
    ├── css/styles.css           Main stylesheet
    ├── js/script.js             Navigation and animations
    └── images/                  Place site images here (see below)
```

## Design

- **Palette:** Sage green `#6B8F71`, soft teal `#5B8FA8`, dusty rose accent `#C4896A`, warm off-white `#FAF9F7`
- **Fonts:** [Lora](https://fonts.google.com/specimen/Lora) (headings) · [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) (body) via Google Fonts
- **Feel:** Gentle, safe, hopeful — designed for people in vulnerable life transitions

## Getting Started (Customization)

1. **Replace placeholder text** marked with `[brackets]` throughout the HTML files (therapist name, phone, address, fees, credentials, etc.)
2. **Add images** to `assets/images/`:
   - `headshot.jpg` — therapist headshot (referenced in `index.html`, `about.html`)
   - `hero-image.jpg` — optional hero background
   - `office-photo.jpg` — optional office/space photo
   - `logo.png` — site logo and favicon
3. **Update contact info** in all pages (phone, email, address, hours)
4. **Update contact details** in `contact.html` and site footer links as needed
5. **Set real fees** in `fees-insurance.html`

## Images

Image placeholders use CSS gradients and inline SVG. When real photos are available, replace the placeholder `<div>` elements with `<img>` tags as noted in the HTML comments.

## Technologies

- Pure HTML5, CSS3, and vanilla JavaScript — no frameworks or build tools required
- Google Fonts (loaded via CDN)
- Fully responsive (mobile, tablet, desktop)
- Accessible: semantic HTML, ARIA labels, skip links, keyboard navigation
- Performance-conscious: minimal dependencies, system font fallbacks
