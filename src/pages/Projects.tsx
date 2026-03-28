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
import { projects, workshops } from '../data/portfolio';

function ArchitectureDiagram({ techStack }: { techStack: string[] }) {
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

  const layerConfig: Record<string, { label: string; color: string }> = {
    ai: { label: 'AI / ML', color: 'bg-muted-sage/20 text-charcoal' },
    backend: { label: 'Backend', color: 'bg-muted-blue/20 text-charcoal' },
    frontend: { label: 'Frontend', color: 'bg-light-beige text-charcoal' },
    methodology: { label: 'Methodology', color: 'bg-charcoal/8 text-charcoal' },
    infra: { label: 'Infra', color: 'bg-charcoal/8 text-charcoal' },
  };

  const visible = Object.entries(layers).filter(([, items]) => items.length > 0);
  if (visible.length === 0) return null;

  return (
    <div className="bg-light-beige/40 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-muted-sage" />
        <span className="font-mono text-xs text-charcoal/50 uppercase tracking-wider">Stack Overview</span>
      </div>
      <div className="space-y-2.5">
        {visible.map(([key, items]) => (
          <div key={key} className="flex items-center gap-3">
            <div className="w-20 text-xs font-mono text-soft-gray flex-shrink-0">
              {layerConfig[key]?.label ?? key}
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
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">Portfolio</span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">Projects</h1>
          <p className="text-soft-gray text-lg max-w-2xl leading-relaxed">
            AI systems, data pipelines, process optimisations, and strategic work — built to solve real problems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer"
            >
              <div className="bg-light-beige/50 rounded-3xl p-8 hover:bg-light-beige hover:shadow-hover transition-all duration-500 h-full border border-transparent hover:border-muted-sage/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">{project.category}</span>
                      <span className="text-xs text-soft-gray">{project.year}</span>
                      {project.status && (
                        <span className="text-xs text-muted-blue font-medium px-2 py-0.5 bg-muted-blue/10 rounded-full">{project.status}</span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl text-charcoal group-hover:text-muted-sage transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-soft-gray mt-1 text-sm">{project.subtitle}</p>
                    {'context' in project && project.context && (
                      <p className="text-xs font-mono text-soft-gray/60 mt-1">{project.context as string}</p>
                    )}
                  </div>
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth flex-shrink-0 ml-4"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                <p className="text-charcoal/70 leading-relaxed mb-6 text-sm line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-warm-white rounded-lg text-xs font-mono text-charcoal/70">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1.5 bg-warm-white rounded-lg text-xs font-mono text-soft-gray">+{project.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">Facilitation</span>
            <h2 className="font-heading text-3xl lg:text-4xl text-charcoal flex items-center gap-3">
              <PenLine className="w-7 h-7 text-muted-sage" />
              Workshops
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
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-warm-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-warm-white/96 backdrop-blur-md border-b border-light-beige p-6 lg:p-8 flex items-start justify-between z-10">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">{selected.category}</span>
                    <span className="text-xs text-soft-gray">{selected.year}</span>
                    {selected.status && (
                      <span className="text-xs text-muted-blue font-medium px-2 py-0.5 bg-muted-blue/10 rounded-full">{selected.status}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-3xl text-charcoal">{selected.title}</h3>
                  <p className="text-soft-gray mt-0.5">{selected.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-11 h-11 rounded-xl bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 space-y-7">
                {/* Builder's note */}
                {selected.about && (
                  <div className="bg-light-beige/50 rounded-2xl p-5 lg:p-6">
                    <p className="text-xs font-mono text-muted-sage uppercase tracking-wider mb-3">Builder's note</p>
                    <p className="text-charcoal/75 leading-relaxed italic text-sm">"{selected.about}"</p>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-muted-sage" />
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Problem</h4>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{selected.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-4 h-4 text-muted-sage" />
                    <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50">Solution</h4>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{selected.solution}</p>
                </div>

                <ArchitectureDiagram techStack={selected.techStack} />

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50 mb-3">Full Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-light-beige rounded-xl text-sm font-mono text-charcoal/70">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-muted-sage/5 rounded-2xl p-5 lg:p-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal/50 mb-4">Impact</h4>
                  <ul className="space-y-2.5">
                    {selected.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-muted-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 lg:p-8 border-t border-light-beige bg-light-beige/20 flex items-center gap-3">
                {'github' in selected && selected.github && (
                  <a
                    href={selected.github as string}
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
                  className="flex-1 py-3 bg-light-beige text-charcoal rounded-xl text-sm font-medium hover:bg-muted-sage/20 transition-smooth"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
                <span key={tech} className="px-2 py-1 bg-muted-blue/20 rounded text-xs text-charcoal">{tech}</span>
              ))}
            </div>
          </div>
        )}
        {layers.frontend.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="w-24 text-xs font-mono text-soft-gray">Frontend</div>
            <div className="flex-1 flex gap-2">
              {layers.frontend.map(tech => (
                <span key={tech} className="px-2 py-1 bg-light-beige rounded text-xs text-charcoal">{tech}</span>
              ))}
            </div>
          </div>
        )}
        {layers.data.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="w-24 text-xs font-mono text-soft-gray">Data/Infra</div>
            <div className="flex-1 flex gap-2">
              {layers.data.map(tech => (
                <span key={tech} className="px-2 py-1 bg-charcoal/10 rounded text-xs text-charcoal">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">
            Projects
          </h1>
          <p className="text-soft-gray text-lg max-w-2xl">
            A collection of AI systems, data pipelines, and process optimizations 
            that demonstrate real-world impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="bg-light-beige/50 rounded-3xl p-8 hover:bg-light-beige hover:shadow-hover transition-all duration-500 h-full border border-transparent hover:border-muted-sage/20">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-soft-gray">{project.year}</span>
                      {project.status && (
                        <span className="text-xs text-muted-blue font-medium px-2 py-0.5 bg-muted-blue/10 rounded">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl text-charcoal group-hover:text-muted-sage transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-soft-gray mt-1">{project.subtitle}</p>
                  </div>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-charcoal/70 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-warm-white rounded-lg text-xs font-mono text-charcoal/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1.5 bg-warm-white rounded-lg text-xs font-mono text-soft-gray">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-warm-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-warm-white/95 backdrop-blur-md border-b border-light-beige p-6 lg:p-8 flex items-start justify-between z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-soft-gray">{selectedProject.year}</span>
                    {selectedProject.status && (
                      <span className="text-xs text-muted-blue font-medium px-2 py-0.5 bg-muted-blue/10 rounded">
                        {selectedProject.status}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-3xl text-charcoal">{selectedProject.title}</h3>
                  <p className="text-soft-gray mt-1">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-xl bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8 space-y-8">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-5 h-5 text-muted-sage" />
                    <h4 className="font-heading text-sm uppercase tracking-wider text-charcoal">
                      Problem
                    </h4>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch className="w-5 h-5 text-muted-sage" />
                    <h4 className="font-heading text-sm uppercase tracking-wider text-charcoal">
                      Solution
                    </h4>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Architecture Diagram */}
                <ArchitectureDiagram techStack={selectedProject.techStack} />

                {/* Tech Stack */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider text-charcoal mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-light-beige rounded-xl text-sm font-mono text-charcoal/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-muted-sage/5 rounded-2xl p-6">
                  <h4 className="font-heading text-sm uppercase tracking-wider text-charcoal mb-4">
                    Business Impact
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-muted-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 lg:p-8 border-t border-light-beige bg-light-beige/30">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-4 bg-charcoal text-warm-white rounded-xl font-medium hover:bg-charcoal/90 transition-smooth"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
