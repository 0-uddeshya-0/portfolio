import { motion } from 'framer-motion';
import { Brain, Database, TrendingUp } from 'lucide-react';
import { SectionWrapper } from '../ui-custom/SectionWrapper';
import { valueProposition } from '../../data/portfolio';

const icons = [Brain, Database, TrendingUp];

export function ValueProposition() {
  return (
    <SectionWrapper id="value" className="bg-light-beige/30">
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
            What I Do
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-charcoal max-w-2xl">
            Turning noisy data into something you can act on
          </h2>
        </motion.div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {valueProposition.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-warm-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth h-full border border-transparent hover:border-muted-sage/20">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-muted-sage/10 flex items-center justify-center mb-6 group-hover:bg-muted-sage/20 transition-smooth">
                    <Icon className="w-6 h-6 text-muted-sage" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-soft-gray leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
