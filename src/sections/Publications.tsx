'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaBook, FaUsers, FaCalendar } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { publications } from '@/data/publications';
import type { PublicationType } from '@/data/publications';

const filters: Array<'All' | PublicationType> = ['All', 'Journal', 'Conference', 'Preprint'];

const typeVariant: Record<PublicationType, 'blue' | 'indigo' | 'purple'> = {
  Journal:    'blue',
  Conference: 'indigo',
  Preprint:   'purple',
};

export function Publications() {
  const [active, setActive] = useState<'All' | PublicationType>('All');

  const filtered = active === 'All'
    ? publications
    : publications.filter((p) => p.type === active);

  return (
    <section id="publications" aria-label="Publications" className="py-28 px-6 section-divider" style={{ backgroundColor: '#050916' }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Publications"
            title="Research Publications"
            subtitle="Peer-reviewed journal articles, conference papers, and preprints in blockchain and distributed systems."
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="Filter publications">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50'
                }`}
              >
                {f}
                <span className="ml-2 text-xs opacity-70">
                  ({f === 'All' ? publications.length : publications.filter((p) => p.type === f).length})
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Publication cards */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, idx) => (
              <motion.article
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.03] transition-all duration-300 group"
                aria-label={pub.title}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Badge variant={typeVariant[pub.type]}>{pub.type}</Badge>
                  {pub.doi && pub.doi !== '#' && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`DOI link for ${pub.title}`}
                      className="text-slate-500 hover:text-blue-400 transition-colors shrink-0"
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>

                <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                  {pub.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <FaUsers size={11} className="text-slate-500" />
                    {pub.authors}
                  </span>
                  <span className="hidden sm:block text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <FaBook size={11} className="text-slate-500" />
                    {pub.venue}
                  </span>
                  <span className="hidden sm:block text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <FaCalendar size={11} className="text-slate-500" />
                    {pub.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
