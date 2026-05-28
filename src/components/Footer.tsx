import { profile } from '@/data/profile';
import {
  FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp,
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#04071a]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-xl">{profile.name}</p>
            <p className="text-slate-400 text-sm mt-1">
              {profile.title} · {profile.department}
            </p>
            <p className="text-slate-500 text-sm">{profile.institution}</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
          >
            <FaArrowUp size={12} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
