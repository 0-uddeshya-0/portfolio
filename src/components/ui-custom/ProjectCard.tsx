import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  category: string;
  year: string;
  status?: string;
  signature?: boolean;
  onClick?: () => void;
  index?: number;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  techStack,
  category,
  year,
  status,
  signature,
  onClick,
  index = 0
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={onClick ? { y: -4 } : undefined}
      onClick={onClick}
      className={`group ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="bg-light-beige/50 rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-hover transition-smooth border border-transparent hover:border-muted-sage/20">
        {/* Header */}
        <div className="mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-xs font-mono text-muted-sage uppercase tracking-wider">
                {category}
              </span>
              <span className="text-xs text-soft-gray">{year}</span>
              {signature && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-charcoal text-warm-white tracking-wide">
                  Signature
                </span>
              )}
              {status && (
                <span className="text-xs text-muted-blue font-medium">
                  {status}
                </span>
              )}
            </div>
            <h3 className="font-heading text-xl lg:text-2xl text-charcoal group-hover:text-muted-sage transition-colors">
              {title}
            </h3>
            <p className="text-sm text-soft-gray mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-charcoal/80 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-warm-white rounded-full text-xs font-mono text-charcoal/70"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="px-3 py-1 bg-warm-white rounded-full text-xs font-mono text-soft-gray">
              +{techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
