'use client';

import { motion } from 'framer-motion';
import {
  FaLink, FaFileCode, FaCoins, FaShieldAlt,
} from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { researchAreas } from '@/data/research';
import type { ResearchArea } from '@/data/research';

const iconMap: Record<string, React.ReactNode> = {
  FaLink:      <FaLink      size={26} />,
  FaFileCode:  <FaFileCode  size={26} />,
  FaCoins:     <FaCoins     size={26} />,
  FaShieldAlt: <FaShieldAlt size={26} />,
};

function ResearchCard({ area, delay }: { area: ResearchArea; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl p-7 border transition-all duration-300 bg-slate-900/60 hover:bg-slate-800/60 ${
        area.highlight
          ? 'border-blue-500/40 shadow-lg shadow-blue-500/5'
          : 'border-slate-700/50 hover:border-blue-500/30'
      }`}
      aria-label={`Research area: ${area.title}`}
    >
      {area.highlight && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
          Primary Focus
        </span>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
        {iconMap[area.iconName] ?? <FaLink size={26} />}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{area.description}</p>

      <div className="flex flex-wrap gap-2">
        {area.tags.map((tag) => (
          <Badge key={tag} variant="blue">{tag}</Badge>
        ))}
      </div>
    </motion.article>
  );
}

export function Research() {
  return (
    <section id="research" aria-label="Research Areas" className="py-24 px-6 bg-[#04071a] grid-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Research"
            title="Research Areas"
            subtitle="My academic work focuses on the design, security, and application of blockchain-based decentralized systems."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {researchAreas.map((area, idx) => (
            <ResearchCard key={area.id} area={area} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
