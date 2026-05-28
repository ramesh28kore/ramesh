'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

export function CVDownload() {
  return (
    <section
      id="cv"
      aria-label="Download CV"
      className="py-28 px-6 section-divider" style={{ backgroundColor: '#050916' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          {/* Eyebrow */}
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-6">
            Curriculum Vitae
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Open to research collaboration<br />
            <span className="gradient-text">&amp; guest lectures</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Interested in blockchain, decentralised applications, or AI-augmented education?
            Let&apos;s build something meaningful together.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <FaDownload size={15} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/10 hover:border-blue-400/50 text-slate-300 hover:text-blue-300 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaEnvelope size={15} />
              Start a conversation
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}


