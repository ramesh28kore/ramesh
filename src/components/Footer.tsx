import { profile } from '@/data/profile';
import {
  FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp, FaPhone, FaMapMarkerAlt,
} from 'react-icons/fa';
import { SiGooglescholar, SiResearchgate, SiOrcid } from 'react-icons/si';

const socialLinks = [
  { href: profile.socials.linkedin,      Icon: FaLinkedin,      label: 'LinkedIn'       },
  { href: profile.socials.github,        Icon: FaGithub,        label: 'GitHub'         },
  { href: profile.socials.googleScholar, Icon: SiGooglescholar, label: 'Google Scholar' },
  { href: profile.socials.researchGate,  Icon: SiResearchgate,  label: 'ResearchGate'   },
  { href: profile.socials.orcid,         Icon: SiOrcid,         label: 'ORCID'          },
  { href: profile.socials.twitter,       Icon: FaTwitter,       label: 'Twitter'        },
];

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Research',     href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Teaching',     href: '#teaching' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Contact',      href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#020510]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">KR</span>
              </div>
              <p className="text-white font-bold text-lg">{profile.name}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {profile.title} · {profile.department}<br />
              {profile.institution}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3">PhD Scholar · Blockchain Technology</p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  <FaEnvelope size={13} className="shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  <FaPhone size={13} className="shrink-0" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <FaMapMarkerAlt size={13} className="shrink-0 mt-0.5" />
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-400 text-sm transition-colors duration-200"
          >
            <FaArrowUp size={11} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
