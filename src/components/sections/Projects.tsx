import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { SectionWrapper } from '../ui-custom/SectionWrapper';
import { ProjectCard } from '../ui-custom/ProjectCard';
import { LegoAvatar } from '../ui-custom/LegoAvatar';
import { projects } from '../../data/portfolio';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <SectionWrapper id="projects" className="bg-warm-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-charcoal max-w-xl">
              Things I've built and shipped
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <LegoAvatar variant="point" size="sm" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-warm-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-warm-white/95 backdrop-blur-sm border-b border-light-beige p-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-soft-gray">{selectedProject.year}</span>
                    {selectedProject.signature && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-charcoal text-warm-white">
                        Signature
                      </span>
                    )}
                    {selectedProject.status && (
                      <span className="text-xs text-muted-blue font-medium">
                        {selectedProject.status}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal">{selectedProject.title}</h3>
                  <p className="text-soft-gray text-sm">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Problem */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider text-soft-gray mb-3">
                    Problem
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider text-soft-gray mb-3">
                    Solution
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider text-soft-gray mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-light-beige rounded-lg text-sm font-mono text-charcoal/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider text-soft-gray mb-3">
                    Business Impact
                  </h4>
                  <ul className="space-y-2">
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
              <div className="p-6 border-t border-light-beige bg-light-beige/30">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 bg-charcoal text-warm-white rounded-xl font-medium text-sm hover:bg-charcoal/90 transition-smooth"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
