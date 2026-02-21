import React from 'react';
import { TransformationShowcase } from './TransformationShowcase';
import { PortfolioGrid } from './PortfolioGrid';
import { ScrollReveal } from './ScrollReveal';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { MockupBefore, MockupAfter } from './MockupBefore';
import { colors } from '../design-tokens';
import { allCaseStudies } from './caseStudyData';
import type { CaseStudyData } from './CaseStudyCard';

// Enrich case studies with mockup elements for the showcase
const enrichedCaseStudies: CaseStudyData[] = allCaseStudies.map(cs => ({
  ...cs,
  // Use placeholder images that won't 404 — the CaseStudyCard will show the mockups via the grid
  beforeImage: `/portfolio/${cs.id}-before.svg`,
  afterImage: `/portfolio/${cs.id}-after.svg`,
}));

export const PortfolioShowcase: React.FC = () => {
  return (
    <div style={{ background: colors.background, minHeight: '100vh' }}>
      {/* Hero */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: colors.text.heading }}>
              Real Results. Real Businesses.
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              See how we've helped businesses transform their digital presence and 10x their growth.
              Drag the sliders to see the transformation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured: Summit Mechanical */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: colors.text.heading }}>
              Featured Transformation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <BeforeAfterSlider
              beforeElement={<MockupBefore variant="summit-mechanical" />}
              afterElement={<MockupAfter variant="summit-mechanical" />}
              alt="Summit Mechanical transformation"
              height={400}
              className="rounded-xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Monthly Leads', val: '0 → 62' },
                { label: 'Revenue', val: '+$28K/mo' },
                { label: 'Google Rank', val: 'Top 3' },
                { label: 'ROI Timeline', val: '90 days' },
              ].map((m, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="text-xl font-bold" style={{ color: colors.accent.blue }}>{m.val}</div>
                  <div className="text-xs mt-1" style={{ color: colors.text.muted }}>{m.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Case Studies with Mockup Sliders */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: colors.text.heading }}>
              All Case Studies
            </h2>
            <p className="text-lg" style={{ color: colors.text.muted }}>
              Filter by business arm • Drag sliders to compare
            </p>
          </ScrollReveal>

          <PortfolioGrid caseStudies={enrichedCaseStudies} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text.heading }}>Ready for Your Transformation?</h2>
            <p className="mb-8" style={{ color: colors.text.muted }}>Join these businesses. Get a free consultation.</p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-lg font-semibold text-white" style={{ background: colors.accent.blue }}>
              Start Your Project →
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
