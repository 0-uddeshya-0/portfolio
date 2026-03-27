import { motion, type Transition } from 'framer-motion';

interface LegoAvatarProps {
  variant?: 'wave' | 'point' | 'neutral' | 'attention';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32'
};

const transitions: Record<string, Transition> = {
  wave: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  point: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  neutral: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  attention: { duration: 2, repeat: Infinity, ease: "easeInOut" }
};

export function LegoAvatar({ variant = 'neutral', size = 'md', className = '' }: LegoAvatarProps) {
  const getAnimation = () => {
    switch (variant) {
      case 'wave':
        return { rotate: [-3, 3, -3] };
      case 'point':
        return { x: [0, 5, 0] };
      case 'neutral':
        return { y: [0, -4, 0] };
      case 'attention':
        return { scale: [1, 1.05, 1] };
      default:
        return { y: [0, -4, 0] };
    }
  };

  return (
    <motion.div
      className={`relative ${sizeMap[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        animate={getAnimation()}
        transition={transitions[variant]}
        className="w-full h-full"
      >
        <img
          src="/lego-avatar.png"
          alt="Lego avatar"
          className="w-full h-full object-contain drop-shadow-soft"
        />
      </motion.div>
    </motion.div>
  );
}
