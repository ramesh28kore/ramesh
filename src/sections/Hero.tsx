'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaLink, FaChevronDown } from 'react-icons/fa';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/8 blur-[80px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-10"
        >
          <FaLink size={11} />
          {profile.tagline}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl gradient-text font-semibold mb-3"
        >
          {profile.title}, {profile.department}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-lg mb-14"
        >
          {profile.institution} · {profile.location}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <FaDownload size={14} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-blue-500/40 hover:border-blue-400 text-blue-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaEnvelope size={14} />
            Contact Me
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: `${profile.stats.yearsExperience}+`, label: 'Years Experience' },
            { value: `${profile.stats.publicationsCount}+`, label: 'Publications' },
            { value: `${profile.stats.coursesCount}+`, label: 'Courses Taught' },
            { value: `${profile.stats.studentsCount}+`, label: 'Students Mentored' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-slate-500 text-xs mt-1 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FaChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
