'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLink } from 'react-icons/fa';
import { profile } from '@/data/profile';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Research',     href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Teaching',     href: '#teaching' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Contact',      href: '#contact' },
];

export function Navbar() {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [isMobileOpen,  setIsMobileOpen]  = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -65% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#04071a]/95 backdrop-blur-md border-b border-blue-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <FaLink size={13} className="text-white" />
          </div>
          <span className="font-bold text-white hidden sm:block">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="ml-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-1"
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#04071a]/98 backdrop-blur-md border-t border-blue-500/10 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-slate-300 hover:text-blue-400 font-medium border-b border-slate-800/60 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="mt-4 block text-center px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
