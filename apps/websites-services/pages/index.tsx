import React from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassButton,
  CTA,
  Footer,
  BeforeAfterSlider,
  MetricsCounter,
  CaseStudyCard,
  PortfolioGrid,
  ScrollReveal,
  TransformationShowcase,
  MockupBefore,
  MockupAfter,
  getCaseStudiesByArm,
} from '@borbi/glass-ui';

const caseStudies = getCaseStudiesByArm('Website Services');

const PROCESS = [
  { step: '01', title: 'Discovery', description: 'Deep brand interview. We learn your voice, values, and customer language.' },
  { step: '02', title: 'Design', description: 'Visual concepts presented. You approve direction before we build.' },
  { step: '03', title: 'Build', description: 'Custom React/Next.js site with responsive design and fast performance.' },
  { step: '04', title: 'Deploy', description: 'Live on your domain. Hosted, maintained, and updated by us.' },
];

export default function WebsitesServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">← Borbi</a>
          <div className="flex items-center gap-6">
            <a href="#case-studies" className="text-slate-300 hover:text-cyan-400 transition text-sm">Case Studies</a>
            <a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition text-sm">Portfolio</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition text-sm">Get Quote</a>
            <h1 className="text-white font-bold">Website Services</h1>
          </div>
        </div>
      </nav>

      <Hero
        title="Custom Websites Built Fast"
        subtitle="High-converting, fully responsive websites. 1 week from contract to live. $2,000–$6,000."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#case-studies">See Results</GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">Get Quote</GlassButton>
        </div>
      </Hero>

      {/* Featured: Thread & Bone */}
      <TransformationShowcase
        headline="+209% Conversion Rate"
        subheadline="Thread & Bone went from a generic Shopify theme to a premium e-commerce experience"
        beforeImage=""
        afterImage=""
        metrics={[
          { label: 'Conversion Rate', before: '1.2%', after: '+209%', icon: '📈' },
          { label: 'Bounce Rate', before: '78%', after: '32%', icon: '📉' },
          { label: 'Avg Order Value', before: '$45', after: '$78', icon: '💳' },
          { label: 'Build Time', after: '7 days', icon: '⚡' },
        ]}
        ctaText="Get Your Website"
        ctaHref="#contact"
      />

      {/* Before/After Mockups */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">See The Transformation</h2>
          <p className="text-slate-400">Drag the slider to compare before and after</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-3">Thread & Bone (Shopify)</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="thread-and-bone" />}
              afterElement={<MockupAfter variant="thread-and-bone" />}
              alt="Thread & Bone transformation"
              height={320}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h3 className="text-lg font-semibold text-white mb-3">ClarityHQ (SaaS)</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="clarityhq" />}
              afterElement={<MockupAfter variant="clarityhq" />}
              alt="ClarityHQ transformation"
              height={320}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Client Results</h2>
          <p className="text-slate-400 text-lg">Every site we build is designed to convert.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.id} delay={i * 0.15}>
              <CaseStudyCard data={cs} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Aggregate Metrics */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Across All Website Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricsCounter label="Avg Conversion Lift" after="272%" icon="📈" />
              <MetricsCounter label="Avg Bounce Reduction" after="-46%" icon="📉" />
              <MetricsCounter label="Avg Build Time" after="7 days" icon="⚡" />
              <MetricsCounter label="Client Satisfaction" after="98%" icon="❤️" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {PROCESS.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 h-full">
                <div className="text-5xl font-bold text-cyan-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="portfolio" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Pricing Guide</h2>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$2,000', features: ['5 pages', 'Mobile responsive', 'Contact form', '1 year hosting'] },
              { name: 'Professional', price: '$4,000', features: ['10+ pages', 'Advanced forms', 'Blog/portfolio', 'Analytics setup'] },
              { name: 'Enterprise', price: '$6,000+', features: ['Custom features', 'Payment processing', 'Database integration', 'Custom dashboard'] },
            ].map((tier, idx) => (
              <div key={idx} className={idx === 1 ? 'border-l border-r border-white/10 px-8' : ''}>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-4">{tier.price}</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {tier.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA title="Ready to Build?" description="Get a custom quote. We'll have your site live in 1 week." buttonText="Get Free Quote" buttonHref="mailto:hello@borbiwebsites.com" />
      </section>

      <Footer companyName="Borbi Website Services" email="hello@borbiwebsites.com" links={[]} />
    </div>
  );
}
