import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Lightbulb, Network, Scale, Award } from 'lucide-react';
import { experience, education, skills, howIBuild } from '../data/portfolio';

const approachItems = [
  {
    icon: Lightbulb,
    title: 'Problem-First Approach',
    description: howIBuild.approach
  },
  {
    icon: Network,
    title: 'Systems Thinking',
    description: howIBuild.systemThinking
  },
  {
    icon: Scale,
    title: 'Informed Tradeoffs',
    description: howIBuild.tradeoffs
  }
];

export function About() {
  return (
    <div className="pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            About Me
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">
            The story so far
          </h1>
          <p className="text-soft-gray text-lg max-w-2xl">
            I'm a Data & AI Systems Builder passionate about transforming complex data 
            into real-world decision-making tools. Currently pursuing my Master's in 
            AI & Data Analytics at Hochschule Neu-Ulm.
          </p>
        </motion.div>

        {/* How I Build Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal mb-2">
              How I Build
            </h2>
            <p className="text-soft-gray">My approach to solving complex problems</p>
          </motion.div>

          <div className="space-y-4">
            {approachItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-light-beige/50 rounded-2xl p-6 lg:p-8 hover:bg-light-beige hover:shadow-card transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-muted-sage/20 to-muted-sage/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-muted-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-charcoal mb-3">
                          {item.title}
                        </h3>
                        <p className="text-charcoal/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Work Experience */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="font-heading text-2xl text-charcoal flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-muted-sage" />
                Work Experience
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
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-muted-sage" />
                  
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

                    {/* Challenge → Action → Outcome */}
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-mono text-soft-gray uppercase text-xs">Challenge</span>
                        <p className="text-charcoal/70 mt-1">{job.challenges[0]}</p>
                      </div>
                      <div>
                        <span className="font-mono text-soft-gray uppercase text-xs">Action</span>
                        <p className="text-charcoal/70 mt-1">{job.actions[0]}</p>
                      </div>
                      <div>
                        <span className="font-mono text-muted-sage uppercase text-xs">Outcome</span>
                        <p className="text-charcoal/80 font-medium mt-1">{job.outcomes[0]}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="font-heading text-2xl text-charcoal flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-muted-sage" />
                Education
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

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <h3 className="font-heading text-lg text-charcoal mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-muted-sage" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Applied Design Thinking: AI Use Cases',
                  'SQL',
                  'Project Management',
                  'Digital Marketing'
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-warm-white rounded-xl text-sm text-charcoal/70 border border-light-beige"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>
        </div>

        {/* Skills Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal mb-2">
              Skills & Technologies
            </h2>
            <p className="text-soft-gray">Tools and technologies I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="bg-light-beige/50 rounded-2xl p-6">
                  <h3 className="font-heading text-lg text-charcoal mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-muted-sage" />
                    {category}
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
      </div>
    </div>
  );
}
