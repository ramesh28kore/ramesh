'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { workExperience, education } from '@/data/experience';
import type { WorkExperience, Education } from '@/data/experience';

function ExperienceRow({ item, index }: { item: WorkExperience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-8 py-8 border-b border-white/5 last:border-0"
    >
      {/* Date + current badge */}
      <div className="flex sm:flex-col gap-2 sm:gap-1 items-start sm:pt-0.5">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {item.period}
        </span>
        {item.current && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Current
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white font-semibold text-base mb-0.5 group-hover:text-blue-300 transition-colors duration-200">
          {item.institution}
        </h3>
        <p className="text-blue-400 text-sm font-medium mb-3">{item.role}</p>
        <ul className="space-y-1.5">
          {item.responsibilities.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function EducationRow({ item, index }: { item: Education; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-8 py-7 border-b border-white/5 last:border-0"
    >
      {/* Period */}
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:pt-0.5">
        {item.period}
      </span>

      {/* Content */}
      <div>
        <h3 className="text-white font-semibold text-base mb-0.5">{item.degree}</h3>
        <p className="text-indigo-400 text-sm font-medium mb-0.5">{item.field}</p>
        <p className="text-slate-400 text-sm">{item.institution}</p>
        {item.note && (
          <p className="text-slate-500 text-xs mt-2">{item.note}</p>
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-label="Experience & Education" className="py-28 px-6 section-divider" style={{ backgroundColor: '#050916' }}>
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <AnimatedSection>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-16 text-center">
            Career
          </p>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.05}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-1">Experience</h2>
            <p className="text-slate-500 text-sm mb-10">A timeline of teaching roles across institutions.</p>
            <div>
              {workExperience.map((item, idx) => (
                <ExperienceRow key={item.id} item={item} index={idx} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-1">Education</h2>
            <p className="text-slate-500 text-sm mb-10">Academic background and degrees.</p>
            <div>
              {education.map((item, idx) => (
                <EducationRow key={item.id} item={item} index={idx} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={0.15}>
          <h2 className="text-3xl font-bold text-white mb-1">Certifications</h2>
          <p className="text-slate-500 text-sm mb-8">Professional credentials and development programs.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Blockchain Technologies",              issuer: "NPTEL" },
              { name: "Python for Data Science",             issuer: "NPTEL" },
              { name: "Full Stack Web Development",          issuer: "NxtWave CCBP 4.0" },
              { name: "AWS Machine Learning Foundation",     issuer: "Google Udacity" },
              { name: "Faculty Development Program",         issuer: "Aurora's TRI, 2019" },
              { name: "Web App Development Workshop",        issuer: "IARE" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 transition-colors duration-200"
              >
                <span className="text-slate-300 text-sm">{cert.name}</span>
                <span className="text-[11px] font-semibold text-slate-500 shrink-0">{cert.issuer}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
