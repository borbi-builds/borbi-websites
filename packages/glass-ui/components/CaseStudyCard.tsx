import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { MetricsCounter } from './MetricsCounter';
import { ScrollReveal } from './ScrollReveal';
import { colors, effects } from '../design-tokens';

export interface CaseStudyMetric {
  label: string;
  before?: string;
  after: string;
  icon?: string;
}

export interface CaseStudyData {
  id: string;
  company: string;
  location?: string;
  industry?: string;
  arm?: string;
  beforeImage: string;
  afterImage: string;
  metrics: CaseStudyMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

interface CaseStudyCardProps {
  data: CaseStudyData;
  delay?: number;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = memo(({
  data,
  delay = 0,
  className = '',
}) => {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className={`rounded-xl overflow-hidden border ${className}`}
        style={{
          background: colors.glass,
          backdropFilter: effects.backdropFilter,
          borderColor: colors.borders.light,
        }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
      >
        {/* Before/After Slider */}
        <BeforeAfterSlider
          beforeImage={data.beforeImage}
          afterImage={data.afterImage}
          alt={`${data.company} transformation`}
          height={260}
        />

        {/* Content */}
        <div className="p-5">
          {/* Company info */}
          <h3 className="text-lg font-bold mb-1" style={{ color: colors.text.heading }}>
            {data.company}
          </h3>
          <div className="flex gap-3 text-xs mb-4" style={{ color: colors.text.muted }}>
            {data.industry && <span>{data.industry}</span>}
            {data.location && <span>📍 {data.location}</span>}
            {data.arm && (
              <span
                className="px-2 py-0.5 rounded-full text-xs"
                style={{ background: 'rgba(14,165,233,0.15)', color: colors.accent.blue }}
              >
                {data.arm}
              </span>
            )}
          </div>

          {/* Metrics grid */}
          <div className={`grid gap-3 mb-4 ${data.metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {data.metrics.map((m, i) => (
              <MetricsCounter
                key={i}
                label={m.label}
                before={m.before}
                after={m.after}
                icon={m.icon}
              />
            ))}
          </div>

          {/* Testimonial */}
          {data.testimonial && (
            <div
              className="border-t pt-4 mt-2"
              style={{ borderColor: colors.borders.light }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: colors.text.muted }}>
                "{data.testimonial.quote}"
              </p>
              <p className="text-xs mt-2 font-medium" style={{ color: colors.text.primary }}>
                — {data.testimonial.author}
                {data.testimonial.role && (
                  <span style={{ color: colors.text.muted }}>, {data.testimonial.role}</span>
                )}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
});

CaseStudyCard.displayName = 'CaseStudyCard';
