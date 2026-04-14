import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  FileDown,
  ArrowUpRight,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useI18n } from '../i18n/context';

export function Contact() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            {t('contact.kicker')}
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">{t('contact.title')}</h1>
          <p className="text-soft-gray text-lg max-w-xl mx-auto leading-relaxed">{t('contact.intro')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-5 p-6 bg-light-beige/50 rounded-2xl hover:bg-light-beige hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-soft-gray mb-1">{t('contact.email')}</p>
                <p className="text-charcoal font-medium truncate">{personalInfo.email}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-soft-gray group-hover:text-muted-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-light-beige/50 rounded-2xl hover:bg-light-beige hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-soft-gray mb-1">LinkedIn</p>
                <p className="text-charcoal font-medium">uddeshya-singh1304</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-soft-gray group-hover:text-muted-sage transition-all flex-shrink-0" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-light-beige/50 rounded-2xl hover:bg-light-beige hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-soft-gray mb-1">{t('contact.github')}</p>
                <p className="text-charcoal font-medium">0-uddeshya-0</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-soft-gray group-hover:text-muted-sage transition-all flex-shrink-0" />
            </a>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/Resume.pdf"
                download
                className="group flex items-center gap-4 p-5 bg-charcoal rounded-2xl hover:bg-charcoal/90 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-charcoal/40 flex items-center justify-center text-warm-white">
                  <FileDown className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-warm-white/60 mb-1">{t('contact.downloadLabel')}</p>
                  <p className="text-warm-white font-medium text-sm">{t('contact.resumeEnglish')}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-warm-white/60 group-hover:text-warm-white transition-all flex-shrink-0" />
              </a>

              <a
                href="/Resume-DE.pdf"
                download
                className="group flex items-center gap-4 p-5 bg-light-beige rounded-2xl hover:bg-muted-sage/20 transition-all duration-500 border border-light-beige"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center text-charcoal">
                  <FileDown className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-soft-gray mb-1">{t('contact.downloadLabel')}</p>
                  <p className="text-charcoal font-medium text-sm">{t('contact.resumeGerman')}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-soft-gray group-hover:text-charcoal transition-all flex-shrink-0" />
              </a>
            </div>
            <p className="text-xs text-soft-gray px-1">{t('contact.cvHint')}</p>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-light-beige/40 rounded-3xl p-8">
              <h3 className="font-heading text-xl text-charcoal mb-6">{t('contact.quickInfo')}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-muted-sage" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-1">
                      {t('contact.locationLabel')}
                    </p>
                    <p className="text-charcoal font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MessageSquare className="w-5 h-5 text-muted-sage" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-1">
                      {t('contact.languagesLabel')}
                    </p>
                    <p className="text-charcoal font-medium">{t('contact.englishLine')}</p>
                    <p className="text-charcoal/70 text-sm">{t('contact.germanLine')}</p>
                  </div>
                </div>

                <div className="pt-5 border-t border-light-beige">
                  <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-3">
                    {t('contact.availability')}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-charcoal font-medium">{t('contact.openOpportunities')}</span>
                  </div>
                  <p className="text-sm text-soft-gray mt-2 ml-5">{t('contact.availabilityHint')}</p>
                </div>
              </div>
            </div>

            <div className="bg-warm-white rounded-2xl p-6 border border-light-beige">
              <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-4">
                {t('contact.areasTitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Data Engineering', 'AI / ML', 'Data Analytics', 'Backend Development', 'AI Strategy', 'Product & UX'].map((area) => (
                  <span key={area} className="px-3 py-1.5 bg-light-beige/60 rounded-full text-sm text-charcoal/70">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-24 pt-8 border-t border-light-beige"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-soft-gray">
            © {year} {personalInfo.name}. {t('contact.rightsSuffix')}
          </p>
          <p className="text-sm text-soft-gray">{t('contact.tagline')}</p>
        </div>
      </motion.footer>
    </div>
  );
}
