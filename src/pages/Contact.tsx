import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileDown, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Contact() {
  return (
    <div className="pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl text-charcoal mb-6">
            Let's work together
          </h1>
          <p className="text-soft-gray text-lg max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-5 p-6 bg-light-beige/50 rounded-2xl hover:bg-light-beige hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-soft-gray mb-1">Email</p>
                <p className="text-charcoal font-medium text-lg">{personalInfo.email}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-soft-gray group-hover:text-muted-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-light-beige/50 rounded-2xl hover:bg-light-beige hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-soft-gray mb-1">LinkedIn</p>
                <p className="text-charcoal font-medium">linkedin.com/in/uddeshya-singh1304</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-soft-gray group-hover:text-muted-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-light-beige/50 rounded-2xl hover:bg-light-beige hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-soft-gray mb-1">GitHub</p>
                <p className="text-charcoal font-medium">github.com/0-uddeshya-0</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-soft-gray group-hover:text-muted-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Resume Download */}
            <a
              href="/Resume.pdf"
              download
              className="group flex items-center gap-5 p-6 bg-charcoal rounded-2xl hover:bg-charcoal/90 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-charcoal/50 flex items-center justify-center text-warm-white">
                <FileDown className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-warm-white/70 mb-1">Download</p>
                <p className="text-warm-white font-medium text-lg">Resume (PDF)</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-warm-white/70 group-hover:text-warm-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-light-beige/50 rounded-3xl p-8 lg:p-10"
          >
            <h3 className="font-heading text-xl text-charcoal mb-6">
              Quick Info
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-sage" />
                </div>
                <div>
                  <p className="text-sm text-soft-gray mb-1">Location</p>
                  <p className="text-charcoal font-medium">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center">
                  <Phone className="w-5 h-5 text-muted-sage" />
                </div>
                <div>
                  <p className="text-sm text-soft-gray mb-1">Phone</p>
                  <p className="text-charcoal font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-light-beige">
                <p className="text-sm text-soft-gray mb-4">Availability</p>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-charcoal font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto mt-24 pt-8 border-t border-light-beige"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-soft-gray">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-soft-gray">
            Built with intention. Designed with care.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
