import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { MetricsCounter } from './MetricsCounter';
import { ScrollReveal } from './ScrollReveal';
import { colors, effects } from '../design-tokens';
import { CaseStudyMetric } from './CaseStudyCard';

interface TransformationShowcaseProps {
  headline: string;
  subheadline?: string;
  beforeImage: string;
  afterImage: string;
  metrics: CaseStudyMetric[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const TransformationShowcase: React.FC<TransformationShowcaseProps> = memo(({
  headline,
  subheadline,
  beforeImage,
  afterImage,
  metrics,
  ctaText = 'Get Started',
  ctaHref,
  onCtaClick,
  className = '',
}) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text.heading }}
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {subheadline}
            </p>
          )}
        </ScrollReveal>

        {/* Content: side-by-side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Slider */}
          <ScrollReveal delay={0.1}>
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              alt={headline}
              height={450}
              className="rounded-xl"
            />
          </ScrollReveal>

          {/* Metrics + CTA */}
          <ScrollReveal delay={0.2} direction="right">
            <div
              className="p-8 rounded-xl border"
              style={{
                background: colors.glass,
                backdropFilter: effects.backdropFilter,
                borderColor: colors.borders.light,
              }}
            >
              <div className="grid grid-cols-2 gap-6 mb-8">
                {metrics.map((m, i) => (
                  <MetricsCounter
                    key={i}
                    label={m.label}
                    before={m.before}
                    after={m.after}
                    icon={m.icon}
                  />
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={ctaHref || '#'}
                onClick={onCtaClick}
                className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all"
                style={{ background: colors.accent.blue }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${colors.accent.blue}40` }}
                whileTap={{ scale: 0.98 }}
              >
                {ctaText}
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

TransformationShowcase.displayName = 'TransformationShowcase';
