import React from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  GlassCard,
  GlassButton,
  ServiceGrid,
  CTA,
  Footer,
  PortfolioGrid,
  allCaseStudies,
} from '@borbi/glass-ui';

const SERVICES = [
  { id: 1, name: 'Marketing Arm', icon: '📊', desc: 'AI-powered marketing for local businesses' },
  { id: 2, name: 'Content Creation', icon: '✍️', desc: 'Viral content generation at scale' },
  { id: 3, name: 'Website Monetization', icon: '💰', desc: 'Turn traffic into revenue streams' },
  { id: 4, name: 'Automation Sales', icon: '⚙️', desc: 'Custom workflow automation' },
  { id: 5, name: 'Trained Agents', icon: '🤖', desc: 'AI agents trained for your business' },
  { id: 6, name: 'Equity Research', icon: '📈', desc: 'Deep market analysis & stock research' },
  { id: 7, name: 'Fiverr Automation', icon: '🎯', desc: 'Scale freelance services' },
  { id: 8, name: 'UI/UX Interfaces', icon: '🎨', desc: 'Beautiful digital experiences' },
  { id: 9, name: 'Customer Success', icon: '👥', desc: 'Retention & growth strategies' },
  { id: 10, name: 'Agent Training', icon: '📚', desc: 'Custom AI agent development' },
  { id: 11, name: 'Brand Websites', icon: '🌐', desc: 'High-converting web presence' },
  { id: 12, name: 'Polymarket Trading', icon: '📊', desc: 'AI-driven market prediction' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Borbi Enterprises</div>
          <div className="flex gap-8 hidden md:flex">
            <a href="#services" className="text-slate-300 hover:text-white transition">
              Services
            </a>
            <a href="#portfolio" className="text-slate-300 hover:text-white transition">
              Portfolio
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        title="AI-Powered Business at Scale"
        subtitle="13 revenue streams. One platform. Your success."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#services">
            Explore Services
          </GlassButton>
          <GlassButton variant="secondary" size="lg" href="#contact">
            Get Started
          </GlassButton>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-slate-400"
        >
          <p>Serving clients across 13 revenue streams</p>
        </motion.div>
      </Hero>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Built on production-ready infrastructure with governance, learning loops, and
            measurable results.
          </p>
        </motion.div>

        <ServiceGrid>
          {SERVICES.map((service, idx) => (
            <GlassCard key={service.id} delay={idx * 0.05}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-slate-300">{service.desc}</p>
            </GlassCard>
          ))}
        </ServiceGrid>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped clients transform their operations.
          </p>
        </motion.div>

        <PortfolioGrid caseStudies={allCaseStudies.slice(0, 4)} showFilter={false} />
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA
          title="Ready to Scale?"
          description="Let's talk about how we can help your business grow with AI-powered solutions."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </section>

      {/* Footer */}
      <Footer
        companyName="Borbi Enterprises"
        email="wyatt@borbienterprises.com"
        links={[
          {
            title: 'Services',
            items: [
              { label: 'Marketing', href: '/marketing' },
              { label: 'Automation', href: '/automation' },
              { label: 'Research', href: '/research' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '/careers' },
            ],
          },
        ]}
      />
    </div>
  );
}
