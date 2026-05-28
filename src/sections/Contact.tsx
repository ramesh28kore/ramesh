'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { profile } from '@/data/profile';

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters').max(100),
  email:   z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

type FormData = z.infer<typeof schema>;

function validate(data: Partial<FormData>): Partial<Record<keyof FormData, string>> {
  const result = schema.safeParse(data);
  if (result.success) return {};
  return Object.fromEntries(
    result.error.issues.map((issue) => [issue.path[0], issue.message])
  );
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(data: FormData) {
    const clientErrors = validate(data);
    if (Object.keys(clientErrors).length) return;

    setStatus('idle');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? 'Failed to send message.');
      }

      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputClass =
    'w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200';

  return (
    <section id="contact" aria-label="Contact" className="py-24 px-6 bg-[#060b20]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Contact"
            title="Get in Touch"
            subtitle="Have a research question, collaboration idea, or just want to connect? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — Contact info */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-slate-400 leading-relaxed">
                  Whether you're interested in research collaboration, academic partnerships,
                  speaking invitations, or student guidance — feel free to reach out.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-200 group"
                  aria-label={`Email: ${profile.email}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 shrink-0">
                    <FaEnvelope size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-slate-200 text-sm group-hover:text-blue-400 transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 shrink-0">
                    <FaMapMarkerAlt size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-slate-200 text-sm">{profile.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Academic Profiles</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { href: profile.socials.linkedin,      icon: <FaLinkedin size={16} />,      label: 'LinkedIn'       },
                    { href: profile.socials.github,        icon: <FaGithub size={16} />,        label: 'GitHub'         },
                    { href: profile.socials.googleScholar, icon: <SiGooglescholar size={16} />, label: 'Google Scholar' },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 text-sm transition-all duration-200"
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection direction="right" delay={0.15}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5 p-8 rounded-2xl bg-slate-900/60 border border-slate-700/50"
              aria-label="Contact form"
            >
              {/* Success state */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                  <FaCheckCircle size={18} />
                  <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className={inputClass}
                    {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={inputClass}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-slate-400 mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Research collaboration, speaking invitation…"
                  className={inputClass}
                  {...register('subject', { required: 'Subject is required', minLength: { value: 3, message: 'At least 3 characters' } })}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your research interest or how I can help…"
                  className={`${inputClass} resize-none`}
                  {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaPaperPlane size={14} />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              <p className="text-center text-xs text-slate-600">
                Your information is kept private and never shared.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
