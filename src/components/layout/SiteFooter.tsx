import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useI18n } from '../../i18n/context';

const footerNav = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.studio', href: '/studio' },
  { key: 'nav.contact', href: '/contact' },
] as const;

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-light-beige bg-light-beige/25 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(rgb(var(--charcoal-rgb) / 0.06) 1px, transparent 1px)`,
          backgroundSize: '22px 22px',
        }}
      />
      <div className="pointer-events-none absolute -top-24 right-[-15%] w-[55%] max-w-xl h-[320px] rounded-full bg-gradient-to-br from-muted-sage/15 via-transparent to-muted-blue/10 blur-3xl" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-sage mb-3">
              {t('layout.footerLocation')}
            </p>
            <p className="text-charcoal/80 leading-relaxed max-w-md">
              {t('layout.footerTagline')}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
              >
                <Mail className="w-4 h-4 text-muted-sage" />
                {personalInfo.email}
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 shadow-xs">
                <MapPin className="w-4 h-4 text-muted-sage" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-soft-gray mb-3">Navigate</p>
              <div className="flex flex-wrap gap-2">
                {footerNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="px-3 py-1.5 rounded-lg text-sm text-charcoal/70 hover:text-charcoal hover:bg-warm-white transition-smooth"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-soft-gray mb-3">Elsewhere</p>
              <div className="flex flex-col gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 px-4 py-3 bg-warm-white border border-light-beige rounded-2xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted-sage" />
                    GitHub
                  </span>
                  <span className="text-xs font-mono text-soft-gray">0-uddeshya-0</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 px-4 py-3 bg-warm-white border border-light-beige rounded-2xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-muted-sage" />
                    LinkedIn
                  </span>
                  <span className="text-xs font-mono text-soft-gray">Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-light-beige flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-soft-gray">
          <p>
            © {year} {personalInfo.name}. {t('layout.footerRights')}
          </p>
          <p className="text-soft-gray/90">A calm interface for a noisy world.</p>
        </div>
      </div>
    </footer>
  );
}
