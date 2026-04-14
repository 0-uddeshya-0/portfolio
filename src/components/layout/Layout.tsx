import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ScrollRestoration } from 'react-router-dom';
import { SpotlightCursorWebGL } from '../ui-custom/SpotlightCursorWebGL';
import { useI18n } from '../../i18n/context';
import { SiteFooter } from './SiteFooter';

const navPaths = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.contact', href: '/contact' },
] as const;

function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className="ml-1 inline-flex rounded-full border border-light-beige/90 bg-warm-white/90 p-0.5 shadow-xs backdrop-blur-sm"
      role="group"
      aria-label={t('layout.language')}
    >
      <button
        type="button"
        onClick={() => setLang('de')}
        className={`relative rounded-full px-3 py-1.5 text-xs font-mono font-medium transition-all duration-300 ${
          lang === 'de'
            ? 'bg-charcoal text-warm-white shadow-sm'
            : 'text-charcoal/55 hover:text-charcoal'
        }`}
        aria-pressed={lang === 'de'}
        aria-label={t('layout.switchToGerman')}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`relative rounded-full px-3 py-1.5 text-xs font-mono font-medium transition-all duration-300 ${
          lang === 'en'
            ? 'bg-charcoal text-warm-white shadow-sm'
            : 'text-charcoal/55 hover:text-charcoal'
        }`}
        aria-pressed={lang === 'en'}
        aria-label={t('layout.switchToEnglish')}
      >
        EN
      </button>
    </div>
  );
}

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="min-h-screen bg-warm-white transition-colors duration-500">
        <SpotlightCursorWebGL />
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'bg-warm-white/90 backdrop-blur-xl shadow-soft' : 'bg-transparent'
          }`}
        >
          <div className="px-6 lg:px-12">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="font-heading text-lg text-charcoal hover:text-muted-sage transition-smooth"
                >
                  Uddeshya Singh
                </motion.div>
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {navPaths.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-2 text-sm rounded-lg transition-smooth ${
                      location.pathname === item.href
                        ? 'text-charcoal bg-light-beige'
                        : 'text-charcoal/60 hover:text-charcoal hover:bg-light-beige/50'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <LanguageToggle />
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <LanguageToggle />
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10 rounded-xl bg-light-beige/50 flex items-center justify-center text-charcoal hover:bg-muted-sage/20 transition-smooth"
                  aria-expanded={isMenuOpen}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </nav>
          </div>
        </motion.header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="absolute right-0 top-0 bottom-0 w-72 bg-warm-white shadow-2xl"
              >
                <div className="pt-24 px-6">
                  <div className="space-y-2">
                    {navPaths.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={`block w-full text-left px-4 py-3 rounded-xl transition-smooth ${
                            location.pathname === item.href
                              ? 'bg-muted-sage/10 text-charcoal'
                              : 'text-charcoal/70 hover:bg-light-beige'
                          }`}
                        >
                          {t(item.key)}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <SiteFooter />
      </div>
      <ScrollRestoration />
    </>
  );
}
