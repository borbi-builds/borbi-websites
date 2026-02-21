import React, { useState } from 'react';
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

const caseStudies = getCaseStudiesByArm('Automation Sales');

const CALCULATOR = { hourRate: 35 };

export default function AutomationSales() {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const savings = hoursPerWeek * CALCULATOR.hourRate * 52;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">← Borbi</a>
          <div className="flex items-center gap-6">
            <a href="#case-studies" className="text-slate-300 hover:text-cyan-400 transition text-sm">Case Studies</a>
            <a href="#calculator" className="text-slate-300 hover:text-cyan-400 transition text-sm">ROI Calculator</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition text-sm">Get Proposal</a>
            <h1 className="text-white font-bold">Automation Sales</h1>
          </div>
        </div>
      </nav>

      <Hero
        title="Workflow Automation That Works"
        subtitle="Save 10-20 hours per week. First 3 clients get 30 days free to prove ROI."
      >
        <div className="flex gap-4 justify-center mt-8">
          <GlassButton variant="primary" size="lg" href="#case-studies">See Real Results</GlassButton>
          <GlassButton variant="secondary" size="lg" href="#calculator">Calculate Savings</GlassButton>
        </div>
      </Hero>

      {/* Featured: Packlane */}
      <TransformationShowcase
        headline="15 Hours → 1 Hour. Zero Errors."
        subheadline="Packlane Fulfillment eliminated manual order processing entirely"
        beforeImage=""
        afterImage=""
        metrics={[
          { label: 'Weekly Hours', before: '15 hrs', after: '1 hr', icon: '⏱️' },
          { label: 'Errors/Week', before: '3-5', after: '0', icon: '✅' },
          { label: 'Orders/Day', after: '147+', icon: '📦' },
          { label: 'ROI Timeline', after: '4 weeks', icon: '⚡' },
        ]}
        ctaText="Automate Your Workflow"
        ctaHref="#contact"
      />

      {/* Before/After Mockups */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">From Manual Chaos to Automated Flow</h2>
          <p className="text-slate-400">Drag the slider to see the transformation</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-3">Packlane Fulfillment</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="packlane-fulfillment" />}
              afterElement={<MockupAfter variant="packlane-fulfillment" />}
              alt="Packlane automation transformation"
              height={320}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h3 className="text-lg font-semibold text-white mb-3">Signal North Media</h3>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="signal-north" />}
              afterElement={<MockupAfter variant="signal-north" />}
              alt="Signal North automation transformation"
              height={320}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Real Transformations</h2>
          <p className="text-slate-400 text-lg">These businesses eliminated hours of manual work overnight.</p>
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
            <h2 className="text-2xl font-bold text-white text-center mb-8">Across All Automation Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricsCounter label="Avg Hours Saved" after="17 hrs/wk" icon="⏱️" />
              <MetricsCounter label="Error Reduction" after="99%" icon="✅" />
              <MetricsCounter label="Avg ROI Timeline" after="4 weeks" icon="⚡" />
              <MetricsCounter label="Client Retention" after="100%" icon="❤️" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">ROI Calculator</h2>
            <div className="mb-8">
              <label className="text-slate-300 mb-4 block">Hours per week currently spent on manual tasks:</label>
              <div className="flex items-center gap-4">
                <input type="range" min="5" max="40" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
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
            <p className="text-slate-400 text-center mt-8">Custom automation systems cost $1,000–$2,000. Most clients see ROI in 4–6 weeks.</p>
          </div>
        </ScrollReveal>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: '1', title: 'Discovery', desc: 'We map your processes and identify automation opportunities' },
            { num: '2', title: 'Build & Pilot', desc: '30-day free pilot. Prove the value before you pay.' },
            { num: '3', title: 'Scale & Support', desc: '$200–$500/month ongoing optimization and maintenance' },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-4">{item.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <CTA title="Ready to Reclaim Your Time?" description="Get a custom automation proposal. First 3 clients pilot free for 30 days." buttonText="Get Proposal" buttonHref="mailto:hello@borbiauto.com" />
      </section>

      <Footer companyName="Borbi Automation" email="hello@borbiauto.com" links={[]} />
    </div>
  );
}
