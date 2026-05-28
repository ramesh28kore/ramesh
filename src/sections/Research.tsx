'use client';

import { motion } from 'framer-motion';
import {
  FaLink, FaFileCode, FaCoins, FaShieldAlt,
} from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { researchAreas } from '@/data/research';
import type { ResearchArea } from '@/data/research';

const iconMap: Record<string, React.ReactNode> = {
  FaLink:      <FaLink      size={26} />,
  FaFileCode:  <FaFileCode  size={26} />,
  FaCoins:     <FaCoins     size={26} />,
  FaShieldAlt: <FaShieldAlt size={26} />,
};

function ResearchCard({ area, delay, wide }: { area: ResearchArea; delay: number; wide?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl p-7 border transition-all duration-300 ${
        wide
          ? 'sm:col-span-2 bg-blue-950/20 border border-blue-500/20 hover:border-blue-500/40'
          : 'border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04]'
      }`}
      aria-label={`Research area: ${area.title}`}
    >
      {area.highlight && (
        <span className="absolute top-5 right-5 text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
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
    <section id="research" aria-label="Research Areas" className="py-28 px-6 section-divider" style={{ backgroundColor: '#07101f' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-4 text-center">Research</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">Blockchain, AI &amp; the<br />future of trusted software</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">Doctoral research in blockchain technology with parallel interests in AI, automation, and modern data systems.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {researchAreas.map((area, idx) => (
            <ResearchCard
              key={area.id}
              area={area}
              delay={idx * 0.1}
              wide={area.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
