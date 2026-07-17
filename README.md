# NVan — Personal Portfolio

Static personal portfolio site for **NVan — Fullstack Developer**, hosted on GitHub Pages.

🔗 **Live:** https://nvan2903.github.io

## About

A clean, accessible, fast, and SEO-friendly single-page portfolio showcasing my work
in CRM, loyalty platforms, omnichannel customer communication (Chatwoot, Zalo OA),
Docker and cloud deployments.

## Tech

- **HTML5** — semantic markup, JSON-LD `Person` schema, full Open Graph & Twitter Card metadata
- **CSS3** — custom design system with CSS variables, dark/light themes, fluid typography, responsive grid
- **Vanilla JavaScript** — theme toggle with persistence, mobile menu, scroll spy, reveal-on-scroll via `IntersectionObserver`
- **No build step** — zero dependencies, plain static files served by GitHub Pages

## Project Structure

```
.
├── index.html              # Main entry point (single page portfolio)
├── 404.html                # Custom 404 page
├── robots.txt              # Crawler directives
├── sitemap.xml             # SEO sitemap
├── .nojekyll               # Disable Jekyll processing on GitHub Pages
├── README.md
└── assets/
    ├── css/style.css       # Theme tokens, layout, components, animations
    ├── js/main.js          # Theme toggle, nav, reveal, scroll spy
    ├── img/                # avatar.jpg, favicon.svg
    └── files/cv.pdf        # Downloadable CV
```

## Local Development

No tooling required. Open `index.html` directly, or serve it with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customization Checklist

When you fork or copy this site, update the following:

- [ ] `<title>`, meta `description`, and OG tags in `index.html:13-19`
- [ ] JSON-LD block in `index.html:25-44` (`sameAs`, `email`, `jobTitle`)
- [ ] Profile links in `index.html` `#contact` section
- [ ] Project cards (`#projects`) — replace `#` placeholder links with real demo/source URLs
- [ ] Avatar at `assets/img/avatar.jpg`
- [ ] CV file at `assets/files/cv.pdf`
- [ ] `robots.txt` and `sitemap.xml` URLs

## Accessibility

- Skip-to-content link
- Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`, `article`)
- Visible `:focus-visible` ring
- Respects `prefers-reduced-motion`
- Color contrast tuned for both themes
- `aria-label` / `aria-controls` / `aria-expanded` on interactive controls

## License

MIT — feel free to fork and adapt.
