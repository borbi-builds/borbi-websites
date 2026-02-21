import React from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassCard,
  GlassButton,
  CTA,
  Footer,
} from '@borbi/glass-ui';

const FEATURES = [
  {
    title: 'Toggle Scenarios',
    description: 'Bull/base/bear case. See impact immediately.',
    icon: '📊',
  },
  {
    title: 'Adjust Assumptions',
    description: 'Revenue growth, margins, multiples. Real-time recalculation.',
    icon: '⚙️',
  },
  {
    title: 'Filter Risks',
    description: 'Regulatory, competitive, execution. Custom weighting.',
    icon: '🛡️',
  },
  {
    title: 'Live Market Data',
    description: '10-K filings, competitor data, real pricing. Always current.',
    icon: '📈',
  },
  {
    title: 'Multi-User Access',
    description: 'Your whole team analyzes together. Permissions built in.',
    icon: '👥',
  },
  {
    title: 'Export & Share',
    description: 'PDF, Excel, or web link. Share findings with confidence.',
    icon: '📤',
  },
];

export default function EquityResearch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">
            ← Borbi
          </a>
          <h1 className="text-white font-bold">Equity Research</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title="Interactive Equity Research"
        subtitle="Deep fundamental analysis. Fully customizable. Built for investment professionals."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#features">
            See Features
          </GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">
            Request Demo
          </GlassButton>
        </div>
      </Hero>

      {/* Interactive Demo Placeholder */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl border border-cyan-400/30 p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Interactive Dashboard</h2>
          {/* Placeholder */}
          <div className="bg-white/5 rounded-xl p-12 flex items-center justify-center h-96 border border-white/10">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <p className="text-slate-400">Interactive research dashboard</p>
              <p className="text-slate-500 text-sm mt-2">Toggle scenarios • Adjust assumptions • Filter risks</p>
            </div>
          </div>
          <p className="text-slate-300 mt-6 text-center">
            Your report loads here. Click any assumption to edit. See new valuations instantly.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Features Built In</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Cover */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">What Gets Analyzed</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Fundamentals',
              items: ['Revenue modeling', 'Margin analysis', 'FCF projections', 'ROIC trends'],
            },
            {
              title: 'Valuation',
              items: ['DCF analysis', 'Comparable comps', 'Reverse DCF', 'Scenario weighting'],
            },
            {
              title: 'Risk & Moat',
              items: ['5 Forces analysis', 'Competitive positioning', 'Execution risk', 'Market size'],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Single Report',
              price: '$500–$2,000',
              desc: 'One company deep dive. Interactive interface included.',
            },
            {
              name: 'Quarterly Subscription',
              price: '$1,500–$5,000',
              desc: 'Ongoing research. Updates as earnings change. Multi-user access.',
              highlight: true,
            },
            {
              name: 'Custom Due Diligence',
              price: '$2,000–$10,000+',
              desc: 'Acquisition support. Sector analysis. Full custom scope.',
            },
          ].map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/50'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-4">{tier.price}</p>
              <p className="text-slate-300">{tier.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">The Process</h2>
        <div className="space-y-6">
          {[
            {
              num: '1',
              title: 'Request',
              desc: 'Send us the company + your specific questions/assumptions',
            },
            {
              num: '2',
              title: 'Research',
              desc: 'Deep dive: fundamentals, valuation, competitive position, risks',
            },
            {
              num: '3',
              title: 'Build',
              desc: 'Interactive dashboard with your assumptions locked in',
            },
            {
              num: '4',
              title: 'Deliver',
              desc: 'Login to portal. Adjust any variable. See impact immediately.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-500/20 border border-cyan-400/50">
                  <span className="text-cyan-400 font-bold text-lg">{item.num}</span>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-slate-300 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA
          title="Research Worth Reading"
          description="Get a sample report. See what customizable equity research looks like."
          buttonText="Request Sample"
          buttonHref="mailto:hello@borbiresearch.com"
        />
      </section>

      {/* Footer */}
      <Footer
        companyName="Borbi Equity Research"
        email="hello@borbiresearch.com"
        links={[]}
      />
    </div>
  );
}
