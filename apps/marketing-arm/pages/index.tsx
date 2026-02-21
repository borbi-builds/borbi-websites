import React from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassButton,
  CTA,
  Footer,
  ContactForm,
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

const caseStudies = getCaseStudiesByArm('Marketing Arm');

const TIERS = [
  {
    name: 'Individual Services',
    price: 'Custom',
    features: ['SEO Only', 'Website Redesign', 'Social Media + Content'],
    cta: 'Get Pricing',
  },
  {
    name: 'Platinum (Full Package)',
    price: 'Custom',
    features: ['SEO + Website + Content', 'Lead Generation', 'Lead Nurturing', 'Results Optimization'],
    cta: 'Get Pricing',
    highlight: true,
  },
];

export default function MarketingArm() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">
            ← Borbi
          </a>
          <div className="flex items-center gap-6">
            <a href="#case-studies" className="text-slate-300 hover:text-cyan-400 transition text-sm">Case Studies</a>
            <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition text-sm">Pricing</a>
            <a href="#audit" className="text-slate-300 hover:text-cyan-400 transition text-sm">Free Audit</a>
            <h1 className="text-white font-bold">Marketing Arm</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title="Your Full-Stack Marketing Team"
        subtitle="AI-powered marketing for solo founders and local businesses. Results guaranteed or we optimize for free."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#audit">
            Get Free Audit
          </GlassButton>
          <GlassButton variant="secondary" size="lg" href="#case-studies">
            See Results
          </GlassButton>
        </div>
      </Hero>

      {/* Featured Transformation: Summit Mechanical */}
      <TransformationShowcase
        headline="0 Leads → 62 Leads/Month in 90 Days"
        subheadline="Summit Mechanical went from invisible online to Charlotte's #1 rated HVAC company"
        beforeImage=""
        afterImage=""
        metrics={[
          { label: 'Monthly Leads', before: '0', after: '62', icon: '📈' },
          { label: 'Revenue Growth', after: '+$28K/mo', icon: '💰' },
          { label: 'Google Ranking', before: 'Not listed', after: 'Top 3', icon: '🏆' },
          { label: 'Timeline', after: '90 days', icon: '⚡' },
        ]}
        ctaText="Get These Results"
        ctaHref="#audit"
      />

      {/* Before/After Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">See The Transformation</h2>
          <p className="text-slate-400">Drag the slider to compare before and after</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-3">Summit Mechanical</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="summit-mechanical" />}
              afterElement={<MockupAfter variant="summit-mechanical" />}
              alt="Summit Mechanical transformation"
              height={320}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h3 className="text-lg font-semibold text-white mb-3">Rosemary's Kitchen</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="rosemarys-kitchen" />}
              afterElement={<MockupAfter variant="rosemarys-kitchen" />}
              alt="Rosemary's Kitchen transformation"
              height={320}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Real Results</h2>
          <p className="text-slate-400 text-lg">Every metric is real. Every business is a real client.</p>
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
            <h2 className="text-2xl font-bold text-white text-center mb-8">Across All Marketing Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricsCounter label="Avg Lead Increase" after="340%" icon="📈" />
              <MetricsCounter label="Avg Revenue Lift" after="$34K/mo" icon="💰" />
              <MetricsCounter label="Client Retention" after="96%" icon="❤️" />
              <MetricsCounter label="Avg Time to Results" after="60 days" icon="⚡" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Free Audit Section */}
      <section id="audit" className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Free Marketing Audit</h2>
            <p className="text-slate-300 mb-8">
              We'll assess your website, SEO ranking, social media presence, and competition. Takes 15 minutes.
            </p>
            <ContactForm
              source="marketing-arm"
              hideCompany={false}
              submitButtonText="Get Free Audit"
              successMessage="Audit request received! We'll analyze your business and send recommendations within 24 hours."
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TIERS.map((tier, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={`rounded-2xl border p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/50'
                  : 'bg-white/5 border-white/10'
              }`}>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="text-slate-300 flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <GlassButton variant={tier.highlight ? 'primary' : 'secondary'} size="lg" className="w-full">
                  {tier.cta}
                </GlassButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <CTA
          title="Ready to Grow?"
          description="Get a free audit + custom plan. No commitment."
          buttonText="Schedule Consultation"
          buttonHref="#audit"
        />
      </section>

      <Footer companyName="Borbi Marketing Arm" email="hello@borbimarketing.com" links={[]} />
    </div>
  );
}
