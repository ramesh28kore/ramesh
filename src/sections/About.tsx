'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { profile } from '@/data/profile';

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/50"
    >
      <p className="text-2xl font-bold text-blue-400">{value}</p>
      <p className="text-slate-400 text-xs mt-1 uppercase tracking-wide">{label}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" aria-label="About" className="py-24 px-6 bg-[#060b20]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="About Me"
            title="Researcher, Educator & Innovator"
            subtitle="Advancing the frontiers of blockchain technology through academic research and practical education."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Avatar + stats */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="flex flex-col items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-blue-500/20">
                  {profile.profileImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.profileImage}
                      alt={`${profile.name} profile photo`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    profile.initials
                  )}
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-1 rounded-2xl border border-blue-500/20 -z-10" />
                <div className="absolute -inset-3 rounded-2xl border border-blue-500/10 -z-10" />
              </div>

              {/* Quick info */}
              <div className="w-full space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <FaGraduationCap className="text-blue-400 shrink-0" size={16} />
                  <span className="text-sm">{profile.title} · {profile.department}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FaGraduationCap className="text-blue-400 shrink-0" size={16} />
                  <span className="text-sm">{profile.institution}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FaMapMarkerAlt className="text-blue-400 shrink-0" size={16} />
                  <span className="text-sm">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FaEnvelope className="text-blue-400 shrink-0" size={16} />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <StatCard value={`${profile.stats.yearsExperience}+`} label="Years Experience" delay={0.2} />
                <StatCard value={`${profile.stats.publicationsCount}+`} label="Publications"     delay={0.3} />
                <StatCard value={`${profile.stats.coursesCount}+`}     label="Courses Taught"   delay={0.4} />
                <StatCard value={`${profile.stats.studentsCount}+`}    label="Students"          delay={0.5} />
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              {profile.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  View Full CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-lg font-semibold transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
