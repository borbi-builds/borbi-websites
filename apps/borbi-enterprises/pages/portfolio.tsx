import React from 'react';
import {
  Footer,
  ScrollReveal,
  BeforeAfterSlider,
  MetricsCounter,
  CaseStudyCard,
  PortfolioGrid,
  MockupBefore,
  MockupAfter,
  allCaseStudies,
} from '@borbi/glass-ui';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl hover:text-cyan-400 transition">← Borbi</a>
          <h1 className="text-white font-bold">Portfolio</h1>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Real Results.<br />Real Businesses.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              8 case studies across 4 business arms. Every metric is real. Every transformation is documented.
              Drag the sliders to see the before and after.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricsCounter label="Avg Revenue Growth" after="340%" icon="📈" />
              <MetricsCounter label="Avg Time Saved" after="17 hrs/wk" icon="⏱️" />
              <MetricsCounter label="Client Retention" after="97%" icon="❤️" />
              <MetricsCounter label="Projects Delivered" after="150+" icon="🚀" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Before/After: Summit Mechanical */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Transformation</h2>
          <p className="text-slate-400">Summit Mechanical: 0 leads → 62 leads/month</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <BeforeAfterSlider
            beforeElement={<MockupBefore variant="summit-mechanical" />}
            afterElement={<MockupAfter variant="summit-mechanical" />}
            alt="Summit Mechanical transformation"
            height={450}
            className="rounded-xl"
          />
        </ScrollReveal>
      </section>

      {/* All Before/After Sliders Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">All Transformations</h2>
          <p className="text-slate-400">Drag each slider to compare</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {allCaseStudies.map((cs, i) => (
            <ScrollReveal key={cs.id} delay={i * 0.1}>
              <div className="mb-2 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{cs.company}</h3>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(14,165,233,0.15)', color: '#0ea5e9' }}>{cs.arm}</span>
              </div>
              <BeforeAfterSlider
                beforeElement={<MockupBefore variant={cs.id} />}
                afterElement={<MockupAfter variant={cs.id} />}
                alt={`${cs.company} transformation`}
                height={280}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Filterable Case Study Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Case Studies</h2>
          <p className="text-slate-400">Filter by business arm</p>
        </ScrollReveal>
        <PortfolioGrid caseStudies={allCaseStudies} />
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Transformation?</h2>
            <p className="text-slate-300 mb-8">Join these businesses. Let's discuss your project.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:hello@borbi.co" className="px-8 py-3 rounded-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition">
                Start Your Project →
              </a>
              <a href="/" className="px-8 py-3 rounded-lg font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition">
                Explore Services
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer companyName="Borbi Enterprises" email="hello@borbi.co" links={[]} />
    </div>
  );
}
