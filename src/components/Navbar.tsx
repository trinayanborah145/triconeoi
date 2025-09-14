import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonial', id: 'testimonial' }
  ];

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className={`flex items-center space-x-12 px-8 py-3 rounded-full ${
            isScrolled ? 'bg-background/80 backdrop-blur-md shadow-[0_0_15px_rgba(74,222,128,0.3)] border-2 border-primary/40' : 'bg-background/50 backdrop-blur-sm border-2 border-primary/40 shadow-[0_0_15px_rgba(74,222,128,0.3)]'
          }`}>
          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium text-base cursor-pointer"
                activeClass="text-primary"
                spy={true}
                offset={-80}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Book a Call Button */}
          <button
            onClick={scrollToCalendly}
            className="bg-primary text-black px-5 py-2.5 rounded-full font-medium text-base hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
          >
            Book a Call
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;