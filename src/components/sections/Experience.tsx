import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { SectionWrapper } from '../ui-custom/SectionWrapper';
import { experience, education } from '../../data/portfolio';

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-warm-white">
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
            Background
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-charcoal max-w-2xl">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="font-heading text-lg text-charcoal mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-muted-sage" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.company}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-light-beige"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-muted-sage" />

                  <div className="bg-light-beige/30 rounded-xl p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className="font-heading text-lg text-charcoal">{job.role}</h4>
                      <p className="text-muted-sage font-medium">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-soft-gray">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {job.period}
                        </span>
                      </div>
                    </div>

                    {/* Challenge → Action → Outcome */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-mono text-soft-gray uppercase tracking-wider">Challenge</span>
                        <ul className="mt-1 space-y-1">
                          {job.challenges.slice(0, 2).map((c, i) => (
                            <li key={i} className="text-sm text-charcoal/70">• {c}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-soft-gray uppercase tracking-wider">Action</span>
                        <ul className="mt-1 space-y-1">
                          {job.actions.slice(0, 2).map((a, i) => (
                            <li key={i} className="text-sm text-charcoal/70">• {a}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">Outcome</span>
                        <ul className="mt-1 space-y-1">
                          {job.outcomes.slice(0, 2).map((o, i) => (
                            <li key={i} className="text-sm text-charcoal/80 font-medium">• {o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-heading text-lg text-charcoal mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-muted-sage" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-light-beige/30 rounded-xl p-6"
                >
                  <h4 className="font-heading text-lg text-charcoal mb-1">{edu.degree}</h4>
                  <p className="text-muted-sage font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-soft-gray">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="text-muted-sage">{edu.grade}</span>
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
              <h4 className="font-heading text-sm text-soft-gray uppercase tracking-wider mb-4">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Applied Design Thinking: AI Use Cases",
                  "SQL",
                  "Project Management",
                  "Digital Marketing"
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-warm-white rounded-lg text-xs text-charcoal/70 border border-light-beige"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
