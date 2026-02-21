import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassCard,
  GlassButton,
  CTA,
  Footer,
} from '@borbi/glass-ui';

const USE_CASES = [
  {
    title: 'E-Commerce Order Management',
    description: 'Automate inventory → order processing → shipping → customer follow-up',
    savings: '10 hours/week',
    roi: '+$4,000/month revenue captured',
  },
  {
    title: 'Lead Generation & Nurturing',
    description: 'Auto-qualify leads → segment → personalized outreach → CRM sync',
    savings: '15 hours/week',
    roi: '+$8,000/month new revenue',
  },
  {
    title: 'Data Pipeline Automation',
    description: 'Extract data → clean → transform → load into analytics dashboard daily',
    savings: '20 hours/week',
    roi: '40% faster reporting',
  },
  {
    title: 'Content Publishing Pipeline',
    description: 'Draft → approve → publish → social distribution → analytics tracking',
    savings: '12 hours/week',
    roi: '3x more consistent content',
  },
];

const CALCULATOR = {
  hourRate: 35,
  hoursPerWeek: 15,
};

export default function AutomationSales() {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const savings = hoursPerWeek * CALCULATOR.hourRate * 52;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">
            ← Borbi
          </a>
          <h1 className="text-white font-bold">Automation Sales</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title="Workflow Automation That Works"
        subtitle="Save 10-20 hours per week. First 3 clients get 30 days free to prove ROI."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#calculator">
            Calculate Savings
          </GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">
            Get Proposal
          </GlassButton>
        </div>
      </Hero>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">What We Automate</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {USE_CASES.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-cyan-400/50 transition"
            >
              <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
              <p className="text-slate-300 mb-6">{useCase.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400 text-sm">Time Saved:</span>
                  <span className="text-white font-semibold">{useCase.savings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400 text-sm">Impact:</span>
                  <span className="text-white font-semibold">{useCase.roi}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">ROI Calculator</h2>
          
          <div className="mb-8">
            <label className="text-slate-300 mb-4 block">
              Hours per week currently spent on manual tasks:
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="5"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-cyan-400 font-bold text-2xl w-16">{hoursPerWeek} hrs</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/30">
            <div className="text-center mb-6">
              <p className="text-slate-300 mb-2">Annual Savings</p>
              <p className="text-5xl font-bold text-cyan-400">${savings.toLocaleString()}</p>
            </div>
            <div className="text-center text-slate-300 text-sm">
              <p>({hoursPerWeek} hours/week × ${CALCULATOR.hourRate}/hr × 52 weeks)</p>
            </div>
          </div>

          <p className="text-slate-400 text-center mt-8">
            Custom automation systems cost $1,000–$2,000. Most clients see ROI in 4–6 weeks.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-4">1</div>
            <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
            <p className="text-slate-300">We map your processes and identify automation opportunities</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-4">2</div>
            <h3 className="text-lg font-bold text-white mb-2">Build & Pilot</h3>
            <p className="text-slate-300">30-day free pilot. Prove the value before you pay.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-4">3</div>
            <h3 className="text-lg font-bold text-white mb-2">Scale & Support</h3>
            <p className="text-slate-300">$200–$500/month ongoing optimization and maintenance</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA
          title="Ready to Reclaim Your Time?"
          description="Get a custom automation proposal. First 3 clients pilot free for 30 days."
          buttonText="Get Proposal"
          buttonHref="mailto:hello@borbiauto.com"
        />
      </section>

      {/* Footer */}
      <Footer
        companyName="Borbi Automation"
        email="hello@borbiauto.com"
        links={[]}
      />
    </div>
  );
}
