import { ArrowRight, Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Element } from 'react-scroll';

const ContactSection = () => {
  return (
    <Element name="contact">
      <section className="relative py-20 lg:py-32 bg-gradient-to-t from-background via-dark-surface to-background">
        {/* Background Elements */}
        <div className="absolute inset-0 dots-pattern opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Ready to Start?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">LET'S CREATE</span>
                <br />
                <span className="text-glow">SOMETHING AMAZING</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your brand's voice and drive real results? 
                <br className="hidden md:block" />
                Let's talk about your next big project.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: MessageCircle, title: 'Start a Chat', desc: 'Quick questions and instant responses', action: 'Live Chat' },
                { icon: Mail, title: 'Send Email', desc: 'Detailed project discussions', action: 'Email Us' },
                { icon: Phone, title: 'Book a Call', desc: 'Strategic consultation call', action: 'Schedule' }
              ].map((option, index) => (
                <div key={index} className="group bg-card/30 backdrop-blur-sm border border-muted/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[var(--shadow-neon)]">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.desc}</p>
                  <button className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center justify-center space-x-2 w-full">
                    <span>{option.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-3xl border border-primary/20 p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to see what strategy-powered creativity can do?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Join the brands that trust us to deliver results that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="btn-neon group">
                  Let's Talk Strategy
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="text-primary hover:text-primary/80 transition-colors font-semibold">
                  View Our Process
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {['Thomson Reuters', 'Adidas', 'Geox', 'Sisense'].map((brand, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-muted-foreground">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactSection;