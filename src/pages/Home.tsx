import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  BookOpen,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, valueProposition, publications } from '../data/portfolio';

// Profile photo with graceful fallback to initials if photo not yet added
function ProfilePhoto({ className = '' }: { className?: string }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`bg-charcoal flex items-center justify-center ${className}`}
        aria-label="Profile photo placeholder"
      >
        <User className="w-12 h-12 text-warm-white/40" />
      </div>
    );
  }

  return (
    <img
      src={personalInfo.photo}
      alt={personalInfo.name}
      onError={() => setImgError(true)}
      className={`object-cover object-top ${className}`}
      draggable={false}
    />
  );
}

// Floating profile snapshot replacing the old empty Lego column
function ProfileSnapshot() {
  return (
    <div className="hidden lg:flex flex-col items-end gap-4">
      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="bg-warm-white border border-light-beige rounded-3xl overflow-hidden shadow-card w-80"
      >
        {/* Photo area */}
        <div className="relative h-52 w-full bg-light-beige/60">
          <ProfilePhoto className="w-full h-full" />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />
        </div>

        {/* Info area */}
        <div className="px-6 pb-6 -mt-2">
          <h2 className="font-heading text-xl text-charcoal mb-0.5">Uddeshya Singh</h2>
          <p className="text-sm text-soft-gray mb-5">AI & Data Systems Builder</p>

          <div className="space-y-2.5 mb-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 animate-pulse" />
              <span className="text-sm text-charcoal/70">Open to opportunities</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-3.5 h-3.5 text-soft-gray flex-shrink-0" />
              <span className="text-sm text-charcoal/70">Ulm, Germany</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-3.5 h-3.5 text-soft-gray flex-shrink-0" />
              <span className="text-sm text-charcoal/70">M.Sc. AI & Data Analytics</span>
            </div>
          </div>

          <div className="h-px bg-light-beige mb-5" />

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: '5+', label: 'Projects' },
              { value: '2+', label: 'Yrs Dev' },
              { value: '1', label: 'Book' },
            ].map((stat) => (
              <div key={stat.label} className="bg-light-beige/60 rounded-xl p-3 text-center">
                <p className="font-heading text-lg text-charcoal">{stat.value}</p>
                <p className="text-xs text-soft-gray leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="flex gap-3"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/20 transition-smooth shadow-xs"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-warm-white border border-light-beige rounded-xl text-sm text-charcoal/70 hover:text-charcoal hover:border-charcoal/20 transition-smooth shadow-xs"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </motion.div>

      {/* Skill tags */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.62, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-wrap gap-2 justify-end w-80"
      >
        {['Python', 'LangChain', 'FastAPI', 'NLP', 'Design Thinking', 'Supabase'].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-light-beige/60 rounded-full text-xs font-mono text-charcoal/60"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text content */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted-sage/10 rounded-full text-sm font-mono text-muted-sage border border-muted-sage/20">
                  <span className="w-2 h-2 bg-muted-sage rounded-full animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl text-charcoal mb-6 tracking-tight"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl text-charcoal/80 font-light leading-relaxed mb-6"
              >
                {personalInfo.headline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base text-soft-gray leading-relaxed mb-10 max-w-lg"
              >
                Master's student in AI & Data Analytics at Hochschule Neu-Ulm. Building intelligent
                systems that bridge the gap between complex data and real-world decisions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.03, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-warm-white rounded-2xl font-medium hover:bg-charcoal/90 transition-smooth shadow-soft group"
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-light-beige text-charcoal rounded-2xl font-medium hover:bg-muted-sage/20 transition-smooth"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — profile snapshot card */}
            <ProfileSnapshot />

            {/* Mobile-only photo strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:hidden flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-light-beige/60 flex-shrink-0">
                <ProfilePhoto className="w-full h-full" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-charcoal/70">Open to opportunities</span>
                </div>
                <p className="text-sm text-soft-gray">Ulm, Germany · M.Sc. AI & Data Analytics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-light-beige/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
              What I Do
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl text-charcoal max-w-2xl mx-auto">
              Transforming complexity into clarity
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {valueProposition.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-warm-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 h-full border border-transparent hover:border-muted-sage/20">
                  <div className="w-12 h-12 rounded-xl bg-muted-sage/10 flex items-center justify-center mb-6 group-hover:bg-muted-sage/20 transition-smooth">
                    {index === 0 && <Sparkles className="w-6 h-6 text-muted-sage" />}
                    {index === 1 && <Database className="w-6 h-6 text-muted-sage" />}
                    {index === 2 && <Code2 className="w-6 h-6 text-muted-sage" />}
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-soft-gray leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
                Featured Work
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl text-charcoal">Recent Projects</h2>
            </motion.div>
            <Link to="/projects">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="inline-flex items-center gap-2 text-muted-sage hover:text-charcoal transition-smooth group"
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'KlarBill', subtitle: 'AI-Powered Utility Bill Assistant', category: 'AI System', accent: 'from-muted-sage/20 to-muted-sage/5' },
              { title: 'ZappTrax', subtitle: 'AI Career Guidance Platform', category: 'Full-Stack AI', accent: 'from-muted-blue/20 to-muted-blue/5' },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to="/projects">
                  <div className="group bg-light-beige/50 rounded-3xl p-8 hover:bg-light-beige transition-all duration-500 cursor-pointer h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <span className="font-heading text-xl text-charcoal">{project.title[0]}</span>
                    </div>
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-2xl text-charcoal mb-2 group-hover:text-muted-sage transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-soft-gray text-sm">{project.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication teaser */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-light-beige/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
                Beyond Code
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-4">
                Published Author
              </h2>
              <p className="text-soft-gray leading-relaxed mb-6 max-w-md">
                Writing and building share more than most people admit — both require precision in
                service of feeling.
              </p>
              <Link to="/about#publications">
                <motion.button
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="inline-flex items-center gap-2 text-charcoal hover:text-muted-sage transition-smooth group font-medium text-sm"
                >
                  Read about the book
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {publications.map((pub) => (
                <a
                  key={pub.id}
                  href={pub.links.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-warm-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-transparent hover:border-muted-sage/20"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="w-16 h-22 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: pub.coverColor + '28', minHeight: '88px' }}
                    >
                      <BookOpen className="w-7 h-7 text-muted-sage" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-soft-gray uppercase tracking-wider mb-1">
                        {pub.type} · {pub.year} · {pub.publisher}
                      </p>
                      <h3 className="font-heading text-xl text-charcoal mb-2 group-hover:text-muted-sage transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed line-clamp-2">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-5xl text-warm-white mb-6">
              Let's build something meaningful together
            </h2>
            <p className="text-warm-white/60 text-lg mb-10 max-w-xl mx-auto">
              Open to working student roles, internships, and practical training positions in AI,
              data engineering, and software development.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-warm-white text-charcoal rounded-2xl font-medium hover:bg-light-beige transition-smooth"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
