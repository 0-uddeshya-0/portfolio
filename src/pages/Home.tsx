import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, valueProposition } from '../data/portfolio';

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section - with space for 3D character */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-20"
            >
              {/* Status Badge */}
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

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl text-charcoal mb-6 tracking-tight"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Headline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl text-charcoal/80 font-light leading-relaxed mb-6"
              >
                {personalInfo.headline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base text-soft-gray leading-relaxed mb-10 max-w-lg"
              >
                Master's student in AI & Data Analytics at Hochschule Neu-Ulm. 
                Building intelligent systems that bridge the gap between complex data and real-world decisions.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-12"
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

              {/* Quick Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted-sage/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-muted-sage" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading text-charcoal">4+</p>
                    <p className="text-xs text-soft-gray">AI Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted-blue/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-muted-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading text-charcoal">2+</p>
                    <p className="text-xs text-soft-gray">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted-sage/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-muted-sage" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading text-charcoal">1.8</p>
                    <p className="text-xs text-soft-gray">Current GPA</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - empty space for 3D character */}
            <div className="hidden lg:block h-[600px]" />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
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
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-warm-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 h-full border border-transparent hover:border-muted-sage/20">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muted-sage/20 to-muted-sage/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {index === 0 && <Sparkles className="w-7 h-7 text-muted-sage" />}
                    {index === 1 && <Database className="w-7 h-7 text-muted-sage" />}
                    {index === 2 && <Code2 className="w-7 h-7 text-muted-sage" />}
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-soft-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
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
              <h2 className="font-heading text-3xl lg:text-5xl text-charcoal">
                Recent Projects
              </h2>
            </motion.div>
            <Link to="/projects">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-muted-sage hover:text-charcoal transition-smooth group"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'KlarBill',
                subtitle: 'AI-Powered Utility Bill Assistant',
                category: 'AI System',
                color: 'from-muted-sage/20 to-muted-sage/5'
              },
              {
                title: 'ZappTrax',
                subtitle: 'AI Career Guidance Platform',
                category: 'Full-Stack AI',
                color: 'from-muted-blue/20 to-muted-blue/5'
              }
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
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <span className="font-heading text-2xl text-charcoal">{project.title[0]}</span>
                    </div>
                    <span className="text-xs font-mono text-muted-sage uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-2xl text-charcoal mb-2 group-hover:text-muted-sage transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-soft-gray">{project.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-5xl text-warm-white mb-6">
              Let's build something amazing together
            </h2>
            <p className="text-warm-white/70 text-lg mb-10 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
