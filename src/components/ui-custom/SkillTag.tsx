import { motion } from 'framer-motion';

interface SkillTagProps {
  skill: string;
  index?: number;
}

export function SkillTag({ skill, index = 0 }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 181, 162, 0.15)' }}
      className="inline-block px-4 py-2 bg-light-beige/70 rounded-lg text-sm text-charcoal/80 cursor-default transition-smooth"
    >
      {skill}
    </motion.span>
  );
}
