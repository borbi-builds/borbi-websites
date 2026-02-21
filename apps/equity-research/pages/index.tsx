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
  ScrollReveal,
  TransformationShowcase,
  MockupBefore,
  MockupAfter,
  getCaseStudiesByArm,
} from '@borbi/glass-ui';

const caseStudies = getCaseStudiesByArm('Equity Research');

const FEATURES = [
  { title: 'Toggle Scenarios', description: 'Bull/base/bear case. See impact immediately.', icon: '📊' },
  { title: 'Adjust Assumptions', description: 'Revenue growth, margins, multiples. Real-time recalculation.', icon: '⚙️' },
  { title: 'Filter Risks', description: 'Regulatory, competitive, execution. Custom weighting.', icon: '🛡️' },
  { title: 'Live Market Data', description: '10-K filings, competitor data, real pricing. Always current.', icon: '📈' },
  { title: 'Multi-User Access', description: 'Your whole team analyzes together. Permissions built in.', icon: '👥' },
  { title: 'Export & Share', description: 'PDF, Excel, or web link. Share findings with confidence.', icon: '📤' },
];

export default function EquityResearch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">← Borbi</a>
          <div className="flex items-center gap-6">
            <a href="#case-studies" className="text-slate-300 hover:text-cyan-400 transition text-sm">Case Studies</a>
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition text-sm">Features</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition text-sm">Request Demo</a>
            <h1 className="text-white font-bold">Equity Research</h1>
          </div>
        </div>
      </nav>

      <Hero
        title="Interactive Equity Research"
        subtitle="Deep fundamental analysis. Fully customizable. Built for investment professionals."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#case-studies">See Results</GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">Request Demo</GlassButton>
        </div>
      </Hero>

      {/* Featured: Ridgeline Capital */}
      <TransformationShowcase
        headline="4 Weeks → 5 Days. Fully Interactive."
        subheadline="Ridgeline Capital replaced static PDFs with real-time research dashboards"
        beforeImage=""
        afterImage=""
        metrics={[
          { label: 'Report Delivery', before: '4 weeks', after: '5 days', icon: '⚡' },
          { label: 'Scenario Toggle', before: 'None', after: 'Real-time', icon: '🔄' },
          { label: 'Team Adoption', after: '100%', icon: '👥' },
          { label: 'Cost Savings', after: '60%', icon: '💰' },
        ]}
        ctaText="See a Demo"
        ctaHref="#contact"
      />

      {/* Interactive Dashboard Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">From Static PDFs to Interactive Dashboards</h2>
          <p className="text-slate-400">Drag the slider to see what your team gets</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-3">Ridgeline Capital</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="ridgeline-capital" />}
              afterElement={<MockupAfter variant="ridgeline-capital" />}
              alt="Ridgeline Capital transformation"
              height={320}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h3 className="text-lg font-semibold text-white mb-3">Archer Analytics</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="archer-analytics" />}
              afterElement={<MockupAfter variant="archer-analytics" />}
              alt="Archer Analytics transformation"
              height={320}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Client Results</h2>
          <p className="text-slate-400 text-lg">Investment professionals trust our interactive research.</p>
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
            <h2 className="text-2xl font-bold text-white text-center mb-8">Across All Research Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricsCounter label="Avg Delivery Speed" after="5 days" icon="⚡" />
              <MetricsCounter label="Subscriber Growth" after="+73%" icon="📈" />
              <MetricsCounter label="Client Retention" after="100%" icon="❤️" />
              <MetricsCounter label="Reports Delivered" after="50+" icon="📊" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Features Built In</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Single Report', price: '$500–$2,000', desc: 'One company deep dive. Interactive interface included.' },
            { name: 'Quarterly Subscription', price: '$1,500–$5,000', desc: 'Ongoing research. Updates as earnings change. Multi-user access.', highlight: true },
            { name: 'Custom Due Diligence', price: '$2,000–$10,000+', desc: 'Acquisition support. Sector analysis. Full custom scope.' },
          ].map((tier, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={`rounded-2xl border p-8 ${tier.highlight ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/50' : 'bg-white/5 border-white/10'}`}>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-4">{tier.price}</p>
                <p className="text-slate-300">{tier.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA title="Research Worth Reading" description="Get a sample report. See what customizable equity research looks like." buttonText="Request Sample" buttonHref="mailto:hello@borbiresearch.com" />
      </section>

      <Footer companyName="Borbi Equity Research" email="hello@borbiresearch.com" links={[]} />
    </div>
  );
}
