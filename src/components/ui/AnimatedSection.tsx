import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8,
          delay: delay * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
