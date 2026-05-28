'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#050916' }}
    >
      {/* Background image — top-right corner, subtle */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-0 top-0 h-[70%] w-[35%]">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            sizes="35vw"
            className="object-cover object-center opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050916] via-[#050916]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050916]" />
        </div>
      </div>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-indigo-600/6 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Left — Text content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* ALL CAPS eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-[0.25em] text-blue-400 uppercase mb-6"
            >
              PhD Scholar · Blockchain Technology
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5"
            >
              {profile.name}
            </motion.h1>

            {/* Title line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg gradient-text font-semibold mb-2"
            >
              {profile.title} of {profile.department}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-400 text-base mb-8"
            >
              {profile.institution} · Hyderabad, Telangana
            </motion.p>

            {/* Short bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg"
            >
              Assistant Professor of Computer Science &amp; Engineering. Researching full-stack
              blockchain web development, exploring AI &amp; automation, and mentoring the next
              generation of engineers.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                <FaDownload size={13} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-slate-600/50 hover:border-slate-400 text-slate-400 hover:text-white rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaEnvelope size={13} />
                Get in touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 border-t border-slate-700/50 pt-8 max-w-sm"
            >
              {[
                { value: `${profile.stats.yearsExperience}+`, label: 'Years Teaching' },
                { value: '5',                                  label: 'Institutions' },
                { value: `${profile.stats.coursesCount}+`,    label: 'Courses Taught' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Photo frame — clean, no decorative rings */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/8 shadow-2xl shadow-black/40">
                {profile.profileImage ? (
                  <Image
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-7xl font-bold">
                    {profile.initials}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FaChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
