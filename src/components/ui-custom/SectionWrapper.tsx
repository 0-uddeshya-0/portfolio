import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

export function SectionWrapper({ children, id, className = '', fullHeight = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`
        w-full
        ${fullHeight ? 'min-h-screen' : 'py-20 lg:py-32'}
        section-padding
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
}
