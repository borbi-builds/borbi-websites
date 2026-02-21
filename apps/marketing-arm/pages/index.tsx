import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassCard,
  GlassButton,
  CTA,
  Footer,
} from '@borbi/glass-ui';

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

const CASE_STUDIES = [
  {
    name: 'Local HVAC Company',
    result: '+150% qualified leads in 90 days',
    icon: '🔧',
  },
  {
    name: 'Italian Restaurant',
    result: '+45% foot traffic, +$18K monthly revenue',
    icon: '🍝',
  },
  {
    name: 'CrossFit Gym',
    result: '+80 new members in 60 days',
    icon: '💪',
  },
];

export default function MarketingArm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to n8n webhook
    alert('Free audit request submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">
            ← Borbi
          </a>
          <h1 className="text-white font-bold">Marketing Arm</h1>
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
          <GlassButton variant="secondary" size="lg" href="#pricing">
            View Pricing
          </GlassButton>
        </div>
      </Hero>

      {/* Free Audit Section */}
      <section id="audit" className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Free Marketing Audit</h2>
          <p className="text-slate-300 mb-8">
            We'll assess your website, SEO ranking, social media presence, and competition. Takes 15 minutes.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <GlassButton type="submit" variant="primary" size="lg" className="w-full">
              Get Free Audit
            </GlassButton>
          </form>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Real Results</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-cyan-400/50 transition"
            >
              <div className="text-5xl mb-4">{study.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{study.name}</h3>
              <p className="text-cyan-400 font-semibold">{study.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TIERS.map((tier, idx) => (
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
            </motion.div>
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

      {/* Footer */}
      <Footer
        companyName="Borbi Marketing Arm"
        email="hello@borbimarketing.com"
        links={[]}
      />
    </div>
  );
}
