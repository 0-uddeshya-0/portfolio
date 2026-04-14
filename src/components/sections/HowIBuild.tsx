import { motion } from 'framer-motion';
import { Lightbulb, Network, Scale } from 'lucide-react';
import { SectionWrapper } from '../ui-custom/SectionWrapper';
import { howIBuild } from '../../data/portfolio';

const principles = [
  {
    icon: Lightbulb,
    title: "Problem-First Approach",
    description: howIBuild.approach
  },
  {
    icon: Network,
    title: "Systems Thinking",
    description: howIBuild.systemThinking
  },
  {
    icon: Scale,
    title: "Informed Tradeoffs",
    description: howIBuild.tradeoffs
  }
];

export function HowIBuild() {
  return (
    <SectionWrapper id="approach" className="bg-light-beige/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            My Approach
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-charcoal max-w-2xl">
            How I build
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="space-y-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-warm-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth border border-transparent hover:border-muted-sage/20">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-muted-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-muted-sage/20 transition-smooth">
                      <Icon className="w-7 h-7 text-muted-sage" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-heading text-xl text-charcoal mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
