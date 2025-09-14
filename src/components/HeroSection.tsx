import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';

interface HeroSectionProps {
  animationComplete: boolean;
}

// Animation keyframes for text reveal
const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

const HeroSection = ({ animationComplete }: HeroSectionProps) => {
  const [showContent, setShowContent] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  // Custom scroll function for Calendly widget
  const scrollToCalendly = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('calendly-widget');
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (animationComplete) {
      setShowContent(true);
      // Add animation classes after a small delay to ensure the element is rendered
      const timer = setTimeout(() => {
        headingRef.current?.classList.add('animate-text-reveal');
        subtitleRef.current?.classList.add('animate-fade-in');
        ctaRef.current?.classList.add('animate-slide-up');
        logosRef.current?.classList.add('animate-slide-up');
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [animationComplete]);

  if (!showContent) {
    return <div className="min-h-screen"></div>; // Empty div to maintain layout
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-dark-surface to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-l from-primary/10 to-transparent blur-2xl float-animation"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <style>{`
          @keyframes textReveal {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-text-reveal {
            animation: textReveal 0.8s ease-out forwards;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out 0.3s both;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out 0.5s both;
          }
          .highlight-text {
            position: relative;
            display: inline-block;
            color: hsl(120, 100%, 50%); /* Neon green from design system */
          }
          .highlight-text::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 1px;
            background: currentColor;
            animation: drawLine 0.8s ease-out 0.8s forwards;
          }
          @keyframes drawLine {
            to { width: 100%; }
          }
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            display: inline-block;
            animation: scroll-left 30s linear infinite;
          }
        `}</style>

        {/* Main Headline */}
        <h1 
          ref={headingRef}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 opacity-0 px-4 w-full max-w-[90vw] mx-auto"
        >
          <div className="flex flex-col">
            <div className="inline-flex flex-wrap justify-center gap-x-2">
              <span className="whitespace-nowrap" style={{ animationDelay: '0.1s' }}>We build</span>
              <span className="highlight-text whitespace-nowrap" style={{ animationDelay: '0.2s' }}>websites</span>
              <span className="whitespace-nowrap" style={{ animationDelay: '0.3s' }}>that turn</span>
            </div>
            <div className="inline-flex flex-wrap justify-center gap-x-2">
              <span className="whitespace-nowrap" style={{ animationDelay: '0.4s' }}>visitors into</span>
              <span className="highlight-text whitespace-nowrap" style={{ animationDelay: '0.5s' }}>paying customers</span>
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-10 px-4 opacity-0 text-balance"
        >
          High-converting websites designed with strategic copy and seamless development to attract ready-to-buy customers—helping brands worldwide turn visitors into loyal clients and drive sustainable business growth.
        </p>

        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4 opacity-0"
        >
          <button 
            onClick={scrollToCalendly}
            className="btn-neon group inline-flex items-center"
          >
            Let's Talk
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center space-x-2">
            <span>View Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Client Logos */}
        <div ref={logosRef} className="mt-12 sm:mt-16 opacity-0 px-2 w-full">
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll-left whitespace-nowrap" style={{
              animationDuration: '30s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }}>
              <div className="flex items-center space-x-6 sm:space-x-12 text-white text-sm sm:text-lg font-medium flex-shrink-0">
                <span>Room Editors</span>
                <span>Deeu Production</span>
                <span>Veritas Media</span>
                <span>Skyline Estates</span>
                <span>Lovelynx</span>
                <span>Nexoothermic Media</span>
                <span>Pinevilla</span>
                <span>Jhoelokia</span>
              </div>
              <div className="flex items-center space-x-6 sm:space-x-12 text-white text-sm sm:text-lg font-medium ml-6 sm:ml-12">
                <span>Room Editors</span>
                <span>Deeu Production</span>
                <span>Veritas Media</span>
                <span>Skyline Estates</span>
                <span>Lovelynx</span>
                <span>Nexoothermic Media</span>
                <span>Pinevilla</span>
                <span>Jhoelokia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Logo Element */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-primary/30 progress-ring"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full dots-pattern pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;