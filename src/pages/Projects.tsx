import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, GitBranch } from 'lucide-react';
import { projects } from '../data/portfolio';

// Architecture Diagram Component
function ArchitectureDiagram({ techStack }: { techStack: string[] }) {
  const layers = {
    frontend: techStack.filter(t => ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'React Native'].includes(t)),
    backend: techStack.filter(t => ['FastAPI', 'Python', 'Node.js', 'Supabase'].includes(t)),
    ai: techStack.filter(t => ['GPTAll', 'OpenAI/Claude', 'LangChain'].includes(t)),
    data: techStack.filter(t => ['Firebase', 'Docker', 'JSON/XML Processing'].includes(t))
  };

  return (
    <div className="bg-charcoal/5 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-muted-sage" />
        <span className="font-heading text-sm text-charcoal">Architecture Overview</span>
      </div>
      <div className="space-y-3">
        {layers.ai.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="w-24 text-xs font-mono text-soft-gray">AI/ML</div>
            <div className="flex-1 flex gap-2">
              {layers.ai.map(tech => (
                <span key={tech} className="px-2 py-1 bg-muted-sage/20 rounded text-xs text-charcoal">{tech}</span>
              ))}
            </div>
          </div>
        )}
        {layers.backend.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="w-24 text-xs font-mono text-soft-gray">Backend</div>
            <div className="flex-1 flex gap-2">
              {layers.backend.map(tech => (
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
