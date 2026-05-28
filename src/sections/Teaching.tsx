'use client';

import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaClock, FaStar } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { courses } from '@/data/courses';
import type { Course } from '@/data/courses';

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/30 p-6 transition-all duration-300 hover:-translate-y-1 group"
      aria-label={`${course.code}: ${course.name}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
          <FaChalkboardTeacher size={16} />
        </div>
        <div className="flex gap-2">
          <Badge variant={course.level === 'UG' ? 'blue' : 'indigo'}>{course.level}</Badge>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/60 text-slate-300 border border-slate-600/50">
            {course.code}
          </span>
        </div>
      </div>

      {/* Course name */}
      <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors">
        {course.name}
      </h3>

      {/* Meta */}
      <div className="flex flex-col gap-1.5 text-xs text-slate-500 mb-4">
        <span className="flex items-start gap-1.5 leading-snug">
          <FaClock size={10} className="mt-0.5 shrink-0" />
          {course.institution}
        </span>
        <span className="flex items-center gap-1.5">
          <FaStar size={10} />
          {course.credits} Credits
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{course.description}</p>
    </motion.article>
  );
}

export function Teaching() {
  const ugCourses = courses.filter((c) => c.level === 'UG');
  const pgCourses = courses.filter((c) => c.level === 'PG');

  return (
    <section id="teaching" aria-label="Teaching" className="py-24 px-6 bg-[#04071a]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Teaching"
            title="Courses Taught"
            subtitle="Engaging undergraduate and postgraduate students with industry-relevant curriculum and hands-on learning."
          />
        </AnimatedSection>

        {/* UG Courses */}
        {ugCourses.length > 0 && (
          <AnimatedSection delay={0.05}>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-6">
              Undergraduate (UG)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {ugCourses.map((c, idx) => (
                <CourseCard key={c.id} course={c} delay={idx * 0.07} />
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* PG Courses */}
        {pgCourses.length > 0 && (
          <AnimatedSection delay={0.1}>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-6">
              Postgraduate (PG)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pgCourses.map((c, idx) => (
                <CourseCard key={c.id} course={c} delay={idx * 0.07} />
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
