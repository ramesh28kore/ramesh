'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaLink } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

export function CVDownload() {
  return (
    <section
      id="cv"
      aria-label="Download CV"
      className="py-24 px-6 bg-[#04071a] grid-bg"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-[#04071a] p-12 text-center">
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[60px] rounded-full" />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 mx-auto mb-6">
                <FaLink size={28} />
              </div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Collaborate?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
              >
                Download my full Curriculum Vitae for a comprehensive overview of my research,
                teaching experience, publications, and technical expertise.
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
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  <FaDownload size={16} />
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FaEnvelope size={16} />
                  Send a Message
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
