# South Island Itinerary · November 2026

A multi-page static site for a New Zealand South Island trip. Each day keeps its own visual character; a shared nav bar ties the site together.

## Structure

```
site/
├── index.html        ← landing page (trip overview, day cards)
├── day1.html         ← Christchurch arrival (clean green, light theme)
├── day2.html         ← Christchurch → Lake Tekapo (dark cinematic theme)
├── assets/
│   └── nav.css       ← shared top-bar navigation
└── README.md
```

No build step. No JavaScript framework. Just HTML + CSS.

## Deploy to GitHub Pages

1. **Create a new GitHub repo** (public or private if you have Pro). Suggested name: `south-island-2026`.

2. **Push these files to the repo root** — the contents of this `site/` folder go at the top level. For example:

   ```bash
   git init
   git add .
   git commit -m "Initial itinerary site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/south-island-2026.git
   git push -u origin main
   ```

3. **Enable Pages**: in the repo, go to **Settings → Pages**. Under **Build and deployment**, set:
   - Source: **Deploy from a branch**
   - Branch: **`main`**, folder **`/ (root)`**
   - Save.

4. Wait ~30–60 seconds. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/south-island-2026/
   ```

   GitHub will show the live URL in the Pages settings once the first deploy finishes.

## Adding more days

1. Duplicate either `day1.html` (light style) or `day2.html` (dark style) as `day3.html`.
2. Replace the content inside the `<body>` (keep the `<nav class="site-nav">` block at the top).
3. In the new file's nav block, change which `<li>` has `class="active"`.
4. In **every** other page's nav (`index.html`, `day1.html`, `day2.html`), add a new `<li><a href="day3.html">Day 3</a></li>`.
5. On `index.html`, copy the "Coming soon" `.day-card.future` block into a real `.day-card` entry. Update title, date, summary, and stats.

## Customising the nav

`assets/nav.css` defines two nav variants:

- `<nav class="site-nav">` — light translucent bar (use on light pages like `index.html` and `day1.html`)
- `<nav class="site-nav dark">` — dark translucent bar (use on dark cinematic pages like `day2.html`)

Both are sticky, blur-backed, and collapse the subtitle on narrow screens.

## Local preview

Any static server works. Easiest:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html` to open it directly in a browser — relative links between the pages will work fine from `file://`.

## Notes

- Times are local NZDT.
- Bus schedules and fuel prices were current at planning time; verify on the day, particularly around public holidays.
- Fonts (`Fraunces`, `Inter Tight`, `JetBrains Mono`) are loaded from Google Fonts on the day-2 and index pages. Day 1 uses system fonts only.
