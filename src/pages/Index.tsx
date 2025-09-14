import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CaseStudySection from '../components/CaseStudySection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import CalendlyWidget from '../components/CalendlyWidget';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

interface IndexProps {
  animationComplete: boolean;
}

const Index: React.FC<IndexProps> = ({ animationComplete }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <AnimatePresence>
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection animationComplete={animationComplete} />
          </motion.div>
          
          <motion.div
            id="case-study"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CaseStudySection />
          </motion.div>
          
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AboutSection />
          </motion.div>
          
          <motion.div
            id="services"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ServicesSection />
          </motion.div>
          
          <motion.div
            id="testimonial"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TestimonialSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CalendlyWidget />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <ContactSection />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
