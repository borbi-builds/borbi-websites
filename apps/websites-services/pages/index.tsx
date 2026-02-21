import React from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassCard,
  GlassButton,
  CTA,
  Footer,
} from '@borbi/glass-ui';

const PORTFOLIO = [
  { title: 'HVAC Service Landing', vertical: 'Service', price: '$3,500' },
  { title: 'Restaurant Website', vertical: 'Food', price: '$4,000' },
  { title: 'CrossFit Gym Site', vertical: 'Fitness', price: '$3,000' },
  { title: 'Consulting Agency', vertical: 'Professional', price: '$5,000' },
  { title: 'E-commerce Store', vertical: 'E-commerce', price: '$4,500' },
  { title: 'SaaS Product Landing', vertical: 'Tech', price: '$6,000' },
];

const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep brand interview. We learn your voice, values, and customer language.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Visual concepts presented. You approve direction before we build.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Custom React/Next.js site with responsive design and fast performance.',
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Live on your domain. Hosted, maintained, and updated by us.',
  },
];

export default function WebsitesServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">
            ← Borbi
          </a>
          <h1 className="text-white font-bold">Website Services</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title="Custom Websites Built Fast"
        subtitle="High-converting, fully responsive websites. 1 week from contract to live. $2,000–$6,000."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#portfolio">
            View Portfolio
          </GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">
            Get Quote
          </GlassButton>
        </div>
      </Hero>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {PROCESS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 h-full">
                <div className="text-5xl font-bold text-cyan-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PORTFOLIO.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition group cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="w-full h-48 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition">
                <span className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">📱</div>
                  {item.title}
                </span>
              </div>
              <div className="p-6">
                <div className="text-cyan-400 text-sm font-semibold mb-2">{item.vertical}</div>
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                <div className="text-slate-400 text-sm">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Pricing Guide</h2>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
              <p className="text-2xl font-bold text-cyan-400 mb-4">$2,000</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ 5 pages</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form</li>
                <li>✓ 1 year hosting</li>
              </ul>
            </div>
            <div className="border-l border-r border-white/10 px-8">
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-2xl font-bold text-cyan-400 mb-4">$4,000</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ 10+ pages</li>
                <li>✓ Advanced forms</li>
                <li>✓ Blog/portfolio</li>
                <li>✓ Analytics setup</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-2xl font-bold text-cyan-400 mb-4">$6,000+</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Custom features</li>
                <li>✓ Payment processing</li>
                <li>✓ Database integration</li>
                <li>✓ Custom dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA
          title="Ready to Build?"
          description="Get a custom quote. We'll have your site live in 1 week."
          buttonText="Get Free Quote"
          buttonHref="mailto:hello@borbiwebsites.com"
        />
      </section>

      {/* Footer */}
      <Footer
        companyName="Borbi Website Services"
        email="hello@borbiwebsites.com"
        links={[]}
      />
    </div>
  );
}
