import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolio';
import { useI18n } from '../../i18n/context';

const footerNav = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.contact', href: '/contact' },
] as const;

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-light-beige bg-light-beige/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 sm:py-10">
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm text-charcoal/70 hover:text-charcoal hover:bg-warm-white transition-smooth"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-soft-gray">
            <p>
              {t('layout.footerLocation')} · © {year} {personalInfo.name}. {t('layout.footerRights')}
            </p>
            <p>{t('layout.footerTagline')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
