'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

const stats = [
  { value: '9+',  label: 'Years Teaching' },
  { value: '5',   label: 'Institutions' },
  { value: '7+',  label: 'Courses Taught' },
  { value: '4',   label: 'Certifications' },
];

export function About() {
  return (
    <section id="about" aria-label="About" className="py-28 px-6 section-divider" style={{ backgroundColor: '#07101f' }}>
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <AnimatedSection>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-16 text-center">
            About Me
          </p>
        </AnimatedSection>

        {/* Two-column: photo | bio */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start mb-20">

          {/* Left — Photo only, clean */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative mx-auto lg:mx-0 w-[280px] lg:w-full">
              {/* Subtle accent behind photo */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800">
                {profile.profileImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold gradient-text">
                    {profile.initials}
                  </div>
                )}
              </div>
              {/* Name label below photo */}
              <div className="mt-4 text-center lg:text-left">
                <p className="text-white font-bold">{profile.name}</p>
                <p className="text-slate-400 text-sm mt-0.5">{profile.title} · {profile.institution}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Educator, researcher,<br />
                <span className="gradient-text">lifelong learner.</span>
              </h2>

              <div className="space-y-5 mb-10">
                {profile.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-400 leading-[1.85] text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-px"
                >
                  <FaDownload size={12} />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-blue-400/50 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-px"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats strip */}
        <AnimatedSection delay={0.35}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-8 px-4 bg-[#07101f]"
              >
                <span className="text-3xl font-bold text-blue-400 mb-1">{value}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
