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
    title: 'Pre-Trained Agent',
    description: 'Custom AI agent trained on your industry, methodology, and business rules',
  },
  {
    title: 'Custom Portal',
    description: 'Beautiful dashboard to interact with your agent, track outputs, approve/reject',
  },
  {
    title: 'Training Agent',
    description: 'Meta-system that monitors performance and retrains your agent continuously',
  },
  {
    title: 'Mac Mini Hardware',
    description: 'Included in setup fee. Runs your agent infrastructure locally or in cloud.',
  },
  {
    title: '30-Day Support',
    description: 'Full training, onboarding, and troubleshooting included in price',
  },
  {
    title: 'Optional Retainer',
    description: 'Ongoing optimization and performance monitoring after 30 days',
  },
];

const INDUSTRIES = [
  {
    name: 'Sales',
    use: 'Lead qualification, outreach, deal closing',
    icon: '🎯',
  },
  {
    name: 'Content',
    use: 'Research, writing, editing, scheduling',
    icon: '✍️',
  },
  {
    name: 'Finance',
    use: 'Analysis, forecasting, reporting, strategy',
    icon: '📈',
  },
  {
    name: 'Customer Success',
    use: 'Ticket routing, escalation, retention',
    icon: '👥',
  },
];

export default function TrainedAgents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">
            ← Borbi
          </a>
          <h1 className="text-white font-bold">Trained Agents</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title="Deploy AI Agents Built For Your Industry"
        subtitle="Trained on proven methodologies. Audited for quality. Fully autonomous or human-in-the-loop."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#features">
            What's Included
          </GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">
            Book Consultation
          </GlassButton>
        </div>
      </Hero>

      {/* What's Included */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Built For Your Industry</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-cyan-400/50 transition"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{industry.name} Agent</h3>
              <p className="text-slate-300">{industry.use}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Pricing</h2>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12">
          <div className="mb-8">
            <p className="text-slate-300 mb-4">Setup fee includes:</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                Trained AI agent (custom to your use case)
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                Custom portal + dashboard
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                Training Agent (continuous improvement)
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                Mac Mini hardware (or cloud deployment)
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">✓</span>
                30 days of support + onboarding
              </li>
            </ul>
          </div>

          <div className="text-center border-t border-white/10 pt-8 mt-8">
            <p className="text-slate-400 mb-2">Starting at</p>
            <p className="text-5xl font-bold text-cyan-400">$5,000</p>
            <p className="text-slate-400 mt-4">Custom pricing for complex use cases</p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-300 mb-4">Optional monthly retainer</p>
            <p className="text-2xl font-bold text-white">$500–$2,000</p>
            <p className="text-slate-400 text-sm mt-2">Ongoing optimization, monitoring, and improvements</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">The Process</h2>
        <div className="space-y-6">
          {[
            {
              num: '1',
              title: 'Discovery Call',
              desc: 'We understand your workflow, pain points, and goals',
            },
            {
              num: '2',
              title: 'Agent Training',
              desc: 'We train and audit your agent. Full methodology documentation provided.',
            },
            {
              num: '3',
              title: 'Portal Setup',
              desc: 'Custom dashboard built. You learn to interact with your agent.',
            },
            {
              num: '4',
              title: 'Go Live',
              desc: 'Agent takes assignments. You monitor, approve, refine.',
            },
            {
              num: '5',
              title: 'Continuous Improvement',
              desc: 'Training Agent monitors performance and retrains as needed.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-500/20 border border-cyan-400/50">
                  <span className="text-cyan-400 font-bold text-lg">{item.num}</span>
                </div>
              </div>
              <div>
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
          title="Ready to Deploy?"
          description="Get a custom proposal based on your industry and use case."
          buttonText="Schedule Consultation"
          buttonHref="mailto:hello@borbians.com"
        />
      </section>

      {/* Footer */}
      <Footer
        companyName="Borbi Trained Agents"
        email="hello@borbians.com"
        links={[]}
      />
    </div>
  );
}
