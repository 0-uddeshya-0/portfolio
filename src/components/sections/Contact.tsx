import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileDown, ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '../ui-custom/SectionWrapper';
import { LegoAvatar } from '../ui-custom/LegoAvatar';
import { personalInfo } from '../../data/portfolio';

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-mono text-muted-sage uppercase tracking-wider mb-4 block">
                Get in Touch
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-6">
                Let's build something together
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8 max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-4 bg-light-beige/50 rounded-xl hover:bg-muted-sage/10 transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-soft-gray">Email</p>
                  <p className="text-charcoal font-medium">{personalInfo.email}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-soft-gray group-hover:text-muted-sage transition-smooth" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-light-beige/50 rounded-xl hover:bg-muted-sage/10 transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-soft-gray">LinkedIn</p>
                  <p className="text-charcoal font-medium">linkedin.com/in/uddeshya-singh1304</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-soft-gray group-hover:text-muted-sage transition-smooth" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-light-beige/50 rounded-xl hover:bg-muted-sage/10 transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center shadow-xs group-hover:bg-muted-sage group-hover:text-warm-white transition-smooth">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-soft-gray">GitHub</p>
                  <p className="text-charcoal font-medium">github.com/0-uddeshya-0</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-soft-gray group-hover:text-muted-sage transition-smooth" />
              </a>

              {/* Resume Download */}
              <a
                href="/Resume.pdf"
                download
                className="group flex items-center gap-4 p-4 bg-charcoal rounded-xl hover:bg-charcoal/90 transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-charcoal/50 flex items-center justify-center text-warm-white">
                  <FileDown className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-warm-white/70">Download</p>
                  <p className="text-warm-white font-medium">Resume (PDF)</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-warm-white/70 group-hover:text-warm-white transition-smooth" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative text-center">
              <LegoAvatar variant="attention" size="lg" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-sm text-soft-gray font-mono"
              >
                Looking forward to connecting!
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-light-beige"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-soft-gray">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-soft-gray">
              Built with intention. Designed with care.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
