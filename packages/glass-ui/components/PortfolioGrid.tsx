import React, { useState, useMemo, memo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { CaseStudyCard, CaseStudyData } from './CaseStudyCard';
import { colors } from '../design-tokens';

interface PortfolioGridProps {
  caseStudies: CaseStudyData[];
  showFilter?: boolean;
  className?: string;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = memo(({
  caseStudies,
  showFilter = true,
  className = '',
}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = useMemo(() => {
    const arms = new Set(caseStudies.map((cs) => cs.arm).filter(Boolean));
    return ['All', ...Array.from(arms)] as string[];
  }, [caseStudies]);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return caseStudies;
    return caseStudies.filter((cs) => cs.arm === activeFilter);
  }, [caseStudies, activeFilter]);

  return (
    <div className={className}>
      {/* Filter bar */}
      {showFilter && filters.length > 2 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
              style={{
                background: activeFilter === f ? colors.accent.blue : 'transparent',
                color: activeFilter === f ? 'white' : colors.text.muted,
                borderColor: activeFilter === f ? colors.accent.blue : colors.borders.light,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <CaseStudyCard data={cs} delay={i * 0.1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
});

PortfolioGrid.displayName = 'PortfolioGrid';
