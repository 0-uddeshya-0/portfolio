import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { LegoAvatar } from '../ui-custom/LegoAvatar';
import { personalInfo } from '../../data/portfolio';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center section-padding pt-20 pb-16">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-warm-white to-light-beige/30 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-light-beige rounded-full text-sm font-mono text-muted-sage">
                <span className="w-2 h-2 bg-muted-sage rounded-full animate-pulse" />
                Open to the right role
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-4 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl text-charcoal/80 font-light leading-relaxed mb-8"
            >
              {personalInfo.headline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base text-soft-gray leading-relaxed mb-10 max-w-lg"
            >
              Master&apos;s in AI &amp; Data Analytics at Hochschule Neu-Ulm. I like code you can still explain after the
              data gets weird. Prototypes are fun; production is the real exam.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-warm-white rounded-xl font-medium text-sm hover:bg-charcoal/90 transition-smooth shadow-soft"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-light-beige text-charcoal rounded-xl font-medium text-sm hover:bg-muted-sage/20 transition-smooth"
              >
                Get in Touch
                <Mail className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-light-beige flex items-center justify-center text-charcoal hover:bg-muted-sage hover:text-warm-white transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <LegoAvatar variant="wave" size="lg" />
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-muted-sage/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-muted-blue/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-charcoal/20 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-charcoal/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
