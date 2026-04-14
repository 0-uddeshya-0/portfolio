import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Lightbulb,
  Network,
  Scale,
  Award,
  BookOpen,
  ExternalLink,
  ShoppingCart,
  PenLine,
  ImageIcon,
  Layers,
} from 'lucide-react';
import {
  experience,
  education,
  certifications,
  localizeProject,
  localizePublication,
  projects,
  skills,
  publications,
  workshops,
  creativeWork,
} from '../data/portfolio';
import { useI18n } from '../i18n/context';

const APPROACH_ICONS = [Lightbulb, Network, Scale] as const;
const APPROACH_KEYS = ['problemFirst', 'systems', 'tradeoffs'] as const;

const SKILL_CAT_KEY: Record<string, 'aiMl' | 'dataEng' | 'designProduct' | 'toolsPlatforms'> = {
  'AI & ML': 'aiMl',
  'Data & Engineering': 'dataEng',
  'Design & Product': 'designProduct',
  'Tools & Platforms': 'toolsPlatforms',
};

const certificationLinks: Record<string, string> = {
  'Applied Design Thinking Project: Identification of AI Use Cases': '/certificates/uzin-utz-certificate.pdf',
  SQL: '/certificates/sql-certificate.pdf',
  'Project Management': '/certificates/project-management-certificate.pdf',
  'The Fundamentals of Digital Marketing': '/certificates/digital-marketing-certificate.pdf',
  'Entrepreneurship Foundation': '/certificates/entrepreneurship-certificate.pdf',
};

const sketchGallery = [
  { id: 'maasi', src: '/sketches/maasi.png', subject: 'Portrait Study' },
  { id: 'shreyashi', src: '/sketches/shreyashi.png', subject: 'Portrait Study' },
  { id: 'mountains', src: '/sketches/mountains.png', subject: 'Ink Mountains' },
  { id: 'pastel-sky', src: '/sketches/pastel-sky.png', subject: 'Acrylic Sky' },
  { id: 'masi', src: '/sketches/masi.png', subject: 'Portrait Study' },
  { id: 'dadu', src: '/sketches/dadu.png', subject: 'Portrait Study' },
  { id: 'rishabh', src: '/sketches/rishabh.png', subject: 'Portrait Study' },
  { id: 'isha', src: '/sketches/isha.png', subject: 'Portrait Study' },
  { id: 'munni', src: '/sketches/munni.png', subject: 'Portrait Study' },
  ...creativeWork.series.flatMap((series) =>
    series.pieces.map((piece) => ({
      id: `${series.id}-${piece.id}`,
      src: piece.src,
      subject: piece.subject,
    }))
  ),
];

function BuyButton({ href, label, icon }: { href: string; label: string; icon?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal hover:border-muted-sage/40 hover:bg-muted-sage/5 transition-smooth shadow-xs"
    >
      {icon}
      {label}
      <ExternalLink className="w-3.5 h-3.5 text-soft-gray" />
    </a>
  );
}

export function About() {
  const { t, lang } = useI18n();

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            {t('about.kicker')}
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">{t('about.title')}</h1>
          <p className="text-soft-gray text-lg max-w-2xl leading-relaxed">{t('about.intro')}</p>
        </motion.div>

        {/* 1) HOW I BUILD */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.approach')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal">{t('about.sections.howIBuild')}</h2>
          </motion.div>

          <div className="space-y-4">
            {APPROACH_KEYS.map((key, index) => {
              const Icon = APPROACH_ICONS[index];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-light-beige/40 rounded-2xl p-6 lg:p-8 hover:bg-light-beige hover:shadow-card transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Icon className="w-6 h-6 text-muted-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-charcoal mb-2">
                          {t(`about.approach.${key}.title`)}
                        </h3>
                        <p className="text-charcoal/70 leading-relaxed">{t(`about.approach.${key}.body`)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 2) EDUCATION */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.education')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-muted-sage" />
              {t('about.sections.learningTitle')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-beige/30 rounded-2xl p-6"
              >
                <h3 className="font-heading text-lg text-charcoal mb-1">{edu.degree}</h3>
                <p className="text-muted-sage font-medium mb-3">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-soft-gray">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-muted-sage font-medium">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10"
          >
            <h3 className="font-heading text-lg text-charcoal mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-muted-sage" />
              {t('about.sections.certifications')}
            </h3>

            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <a
                  key={cert}
                  href={certificationLinks[cert]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-warm-white rounded-xl text-sm text-charcoal/70 border border-light-beige hover:border-muted-sage/40 hover:bg-muted-sage/5 transition-smooth"
                >
                  {cert}
                  <ExternalLink className="w-3.5 h-3.5 text-soft-gray" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3) PROJECTS */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.projects')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <Layers className="w-7 h-7 text-muted-sage" />
              {t('about.sections.signatureWork')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const localizedProject = localizeProject(project, lang);
              return (
              <motion.div
                key={localizedProject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="bg-warm-white rounded-2xl p-6 lg:p-7 border border-light-beige/70 hover:border-muted-sage/25 transition-all duration-500 h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-2">
                        {localizedProject.category} · {localizedProject.year}
                      </p>
                      <h3 className="font-heading text-xl text-charcoal mb-1">{localizedProject.title}</h3>
                      <p className="text-soft-gray text-sm leading-relaxed">{localizedProject.subtitle}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      {localizedProject.signature && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-charcoal text-warm-white tracking-wide">
                          {t('projects.signature')}
                        </span>
                      )}
                      {localizedProject.github && (
                        <a
                          href={localizedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-muted-sage hover:text-charcoal transition-smooth"
                        >
                          GitHub <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-charcoal/70 leading-relaxed mb-4 text-sm">{localizedProject.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {localizedProject.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-light-beige/40 rounded-full text-xs font-mono text-charcoal/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {localizedProject.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-light-beige/40 rounded-full text-xs font-mono text-soft-gray">
                        +{localizedProject.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4) WORK EXPERIENCE TIMELINE */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.experience')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-muted-sage" />
              {t('about.sections.workHistory')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-light-beige"
              >
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-muted-sage" />

                <div className="bg-light-beige/30 rounded-2xl p-6">
                  <h3 className="font-heading text-lg text-charcoal">{job.role}</h3>
                  <p className="text-muted-sage font-medium mb-3">{job.company}</p>

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-soft-gray">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <span className="font-mono text-soft-gray uppercase text-xs tracking-wider">
                        {t('about.sections.challenge')}
                      </span>
                      <ul className="space-y-1">
                        {job.challenges.slice(0, 2).map((c, i) => (
                          <li key={i} className="text-charcoal/70 text-sm">
                            • {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-soft-gray uppercase text-xs tracking-wider">
                        {t('about.sections.action')}
                      </span>
                      <ul className="space-y-1">
                        {job.actions.slice(0, 2).map((a, i) => (
                          <li key={i} className="text-charcoal/70 text-sm">
                            • {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-muted-sage uppercase text-xs tracking-wider">
                        {t('about.sections.outcome')}
                      </span>
                      <ul className="space-y-1">
                        {job.outcomes.slice(0, 2).map((o, i) => (
                          <li key={i} className="text-charcoal/80 font-medium text-sm">
                            • {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5) SKILLS */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.capabilities')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal">{t('about.sections.skillsTitle')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="bg-light-beige/40 rounded-2xl p-6">
                  <h3 className="font-heading text-lg text-charcoal mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-muted-sage" />
                    {t(`about.skillsCategories.${SKILL_CAT_KEY[category]}`)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-warm-white rounded-lg text-sm text-charcoal/70 hover:bg-muted-sage/10 hover:text-charcoal transition-smooth cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6) WORKSHOPS */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.facilitation')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <PenLine className="w-7 h-7 text-muted-sage" />
              {t('about.sections.workshops')}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {workshops.map((ws, index) => (
              <motion.div
                key={ws.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-light-beige/40 rounded-2xl p-6 lg:p-8 hover:bg-light-beige transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <PenLine className="w-5 h-5 text-muted-sage" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-charcoal">{ws.title}</h3>
                      <p className="text-sm text-muted-sage font-medium">{ws.role}</p>
                      <p className="text-sm text-soft-gray flex items-center gap-2 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {ws.client} · {ws.institution} · {ws.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed mb-4 text-sm">{ws.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ws.methodology.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 bg-warm-white rounded-lg text-xs font-mono text-charcoal/60"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 pt-4 border-t border-light-beige">
                    <Award className="w-4 h-4 text-muted-sage flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">{ws.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7) PUBLICATION */}
        <section id="publications" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.publications')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-muted-sage" />
              {t('about.sections.writtenWork')}
            </h2>
          </motion.div>

          {publications.map((pub) => {
            const localizedPub = localizePublication(pub, lang);
            return (
            <motion.div
              key={localizedPub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-warm-white rounded-3xl p-6 lg:p-10 shadow-card border border-light-beige mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                  <div className="w-28 flex-shrink-0 rounded-2xl overflow-hidden border border-light-beige shadow-xs bg-charcoal/5 min-h-[160px] flex items-center justify-center">
                    {localizedPub.coverImage ? (
                      <img
                        src={localizedPub.coverImage}
                        alt=""
                        className="w-full h-full min-h-[160px] object-cover"
                        width={112}
                        height={160}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="w-full h-full min-h-[160px] flex items-center justify-center"
                        style={{ backgroundColor: pub.coverColor + '28' }}
                      >
                        <BookOpen className="w-10 h-10 text-muted-sage" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-2">
                      {localizedPub.type} · {localizedPub.year} · {localizedPub.publisher}
                    </p>
                    <h3 className="font-heading text-3xl text-charcoal mb-3">{localizedPub.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-6 max-w-xl text-sm">
                      {localizedPub.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {localizedPub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-light-beige rounded-lg text-xs font-mono text-charcoal/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono text-soft-gray uppercase tracking-wider mr-1">
                        {t('about.sections.availableOn')}
                      </span>
                      <BuyButton
                        href={localizedPub.links.googlePlay}
                        label={t('about.buy.googlePlay')}
                        icon={<BookOpen className="w-3.5 h-3.5 text-muted-sage" />}
                      />
                      <BuyButton
                        href={localizedPub.links.amazon}
                        label={t('about.buy.amazon')}
                        icon={<ShoppingCart className="w-3.5 h-3.5 text-soft-gray" />}
                      />
                      <BuyButton
                        href={localizedPub.links.flipkart}
                        label={t('about.buy.flipkart')}
                        icon={<ShoppingCart className="w-3.5 h-3.5 text-soft-gray" />}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
            );
          })}
        </section>

        {/* 8) SKETCHES */}
        <section id="creative" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">
              {t('about.sections.sketches')}
            </span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <ImageIcon className="w-7 h-7 text-muted-sage" />
              {t('about.creative.title')}
            </h2>
            <p className="text-soft-gray mt-3 max-w-xl leading-relaxed">{t('about.creative.description')}</p>
          </motion.div>

          <div>
            {sketchGallery.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sketchGallery.map((piece, i) => (
                  <motion.div
                    key={piece.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="group"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-light-beige/60 hover:shadow-card transition-all duration-500">
                      <img
                        src={piece.src}
                        alt={piece.subject}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="mt-2 px-1 text-sm text-charcoal/70">{piece.subject}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-2xl bg-light-beige/40 border-2 border-dashed border-light-beige flex flex-col items-center justify-center gap-2"
                  >
                    <ImageIcon className="w-5 h-5 text-soft-gray/30" />
                    <p className="text-xs text-soft-gray/40 font-mono">art_{String(i + 1).padStart(2, '0')}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

