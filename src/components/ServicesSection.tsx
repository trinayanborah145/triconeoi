import { LaptopIcon, ShoppingCart, Zap } from 'lucide-react';
import { Element } from 'react-scroll';

const ServicesSection = () => {
  const services = [
    {
      icon: LaptopIcon,
      title: 'Landing Page',
      subtitle: 'HIGH-CONVERTING & FAST',
      description: 'One high-converting page, designed & built fast. Perfect for campaigns, product launches, or quick marketing needs.',
      features: [
        'Custom design in Figma',
        'Built in Framer (mobile-optimized & fast-loading)',
        '3 rounds of revisions',
        'Delivered in 7-10 days',
        'Flat price. No retainers. No surprises.'
      ],
      cta: 'Secure Your September Spot'
    },
    {
      icon: LaptopIcon,
      title: 'Website',
      subtitle: 'MULTI-PAGE MARKETING SITE',
      description: 'Multi-page marketing site, handled end-to-end. Ideal for startups or brands needing a polished presence, fast.',
      features: [
        'Figma design for up to 5 pages',
        'Full Framer development',
        'Mobile-first & blazing fast',
        '3 rounds of revisions',
        'Delivered in 15-20 days',
        'SEO-ready, custom interactions, smooth UX'
      ],
      cta: 'Secure Your September Spot'
    }
  ];

  return (
    <Element name="services">
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-dark-surface to-background">
        {/* Background Elements */}
        <div className="absolute inset-0 dots-pattern opacity-15"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">WHAT WE DO</span>
              <br />
              <span className="text-glow">BEST</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm border border-muted/20 rounded-2xl p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 hover:shadow-[var(--shadow-neon)] hover:bg-card/50"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="text-sm font-bold text-primary mb-2 tracking-wider uppercase">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-muted/20">
                  <button className="w-full bg-primary text-black font-medium py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300">
                    {service.cta}
                  </button>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-2 rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '15s' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Removed bottom CTA */}
          <div className="hidden">
            <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent h-px w-full mb-8"></div>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your brand's voice?
            </p>
            <button className="btn-neon">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ServicesSection;