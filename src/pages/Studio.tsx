import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ExternalLink, ImageIcon, ShoppingCart, Sparkles, X } from 'lucide-react';
import { getAssetPath, localizePublication, publications } from '../data/portfolio';
import { useI18n } from '../i18n/context';

const BOOK_GALLERY = [
  getAssetPath('book-showcase/cover-1.png'),
  getAssetPath('book-showcase/cover-2.png'),
  getAssetPath('book-showcase/cover-3.png'),
  getAssetPath('book-showcase/cover-4.png'),
];

function BuyButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal hover:border-muted-sage/40 hover:bg-muted-sage/5 transition-smooth shadow-xs"
    >
      <ShoppingCart className="w-4 h-4 text-soft-gray" />
      {label}
      <ExternalLink className="w-3.5 h-3.5 text-soft-gray" />
    </a>
  );
}

export function Studio() {
  const { t, lang } = useI18n();
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const pub = publications[0];
  const localized = localizePublication(pub, lang);

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            {t('studio.kicker')}
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">{t('studio.title')}</h1>
          <p className="text-soft-gray text-lg max-w-2xl leading-relaxed">{t('studio.intro')}</p>
        </motion.div>

        {/* Book feature */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('studio.bookKicker')}
            </span>
          </motion.div>

          <button
            type="button"
            onClick={() => setIsBookOpen(true)}
            className="w-full text-left group"
          >
            <div className="bg-warm-white rounded-3xl border border-light-beige shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden">
              <div className="grid sm:grid-cols-[140px,1fr] gap-6 p-5 sm:p-7 lg:p-8">
                <div className="w-28 sm:w-full max-w-[140px] rounded-2xl overflow-hidden border border-light-beige shadow-xs bg-charcoal/5">
                  <img
                    src={localized.coverImage ?? getAssetPath('book-cover.png')}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-2">
                    {localized.type} · {localized.year} · {localized.publisher}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="font-heading text-2xl sm:text-3xl text-charcoal group-hover:text-muted-sage transition-colors">
                        {localized.title}
                      </h2>
                      <p className="text-soft-gray mt-2 leading-relaxed text-sm sm:text-base max-w-2xl">
                        {localized.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-light-beige/60 text-charcoal/70 border border-light-beige">
                      <Sparkles className="w-4 h-4 text-muted-sage" />
                      <span className="text-sm font-medium">{t('studio.bookOpen')}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {localized.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-light-beige/50 rounded-full text-xs font-mono text-charcoal/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* Interests */}
        <section className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('studio.interestsKicker')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal">{t('studio.interestsTitle')}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(['travel', 'reading', 'cooking', 'learning'] as const).map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-light-beige/40 rounded-2xl p-5 border border-light-beige hover:bg-light-beige transition-smooth"
              >
                <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center shadow-xs mb-4">
                  <ImageIcon className="w-5 h-5 text-muted-sage" />
                </div>
                <p className="text-charcoal/80 font-medium">{t(`studio.interests.${k}`)}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Book modal */}
      <AnimatePresence>
        {isBookOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-2 sm:p-4 bg-charcoal/60 backdrop-blur-md"
            onClick={() => setIsBookOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 36 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 36 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-warm-white rounded-t-3xl sm:rounded-3xl max-w-4xl w-full max-h-[94vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-warm-white/96 backdrop-blur-md border-b border-light-beige p-4 sm:p-6 flex items-start justify-between gap-4 z-10">
                <div className="min-w-0">
                  <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-2">
                    {localized.type} · {localized.year} · {localized.publisher}
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal">{localized.title}</h3>
                  <p className="text-soft-gray mt-1">{localized.longDescription}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBookOpen(false)}
                  className="w-11 h-11 rounded-xl bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth flex-shrink-0 ring-1 ring-charcoal/5"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-6">
                <div className="bg-light-beige/35 border border-light-beige rounded-3xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-muted-sage" />
                    <span className="text-xs font-mono uppercase tracking-wider text-charcoal/50">{t('studio.gallery')}</span>
                  </div>

                  <div className="grid lg:grid-cols-[1fr,220px] gap-4">
                    <div className="rounded-2xl overflow-hidden bg-warm-white border border-light-beige">
                      <img
                        src={BOOK_GALLERY[Math.min(activeImg, BOOK_GALLERY.length - 1)]}
                        alt=""
                        className="w-full h-[320px] sm:h-[420px] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
                      {BOOK_GALLERY.map((src, idx) => (
                        <button
                          type="button"
                          key={src}
                          onClick={() => setActiveImg(idx)}
                          className={`rounded-2xl overflow-hidden border transition-smooth ${
                            idx === activeImg ? 'border-muted-sage shadow-xs' : 'border-light-beige hover:border-muted-sage/40'
                          }`}
                          aria-label={`Image ${idx + 1}`}
                        >
                          <img src={src} alt="" className="w-full h-20 sm:h-24 object-cover" loading="lazy" decoding="async" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-soft-gray uppercase tracking-wider mr-1">Available on</span>
                  <BuyButton href={localized.links.googlePlay} label="Google Play Books" />
                  <BuyButton href={localized.links.amazon} label="Amazon" />
                  <BuyButton href={localized.links.flipkart} label="Flipkart" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

