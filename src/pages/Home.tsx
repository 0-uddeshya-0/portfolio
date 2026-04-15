import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetPath, localizePublication, personalInfo, publications } from '../data/portfolio';
import { useI18n } from '../i18n/context';

const VALUE_KEYS = ['ai', 'data', 'impact'] as const;
const FEATURED = [
  { id: 'behaviorci' as const, title: 'BehaviorCI', accent: 'from-charcoal/25 to-muted-sage/15', initial: 'B' },
  { id: 'vouch' as const, title: 'Vouch', accent: 'from-muted-blue/25 to-muted-sage/10', initial: 'V' },
];

function ProfilePhoto({ className = '' }: { className?: string }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`bg-charcoal flex items-center justify-center ${className}`}
        aria-label="Profile photo placeholder"
      >
        <User className="w-12 h-12 text-warm-white/40" />
      </div>
    );
  }

  return (
    <img
      src={personalInfo.photo}
      alt={personalInfo.name}
      onError={() => setImgError(true)}
      className={`object-cover object-[center_18%] ${className}`}
      draggable={false}
    />
  );
}

export function Home() {
  const { t, lang } = useI18n();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(rgb(var(--charcoal-rgb) / 0.06) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-20 right-[-20%] w-[55%] max-w-xl h-[420px] rounded-full bg-gradient-to-br from-muted-sage/15 via-transparent to-muted-blue/10 blur-3xl pointer-events-none" aria-hidden />

        <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-20 lg:pt-32 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-start">
            {/* Copy + actions */}
            <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1 space-y-8">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted-sage/10 rounded-full text-sm font-mono text-muted-sage border border-muted-sage/20">
                    <span className="w-2 h-2 bg-muted-sage rounded-full animate-pulse" />
                    {t('home.badge')}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.14 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] text-charcoal mt-8 mb-5 tracking-tight text-balance"
                >
                  {personalInfo.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-xl sm:text-2xl text-charcoal/80 font-light leading-snug text-balance"
                >
                  {t('home.headline')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.26 }}
                  className="text-base text-soft-gray leading-relaxed mt-6 max-w-lg"
                >
                  {t('home.bio')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.32 }}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.03, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-7 py-3.5 bg-charcoal text-warm-white rounded-2xl font-medium hover:bg-charcoal/90 transition-smooth shadow-soft group text-sm sm:text-base"
                    >
                      {t('home.viewProjects')}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-7 py-3.5 bg-light-beige text-charcoal rounded-2xl font-medium hover:bg-muted-sage/20 transition-smooth text-sm sm:text-base"
                    >
                      {t('home.getInTouch')}
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.38 }}
                  className="hidden lg:flex flex-wrap gap-3 pt-6"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap gap-6 pt-10 border-t border-light-beige/80 mt-10 lg:hidden"
                >
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    {t('home.card.open')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <MapPin className="w-3.5 h-3.5 text-soft-gray flex-shrink-0" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <GraduationCap className="w-3.5 h-3.5 text-soft-gray flex-shrink-0" />
                    {t('home.card.degree')}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.46 }}
                  className="grid grid-cols-3 gap-3 max-w-md pt-6 lg:hidden"
                >
                  {(
                    [
                      { value: '7+', labelKey: 'home.card.statProjects' },
                      { value: '2+', labelKey: 'home.card.statYrs' },
                      { value: '1', labelKey: 'home.card.statBook' },
                    ] as const
                  ).map((stat) => (
                    <div key={stat.labelKey} className="bg-light-beige/70 rounded-2xl px-3 py-3 text-center border border-light-beige/50">
                      <p className="font-heading text-lg text-charcoal">{stat.value}</p>
                      <p className="text-[11px] sm:text-xs text-soft-gray leading-tight mt-0.5">{t(stat.labelKey)}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.52 }}
                  className="flex flex-wrap gap-2 pt-6"
                >
                  {[
                    'AI Systems Design',
                    'LLM Evaluation',
                    'Data Engineering',
                    'FastAPI',
                    'NLP',
                    'Process Optimization',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-light-beige/60 rounded-full text-xs font-mono text-charcoal/60"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Portrait + links */}
            <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6 lg:gap-8 self-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-[250px] sm:max-w-[320px] lg:max-w-none lg:w-[min(100%,400px)] lg:mt-2"
              >
                <div
                  className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-muted-sage/20 via-muted-blue/10 to-transparent blur-3xl opacity-90"
                  aria-hidden
                />
                <motion.div
                  className="relative mx-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative aspect-square rounded-full overflow-hidden border-[6px] border-warm-white shadow-[0_28px_90px_-20px_rgba(28,28,28,0.22)] ring-1 ring-light-beige/80 bg-light-beige/50">
                    <ProfilePhoto className="w-full h-full" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex gap-3 flex-wrap justify-center lg:justify-end w-full lg:hidden"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/15 transition-smooth shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.44 }}
                className="hidden lg:block w-full max-w-[400px] bg-warm-white/85 border border-light-beige rounded-2xl p-5 shadow-card"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    {t('home.card.open')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <MapPin className="w-3.5 h-3.5 text-soft-gray flex-shrink-0" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <GraduationCap className="w-3.5 h-3.5 text-soft-gray flex-shrink-0" />
                    {t('home.card.degree')}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-light-beige/80">
                  {(
                    [
                      { value: '7+', labelKey: 'home.card.statProjects' },
                      { value: '2+', labelKey: 'home.card.statYrs' },
                      { value: '1', labelKey: 'home.card.statBook' },
                    ] as const
                  ).map((stat) => (
                    <div key={stat.labelKey} className="bg-light-beige/70 rounded-xl px-2 py-2.5 text-center border border-light-beige/60">
                      <p className="font-heading text-base text-charcoal">{stat.value}</p>
                      <p className="text-[11px] text-soft-gray leading-tight mt-0.5">{t(stat.labelKey)}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-light-beige/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
              {t('home.value.kicker')}
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl text-charcoal max-w-3xl mx-auto text-balance">
              {t('home.value.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {VALUE_KEYS.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-warm-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 h-full border border-transparent hover:border-muted-sage/20">
                  <div className="w-12 h-12 rounded-xl bg-muted-sage/10 flex items-center justify-center mb-6 group-hover:bg-muted-sage/20 transition-smooth">
                    {index === 0 && <Sparkles className="w-6 h-6 text-muted-sage" />}
                    {index === 1 && <Database className="w-6 h-6 text-muted-sage" />}
                    {index === 2 && <Code2 className="w-6 h-6 text-muted-sage" />}
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-3">
                    {t(`home.value.cards.${key}.title`)}
                  </h3>
                  <p className="text-soft-gray leading-relaxed text-sm">{t(`home.value.cards.${key}.body`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
                {t('home.featured.kicker')}
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl text-charcoal">{t('home.featured.title')}</h2>
            </motion.div>
            <Link to="/projects">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="inline-flex items-center gap-2 text-muted-sage hover:text-charcoal transition-smooth group"
              >
                {t('home.featured.viewAll')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to="/projects">
                  <div className="group bg-light-beige/50 rounded-3xl p-8 hover:bg-light-beige transition-all duration-500 cursor-pointer h-full">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <span className="font-heading text-xl text-charcoal">{project.initial}</span>
                    </div>
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider mb-2 block">
                      {t(`home.featured.${project.id}.category`)}
                    </span>
                    <h3 className="font-heading text-2xl text-charcoal mb-2 group-hover:text-muted-sage transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-soft-gray text-sm">{t(`home.featured.${project.id}.subtitle`)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication teaser */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-light-beige/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
                {t('home.publication.kicker')}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-4">{t('home.publication.title')}</h2>
              <p className="text-soft-gray leading-relaxed mb-6 max-w-md">{t('home.publication.body')}</p>
              <Link to="/about#publications">
                <motion.button
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="inline-flex items-center gap-2 text-charcoal hover:text-muted-sage transition-smooth group font-medium text-sm"
                >
                  {t('home.publication.cta')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {publications.map((pub) => {
                const localizedPub = localizePublication(pub, lang);
                return (
                <a
                  key={localizedPub.id}
                  href={localizedPub.links.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-warm-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-transparent hover:border-muted-sage/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-[4.5rem] h-[6.75rem] rounded-xl flex-shrink-0 overflow-hidden border border-light-beige shadow-xs bg-charcoal/5">
                      <img
                        src={localizedPub.coverImage ?? getAssetPath('book-cover.png')}
                        alt=""
                        className="w-full h-full object-cover"
                        width={72}
                        height={108}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-1">
                        {localizedPub.type} · {localizedPub.year} · {localizedPub.publisher}
                      </p>
                      <h3 className="font-heading text-xl text-charcoal mb-2 group-hover:text-muted-sage transition-colors">
                        {localizedPub.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed line-clamp-2">{localizedPub.description}</p>
                    </div>
                  </div>
                </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-5xl text-warm-white mb-6 text-balance">{t('home.cta.title')}</h2>
            <p className="text-warm-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{t('home.cta.body')}</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-warm-white text-charcoal rounded-2xl font-medium hover:bg-light-beige transition-smooth"
              >
                {t('home.cta.button')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
