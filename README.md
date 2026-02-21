# Borbi Enterprises — Brand Website Suite

Multi-page React SPA with Glass UI design for Borbi Enterprises and all 6 sub-branch pages.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Main Borbi Enterprises hub |
| `/marketing` | Marketing Arm — SEO, Social, Platinum packages |
| `/websites` | Website Services — Portfolio, process, pricing |
| `/automation` | Automation Sales — ROI calculator, case studies |
| `/agents` | Trained Agents — AI agent packages with portal demo |
| `/equity` | Equity Research — Interactive demo, sample reports |
| `/landing` | Landing Page — Enterprise story, 13 revenue streams |

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (Glass UI components)
- **React Router** (HashRouter for GitHub Pages)
- **Lucide React** icons
- **Netlify Forms** compatible contact forms

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build  # outputs to dist/
```

### GitHub Pages (Automatic)
Push to `main` → GitHub Actions builds and deploys to Pages.

### Manual Deploy
1. `npm run build`
2. Upload `dist/` to any static host

## Live URL

https://borbibuilds.github.io/borbi-websites/

## Design System

- **Glass UI**: Frosted panels with `backdrop-filter: blur()`
- **Colors**: Indigo/purple gradient palette on dark background
- **Typography**: Inter font family
- **Responsive**: Mobile-first, all breakpoints covered
- **Accessible**: WCAG 2.1 AA compliant contrast ratios
