import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [animationKey, setAnimationKey] = useState(0);
  
  // Reset animation state when element comes into view
  useEffect(() => {
    if (isInView) {
      setAnimationKey(prevKey => prevKey + 1);
    }
  }, [isInView]);

  // Animation variants for each letter
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterAnimation: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20,
      scale: 0.9,
      filter: 'blur(4px)'
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0)',
      transition: {
        type: 'spring' as const,
        damping: 15,
        stiffness: 100,
        mass: 0.5
      },
    },
  };

  // Text to animate
  const text = "TRICONE";

  return (
    <footer className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-dark-surface to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-l from-primary/10 to-transparent blur-2xl"></div>
      
      {/* Animated text */}
      <div className="relative z-10 text-center px-4" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex justify-center"
          key={animationKey}
        >
          {text.split('').map((letter, index) => (
            <motion.span
              key={`${animationKey}-${index}`}
              variants={letterAnimation}
              className="inline-block text-8xl md:text-9xl font-black text-white"
              style={{
                transition: 'all 0.5s ease-out',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
        
      </div>
    
    </footer>
  );
};

export default Footer;