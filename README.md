# Borbi Brand Websites

Multi-site Next.js monorepo featuring 6 brand websites for Borbi Enterprises.

## Sites

1. **Borbi Enterprises** (Main) — Overview of all 13 revenue streams
2. **Marketing Arm** — Full-stack marketing for local businesses
3. **Website Services** — Custom website design & development
4. **Automation Sales** — Workflow automation for scale
5. **Trained Agents** — Specialized AI agents for industry
6. **Equity Research** — Interactive equity research reports

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS + custom Glass UI components
- **Monorepo**: Turbo for build orchestration
- **Animation**: Framer Motion
- **Forms**: n8n webhook integration
- **Deployment**: Vercel (recommended) or GitHub Pages

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Sites run on:
- Borbi Enterprises: http://localhost:3000
- Marketing Arm: http://localhost:3001
- Website Services: http://localhost:3002
- Automation Sales: http://localhost:3003
- Trained Agents: http://localhost:3004
- Equity Research: http://localhost:3005

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Project Structure

```
brand-websites/
├── apps/
│   ├── borbi-enterprises/        # Main site
│   ├── marketing-arm/            # Marketing services site
│   ├── websites-services/        # Website design site
│   ├── automation-sales/         # Automation products
│   ├── trained-agents/           # AI agent products
│   └── equity-research/          # Research product
├── packages/
│   └── glass-ui/                 # Shared component library
│       ├── components/           # Reusable React components
│       ├── design-tokens.ts      # Design system (colors, spacing)
│       └── index.ts              # Package exports
├── turbo.json                    # Turbo monorepo config
├── package.json                  # Root dependencies
└── README.md                     # This file
```

## Features

### Glass UI Component Library

Shared design system with:
- **Hero** — Landing section with CTA
- **GlassCard** — Translucent card component
- **GlassButton** — Call-to-action buttons
- **ServiceGrid** — 3-column service grid
- **PricingCard** — Pricing tier cards
- **ContactForm** — Form with n8n webhook integration
- **CTA** — Call-to-action section
- **Footer** — Site footer with links
- **FAQ** — Collapsible FAQ section

### Responsive Design

- Mobile-first Tailwind CSS
- Breakpoints: 640px, 1024px, 1280px
- 48px+ touch targets for accessibility
- Dark theme (#0f172a background)

### Form Handling

All contact forms POST to n8n webhook:
```
POST http://localhost:5678/webhook/borbi-contact-form
```

Payload:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "message": "Your message here",
  "source": "marketing-arm"
}
```

### Case Studies & Portfolio

Each site includes:
- Real-world case studies with metrics
- Portfolio grids showing past work
- Interactive ROI calculators
- Pricing breakdowns
- Process flowcharts

## Environment Variables

Create `.env.local` in root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_N8N_WEBHOOK=http://localhost:5678/webhook/borbi-contact-form
SENDGRID_API_KEY=your_sendgrid_key
```

## Deployment

### Vercel (Recommended)

1. Push repo to GitHub
2. Import repo in Vercel dashboard
3. Set environment variables
4. Deploy (automatic on push)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### GitHub Pages

Build static export and deploy to gh-pages branch:

```bash
npm run export
npm run deploy
```

### Self-Hosted

Run on Mac Mini or any server:

```bash
npm run build
npm run start
```

## Testing

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Build Test

```bash
npm run build
```

## Performance

Target metrics:
- Lighthouse Performance: 85+
- Lighthouse Accessibility: 95+
- First Contentful Paint: <2s
- Largest Contentful Paint: <3s

Check with:
```bash
npm run lighthouse
```

## Forms & Email

### Contact Form Flow

1. User fills form on any site
2. Form POSTs to n8n webhook
3. n8n validates and stores in database
4. n8n sends confirmation email to user
5. n8n sends alert email to Wyatt
6. User redirected to success message

### Setup n8n

1. Start n8n: `npm run n8n` (if installed)
2. Go to http://localhost:5678
3. Create webhook workflow (see [N8N_WORKFLOWS.md](./N8N_WORKFLOWS.md))
4. Set NEXT_PUBLIC_N8N_WEBHOOK in .env

## Customization

### Add New Site

1. Create new folder in `apps/`
2. Copy structure from existing site
3. Update `turbo.json` with new site config
4. Update package.json scripts
5. Deploy to new subdomain

### Modify Design

Edit `packages/glass-ui/design-tokens.ts` to change:
- Colors
- Spacing
- Typography
- Shadows and effects

Changes apply to all sites automatically.

### Update Content

Edit each site's `pages/index.tsx` to:
- Change copy and messaging
- Update pricing
- Add new case studies
- Modify CTAs

## Troubleshooting

**Forms not working?**
- Check n8n is running on port 5678
- Verify NEXT_PUBLIC_N8N_WEBHOOK in .env
- Check browser console for POST errors

**Build fails?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node -v` (needs 18+)
- Run type check: `npm run type-check`

**Slow page load?**
- Run Lighthouse: `npm run lighthouse`
- Optimize images (use next/image)
- Enable caching in Vercel

**Mobile looks broken?**
- Check responsive breakpoints in Tailwind config
- Test on actual device or browser DevTools
- Ensure 48px+ touch targets on buttons

## Contributing

- All code in TypeScript
- Follow existing component patterns
- Test on mobile before commit
- Run `npm run lint` and `npm run type-check`
- Push to GitHub and deploy via Vercel

## License

© 2026 Borbi Enterprises. All rights reserved.

## Support

Questions or issues? Contact: hello@borbienterprises.com

---

**Last Updated**: February 21, 2026
**Status**: Production Ready (Vercel Deployment)
**Next**: Add real case study content + deploy to production domains
