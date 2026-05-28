'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaLink, FaCode, FaBrain, FaTools,
} from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillGroups } from '@/data/skills';
import type { SkillGroup, Skill } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  FaLink:  <FaLink  size={18} />,
  FaCode:  <FaCode  size={18} />,
  FaBrain: <FaBrain size={18} />,
  FaTools: <FaTools size={18} />,
};

const colorMap: Record<string, { text: string; bg: string; bar: string }> = {
  blue:   { text: 'text-blue-400',   bg: 'bg-blue-500/10',   bar: 'bg-blue-500'   },
  indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', bar: 'bg-indigo-500' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', bar: 'bg-purple-500' },
  cyan:   { text: 'text-cyan-400',   bg: 'bg-cyan-500/10',   bar: 'bg-cyan-500'   },
};

function SkillBar({ skill, color, delay }: { skill: Skill; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { bar } = colorMap[color] ?? colorMap.blue;

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-slate-500 text-xs">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-700/60 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${bar}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function GroupCard({ group, cardDelay }: { group: SkillGroup; cardDelay: number }) {
  const colors = colorMap[group.color] ?? colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: cardDelay }}
      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}>
          {iconMap[group.iconName] ?? <FaLink size={18} />}
        </div>
        <h3 className={`font-bold text-sm uppercase tracking-wider ${colors.text}`}>
          {group.category}
        </h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={group.color}
            delay={cardDelay + i * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-24 px-6 bg-[#060b20]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Skills"
            title="Technical Skills"
            subtitle="A curated overview of my technical proficiencies spanning blockchain, programming, AI, and development tools."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <GroupCard key={group.category} group={group} cardDelay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
