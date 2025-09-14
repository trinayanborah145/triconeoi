import React, { useEffect } from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const CalendlyWidget = () => {
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (document.querySelector('script[src*="calendly.com"]')) {
      return;
    }

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
  
  return (
    <section className="bg-background">
      {/* Testimonials Section */}
      <div className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
      
      {/* Calendly Booking Section */}
      <div id="calendly-widget" className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a time to discuss your project with our team
            </p>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/iamtrinayanborah/new-meeting-1" 
              style={{ 
                minWidth: '320px', 
                height: '700px',
                margin: '0 auto',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;