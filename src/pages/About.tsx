import { motion } from 'framer-motion';
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
} from 'lucide-react';
import {
  experience,
  education,
  skills,
  howIBuild,
  publications,
  workshops,
  creativeWork,
} from '../data/portfolio';

const approachItems = [
  { icon: Lightbulb, title: 'Problem-First Approach', description: howIBuild.approach },
  { icon: Network, title: 'Systems Thinking', description: howIBuild.systemThinking },
  { icon: Scale, title: 'Informed Tradeoffs', description: howIBuild.tradeoffs },
];

// Book purchase button
function BuyButton({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
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

// Single poem card
function PoemCard({ poem }: { poem: { title: string; lines: string[] } }) {
  return (
    <div className="bg-warm-white rounded-2xl p-6 lg:p-8 border border-light-beige">
      <p className="text-xs font-mono text-muted-sage uppercase tracking-wider mb-4">{poem.title}</p>
      <div className="space-y-1.5">
        {poem.lines.map((line, i) => (
          <p key={i} className="font-heading text-base text-charcoal/80 leading-relaxed italic">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

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
          <p className="text-soft-gray text-lg max-w-2xl leading-relaxed">
            I'm a Data & AI Systems Builder passionate about transforming complex data into
            real-world decision-making tools. My background spans web development, design thinking,
            writing, and strategic AI work — the thread through all of it is a preference for
            understanding deeply before acting.
          </p>
        </motion.div>

        {/* How I Build */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">Approach</span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal">How I Build</h2>
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
                  <div className="bg-light-beige/40 rounded-2xl p-6 lg:p-8 hover:bg-light-beige hover:shadow-card transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-6 h-6 text-muted-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-charcoal mb-2">{item.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── PUBLICATION ── */}
        <section id="publications" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">Publications</span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-muted-sage" />
              Written Work
            </h2>
          </motion.div>

          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Book info card */}
              <div className="bg-warm-white rounded-3xl p-6 lg:p-10 shadow-card border border-light-beige mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                  {/* Book cover placeholder */}
                  <div
                    className="w-28 flex-shrink-0 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: pub.coverColor + '28', minHeight: '160px' }}
                  >
                    <BookOpen className="w-10 h-10 text-muted-sage" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-2">
                      {pub.type} · {pub.year} · {pub.publisher}
                    </p>
                    <h3 className="font-heading text-3xl text-charcoal mb-3">{pub.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-6 max-w-xl text-sm">
                      {pub.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-light-beige rounded-lg text-xs font-mono text-charcoal/60">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Purchase links */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono text-soft-gray uppercase tracking-wider mr-1">
                        Available on
                      </span>
                      <BuyButton
                        href={pub.links.googlePlay}
                        label="Google Play Books"
                        icon={<BookOpen className="w-3.5 h-3.5 text-muted-sage" />}
                      />
                      <BuyButton
                        href={pub.links.amazon}
                        label="Amazon"
                        icon={<ShoppingCart className="w-3.5 h-3.5 text-soft-gray" />}
                      />
                      <BuyButton
                        href={pub.links.flipkart}
                        label="Flipkart"
                        icon={<ShoppingCart className="w-3.5 h-3.5 text-soft-gray" />}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Poem previews */}
              <div className="mb-4">
                <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-4 pl-1">
                  A glimpse inside
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {pub.poems.map((poem, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <PoemCard poem={poem} />
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs font-mono text-soft-gray/50 mt-4 pl-1">
                  → Replace placeholder poems in <code className="bg-light-beige px-1.5 py-0.5 rounded">portfolio.ts → publications[0].poems</code>
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ── WORKSHOPS ── */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">Facilitation</span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
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
                      <p className="text-sm text-soft-gray flex items-center gap-2 mt-0.5">
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

        {/* ── CREATIVE WORK ── */}
        <section id="creative" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">Creative</span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal flex items-center gap-3">
              <ImageIcon className="w-7 h-7 text-muted-sage" />
              {creativeWork.title}
            </h2>
            <p className="text-soft-gray mt-3 max-w-xl leading-relaxed">{creativeWork.description}</p>
          </motion.div>

          <div className="space-y-12">
            {creativeWork.series.map((series, seriesIndex) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: seriesIndex * 0.1 }}
              >
                {/* Series header */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-4 mb-1">
                    <h3 className="font-heading text-xl text-charcoal">{series.title}</h3>
                    <span className="text-xs font-mono text-soft-gray">{series.medium}</span>
                  </div>
                  <p className="text-sm text-charcoal/60 max-w-xl leading-relaxed">{series.concept}</p>
                </div>

                {/* Gallery grid */}
                {series.pieces.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {series.pieces.map((piece, i) => (
                      <motion.div
                        key={piece.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
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
                  /* Elegant placeholder grid */
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-[3/4] rounded-2xl bg-light-beige/40 border-2 border-dashed border-light-beige flex flex-col items-center justify-center gap-2"
                      >
                        <ImageIcon className="w-5 h-5 text-soft-gray/30" />
                        <p className="text-xs text-soft-gray/40 font-mono">
                          {series.id}_{String(i + 1).padStart(2, '0')}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* How to add images */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-light-beige/30 rounded-2xl p-5 border border-dashed border-light-beige"
            >
              <p className="text-xs font-mono text-soft-gray/70 leading-relaxed">
                → Add image files to <code className="bg-warm-white px-1.5 py-0.5 rounded">public/sketches/</code> then populate each{' '}
                <code className="bg-warm-white px-1.5 py-0.5 rounded">pieces</code> array in{' '}
                <code className="bg-warm-white px-1.5 py-0.5 rounded">portfolio.ts → creativeWork.series</code>
                <br />
                Example: <code className="bg-warm-white px-1.5 py-0.5 rounded">{'{ id: 1, src: \'/sketches/portrait-01.jpg\', subject: \'Study I\' }'}</code>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── EXPERIENCE + EDUCATION ── */}
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
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-muted-sage" />
                  <div className="bg-light-beige/30 rounded-2xl p-6">
                    <h3 className="font-heading text-lg text-charcoal">{job.role}</h3>
                    <p className="text-muted-sage font-medium mb-3">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-soft-gray">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />{job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />{job.period}
                      </span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-mono text-soft-gray uppercase text-xs tracking-wider">Challenge</span>
                        <p className="text-charcoal/70 mt-1">{job.challenges[0]}</p>
                      </div>
                      <div>
                        <span className="font-mono text-soft-gray uppercase text-xs tracking-wider">Action</span>
                        <p className="text-charcoal/70 mt-1">{job.actions[0]}</p>
                      </div>
                      <div>
                        <span className="font-mono text-muted-sage uppercase text-xs tracking-wider">Outcome</span>
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
                      <Calendar className="w-3.5 h-3.5" />{edu.period}
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
                  'Digital Marketing',
                  'Entrepreneurship Foundation',
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-warm-white rounded-xl text-sm text-charcoal/70 border border-light-beige hover:border-muted-sage/30 transition-smooth"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>
        </div>

        {/* ── SKILLS ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-2 block">Capabilities</span>
            <h2 className="font-heading text-2xl lg:text-3xl text-charcoal">Skills & Technologies</h2>
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
