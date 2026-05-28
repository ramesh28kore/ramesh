'use client';

import { motion } from 'framer-motion';
import {
  FaLink, FaCode, FaBrain, FaTools,
} from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillGroups } from '@/data/skills';
import type { SkillGroup } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  FaLink:  <FaLink  size={16} />,
  FaCode:  <FaCode  size={16} />,
  FaBrain: <FaBrain size={16} />,
  FaTools: <FaTools size={16} />,
};

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  blue:   { icon: 'text-blue-400',   badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',     border: 'border-blue-500/20' },
  indigo: { icon: 'text-indigo-400', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', border: 'border-indigo-500/20' },
  purple: { icon: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20', border: 'border-purple-500/20' },
  cyan:   { icon: 'text-cyan-400',   badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',       border: 'border-cyan-500/20' },
};

function GroupCard({ group, cardDelay }: { group: SkillGroup; cardDelay: number }) {
  const colors = colorMap[group.color] ?? colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: cardDelay }}
      className={`p-6 rounded-2xl bg-slate-900/50 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-8 h-8 rounded-lg bg-slate-800 border ${colors.border} flex items-center justify-center ${colors.icon}`}>
          {iconMap[group.iconName] ?? <FaLink size={16} />}
        </div>
        <h3 className={`font-bold text-xs uppercase tracking-[0.2em] ${colors.icon}`}>
          {group.category}
        </h3>
      </div>

      {/* Pill tags */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: cardDelay + i * 0.04 }}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${colors.badge}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-28 px-6 section-divider" style={{ backgroundColor: '#050916' }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Skills"
            title="Technical Skills"
            subtitle="A curated overview of my technical proficiencies spanning blockchain, programming, AI, and development tools."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, idx) => (
            <GroupCard key={group.category} group={group} cardDelay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
