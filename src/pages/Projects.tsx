import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Cpu,
  GitBranch,
  Github,
  PenLine,
  MapPin,
  Award,
} from 'lucide-react';
import { localizeProject, projects, workshops } from '../data/portfolio';
import { useI18n } from '../i18n/context';

function ArchitectureDiagram({ techStack }: { techStack: string[] }) {
  const { t } = useI18n();
  const layers = {
    ai: techStack.filter((t) =>
      ['GPTAll', 'OpenAI/Claude', 'LangChain', 'GPT Research'].includes(t)
    ),
    backend: techStack.filter((t) =>
      ['FastAPI', 'Python', 'Node.js', 'Supabase'].includes(t)
    ),
    frontend: techStack.filter((t) =>
      ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'React Native'].includes(t)
    ),
    methodology: techStack.filter((t) =>
      ['DMADVO', 'Lean Six Sigma', 'Risk-Based Compliance', 'Stakeholder Management', 'Design Thinking', 'SAP Signavio', 'Process Mining'].includes(t)
    ),
    infra: techStack.filter((t) => ['Firebase', 'Docker'].includes(t)),
  };

  const layerConfig: Record<string, { color: string }> = {
    ai: { color: 'bg-muted-sage/20 text-charcoal' },
    backend: { color: 'bg-muted-blue/20 text-charcoal' },
    frontend: { color: 'bg-light-beige text-charcoal' },
    methodology: { color: 'bg-charcoal/10 text-charcoal' },
    infra: { color: 'bg-charcoal/10 text-charcoal' },
  };

  const visible = Object.entries(layers).filter(([, items]) => items.length > 0);
  if (visible.length === 0) return null;

  return (
    <div className="bg-light-beige/40 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-muted-sage" />
        <span className="font-mono text-xs text-charcoal/50 uppercase tracking-wider">
          {t('projects.stackOverview')}
        </span>
      </div>
      <div className="space-y-2.5">
        {visible.map(([key, items]) => (
          <div key={key} className="flex items-center gap-3">
            <div className="w-20 text-xs font-mono text-soft-gray flex-shrink-0">
              {t(`projects.layers.${key}`)}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((tech) => (
                <span key={tech} className={`px-2 py-1 rounded-md text-xs font-mono ${layerConfig[key]?.color ?? 'bg-light-beige'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const { t, lang } = useI18n();
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const selectedProject = selected ? localizeProject(selected, lang) : null;

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            {t('projects.kicker')}
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">{t('projects.title')}</h1>
          <p className="text-soft-gray text-lg max-w-2xl leading-relaxed">{t('projects.intro')}</p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-20 sm:mb-24">
          {projects.map((project, index) => {
            const localized = localizeProject(project, lang);
            return (
            <motion.div
              key={localized.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer"
            >
              <div className="bg-light-beige/50 rounded-3xl p-5 sm:p-7 lg:p-8 hover:bg-light-beige hover:shadow-hover transition-all duration-500 h-full border border-transparent hover:border-muted-sage/20">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">{localized.category}</span>
                      <span className="text-xs text-soft-gray">{localized.year}</span>
                      {localized.signature && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-charcoal text-warm-white">
                          {t('projects.signature')}
                        </span>
                      )}
                      {localized.status && (
                        <span className="text-xs text-muted-blue font-medium px-2 py-0.5 bg-muted-blue/10 rounded-full">{localized.status}</span>
                      )}
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-charcoal group-hover:text-muted-sage transition-colors">
                      {localized.title}
                    </h3>
                    <p className="text-soft-gray mt-1 text-sm">{localized.subtitle}</p>
                    {localized.context && (
                      <p className="text-xs font-mono text-soft-gray/60 mt-1">{localized.context}</p>
                    )}
                  </div>
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth flex-shrink-0 ml-4"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                <p className="text-charcoal/70 leading-relaxed mb-6 text-sm line-clamp-2">{localized.description}</p>

                <div className="flex flex-wrap gap-2">
                  {localized.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-warm-white rounded-lg text-xs font-mono text-charcoal/70">{tech}</span>
                  ))}
                  {localized.techStack.length > 4 && (
                    <span className="px-3 py-1.5 bg-warm-white rounded-lg text-xs font-mono text-soft-gray">+{localized.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Workshops */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
              {t('projects.facilitation')}
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-charcoal flex items-center gap-3">
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
                      <p className="text-sm text-soft-gray flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {ws.client} · {ws.institution} · {ws.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed mb-4 text-sm">{ws.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ws.methodology.map((m) => (
                      <span key={m} className="px-3 py-1 bg-warm-white rounded-lg text-xs font-mono text-charcoal/60">{m}</span>
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
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-warm-white rounded-t-3xl sm:rounded-3xl max-w-3xl w-full max-h-[calc(100dvh-4.5rem)] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-warm-white/96 backdrop-blur-md border-b border-light-beige p-4 sm:p-6 lg:p-8 flex items-start justify-between z-10">
                <div className="flex-1 pr-3 sm:pr-4">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">{selectedProject.category}</span>
                    <span className="text-xs text-soft-gray">{selectedProject.year}</span>
                    {selectedProject.signature && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-charcoal text-warm-white">
                        {t('projects.signature')}
                      </span>
                    )}
                    {selectedProject.status && (
                      <span className="text-xs text-muted-blue font-medium px-2 py-0.5 bg-muted-blue/10 rounded-full">{selectedProject.status}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal">{selectedProject.title}</h3>
                  <p className="text-soft-gray mt-0.5">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-11 h-11 rounded-xl bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth flex-shrink-0 ring-1 ring-charcoal/5"
                  aria-label={t('projects.close')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-7">
                {/* Builder's note */}
                {selectedProject.about && (
                  <div className="bg-light-beige/50 rounded-2xl p-5 lg:p-6">
                    <p className="text-xs font-mono text-muted-sage uppercase tracking-wider mb-3">
                      {t('projects.buildersNote')}
                    </p>
                    <p className="text-charcoal/75 leading-relaxed italic text-sm">"{selectedProject.about}"</p>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-muted-sage" />
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">
                      {t('projects.problem')}
                    </h4>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{selectedProject.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-4 h-4 text-muted-sage" />
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">
                      {t('projects.solution')}
                    </h4>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{selectedProject.solution}</p>
                </div>

                <ArchitectureDiagram techStack={selectedProject.techStack} />

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50 mb-3">
                    {t('projects.fullStack')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-light-beige rounded-xl text-sm font-mono text-charcoal/70">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-muted-sage/5 rounded-2xl p-5 lg:p-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50 mb-4">
                    {t('projects.impact')}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-muted-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 lg:p-8 border-t border-light-beige bg-light-beige/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-charcoal text-warm-white rounded-xl text-sm font-medium hover:bg-charcoal/90 transition-smooth"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="w-full sm:flex-1 py-3 bg-light-beige text-charcoal rounded-xl text-sm font-medium hover:bg-muted-sage/20 transition-smooth"
                >
                  {t('projects.close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
