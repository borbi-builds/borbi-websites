# Deployment Guide: Borbi Brand Websites

## Option 1: Vercel (Recommended)

### Prerequisites
- Vercel account (free tier OK)
- GitHub repo with code pushed
- Environment variables configured

### Step 1: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste GitHub repo URL: `https://github.com/borbibuilds/brand-websites`
5. Select "Turbo" as the framework

### Step 2: Configure Build Settings

Root Directory: `.` (leave default)
Build Command: `npm run build`
Output Directory: `.next`

### Step 3: Set Environment Variables

In Vercel dashboard:
```
NEXT_PUBLIC_API_URL=https://yourdomain.com
NEXT_PUBLIC_N8N_WEBHOOK=https://n8n.yourdomain.com/webhook/borbi-contact-form
SENDGRID_API_KEY=****your-key****
```

### Step 4: Deploy

Click "Deploy". Vercel will:
1. Clone repo
2. Install dependencies
3. Build all 6 Next.js apps
4. Deploy to CDN

Live in ~5-10 minutes.

### Step 5: Configure Domains

For each sub-site, add custom domain in Vercel:
- borbi.com → Borbi Enterprises
- marketing.borbi.com → Marketing Arm
- websites.borbi.com → Website Services
- automation.borbi.com → Automation Sales
- agents.borbi.com → Trained Agents
- research.borbi.com → Equity Research

---

## Option 2: GitHub Pages (Free, Static Only)

### Prerequisites
- Public GitHub repo
- No server-side functionality (forms must go to n8n)

### Step 1: Add Build Script

```bash
npm run build
npm run export
```

### Step 2: Configure GitHub Pages

Settings → Pages → Source: `gh-pages` branch

### Step 3: Deploy

```bash
npm run deploy
```

### Limitations
- No API routes
- No server-side rendering
- All forms POST directly to n8n webhook

---

## Option 3: Self-Hosted (Mac Mini)

### Prerequisites
- Node 18+ installed
- PM2 for process management
- Nginx/Apache for reverse proxy

### Step 1: Build

```bash
npm install
npm run build
```

### Step 2: Start Server

```bash
npm run start
# Or with PM2:
pm2 start "npm run start" --name "borbi-websites"
```

### Step 3: Configure Reverse Proxy

Nginx config to forward traffic to localhost:3000

### Step 4: Enable HTTPS

Use Let's Encrypt for SSL certificates

---

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Each site runs on:
- Borbi Enterprises: http://localhost:3000
- Marketing Arm: http://localhost:3001
- Website Services: http://localhost:3002
- Automation Sales: http://localhost:3003
- Trained Agents: http://localhost:3004
- Equity Research: http://localhost:3005

### Test Contact Forms Locally

```bash
curl -X POST http://localhost:5678/webhook/borbi-contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Test message",
    "source": "marketing-arm"
  }'
```

---

## GitHub Push Checklist

Before pushing to GitHub:

- [ ] All 6 sites build locally (`npm run build`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Contact forms POST to n8n webhook
- [ ] Portfolio images optimized (<100KB each)
- [ ] README.md complete with instructions
- [ ] .env.example file included (no real secrets)
- [ ] .gitignore covers node_modules, .env, build artifacts

### Push Commands

```bash
git add .
git commit -m "Complete: all 6 brand sites with Glass UI, case studies, responsive design"
git push origin main
```

---

## Post-Deployment

### 1. Test All Pages

Visit each site:
- [ ] Borbi Enterprises main page
- [ ] Marketing Arm form submission
- [ ] Website Services portfolio grid
- [ ] Automation Sales ROI calculator
- [ ] Trained Agents feature section
- [ ] Equity Research pricing

### 2. Test Contact Forms

Submit a test form on each site. Verify:
- [ ] Form accepts submission (no JS errors)
- [ ] n8n webhook receives data
- [ ] Wyatt receives email notification
- [ ] User gets confirmation email

### 3. Performance Check

Run Lighthouse on each site:

```bash
npm run lighthouse
```

Target scores:
- Performance: 85+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### 4. Mobile Test

Test on:
- iPhone 12 (375px)
- iPad (768px)
- Desktop (1280px+)

All pages should:
- [ ] Stack properly on mobile
- [ ] CTA buttons hit 48px+ touch target
- [ ] Images load fast (<2s)
- [ ] No horizontal scroll

---

## Monitoring

### Vercel Analytics

- Monitor page load times
- Track usage by region
- Alert on build failures

### Error Tracking

Sentry integration (optional):

```bash
npm install @sentry/nextjs
```

Configure in `next.config.js` for error reporting.

### Form Submission Tracking

Monitor n8n workflows:
- Visit http://localhost:5678
- Check "Executions" tab for failed submissions
- Review email logs for delivery issues

---

## Scaling

### Add More Sites

1. Duplicate site folder structure
2. Update turbo.json with new site
3. Add to deployment config
4. Deploy new site independently

### Multi-Region Deployment

Use Vercel's multi-region feature to:
- Serve content from nearest edge location
- Reduce latency globally
- Improve SEO (page speed = ranking factor)

---

## Troubleshooting

**Build fails locally?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node -v` (needs 18+)
- Check TypeScript errors: `npm run type-check`

**Forms not submitting?**
- Verify n8n webhook URL in env
- Check n8n is running on port 5678
- Test webhook with curl command above

**Slow page load?**
- Check image optimization (use next/image)
- Enable caching headers in Vercel
- Use Lighthouse to identify bottlenecks

**CORS errors?**
- Ensure n8n webhook accepts POST from your domain
- Add CORS headers in n8n webhook config

---

## Domain Setup (DNS)

### Borbi.com (Main)

```
A record: 76.76.19.165 (Vercel IP)
CNAME:    cname.vercel-dns.com
```

### Subdomains

```
marketing.borbi.com     → Vercel deployment
websites.borbi.com      → Vercel deployment
automation.borbi.com    → Vercel deployment
agents.borbi.com        → Vercel deployment
research.borbi.com      → Vercel deployment
n8n.borbi.com           → localhost:5678 (or hosted n8n)
```

---

## CI/CD Pipeline

### GitHub Actions

Auto-deploy on push:

```yaml
name: Deploy to Vercel
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Next Steps

1. **Push to GitHub** → Follow GitHub Push Checklist
2. **Deploy to Vercel** → Follow Vercel Setup
3. **Test All Forms** → Run Post-Deployment tests
4. **Monitor Performance** → Set up Vercel Analytics
5. **Scale Sites** → Add more as needed

Total setup time: ~30 minutes
