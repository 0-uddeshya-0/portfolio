import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui-custom/SectionWrapper';
import { SkillTag } from '../ui-custom/SkillTag';
import { skills } from '../../data/portfolio';

export function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <SectionWrapper id="skills" className="bg-light-beige/30">
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
            Capabilities
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-charcoal max-w-2xl">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-warm-white rounded-2xl p-6 shadow-card">
                <h3 className="font-heading text-lg text-charcoal mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-muted-sage" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill}
                      skill={skill}
                      index={skillIndex + categoryIndex * 10}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-warm-white rounded-2xl p-6 shadow-card"
        >
          <h3 className="font-heading text-lg text-charcoal mb-4">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Rapid Technology Adoption", desc: "Quick learner with high adaptability" },
              { title: "System Thinking", desc: "Designing scalable architectures" },
              { title: "Cross-Functional Collaboration", desc: "Effective stakeholder management" },
              { title: "Problem-Solving", desc: "Data-driven approach to challenges" },
              { title: "Self-Directed Learning", desc: "Independent technology implementation" }
            ].map((item) => (
              <div key={item.title} className="p-4 bg-light-beige/50 rounded-xl">
                <h4 className="font-medium text-charcoal text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-soft-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
