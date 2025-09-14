import { Brain, Lightbulb, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { Element } from 'react-scroll';

const AboutSection = () => {
  const stats = [
    { number: '15+', label: 'Successful Projects', desc: 'Proven methodologies' },
    { number: '10+', label: 'Brands', desc: 'Successfully transformed' },
    { number: '98%', label: 'Client Satisfaction Rate', desc: 'Because happy clients are our best results' },
    { number: '200%', label: 'ROI', desc: 'Average client growth' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Strategy First',
      description: 'Every single element in our designs are backed by research, data, and strategic thinking. No fluff, just results.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Edge',
      description: 'Our framework blends creativity and strategy to deliver unforgettable digital experiences.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Your success is our mission. We measure everything and optimize relentlessly.'
    }
  ];

  return (
    <Element name="about">
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-dark-surface via-background to-dark-surface overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 dots-pattern opacity-15"></div>
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">WE ARE THE</span>
              <br />
              <span className="text-glow">DESIGNERS</span>
              <br />
              <span className="text-foreground">WITH</span>
              <span className="text-glow"> STRATEGY</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We’re not your typical web design agency 
             we’re the rebels who believe that creativity without strategy is just pretty pixels.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Side - Story */}
            <div className="space-y-8">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
                <div className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">
                  Our Story
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Born from Frustration, 
                  <span className="text-glow"> Powered by Results</span>
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                  I started Tricone because I was tired of seeing websites that looked great but didn’t do their job. Sleek visuals with no strategy. Fancy animations that impressed designers but confused customers.
                  </p>
                  <p>
                    So we created something different. A methodology that marries left-brain strategy with 
                    right-brain creativity. We call it <span className="text-primary font-semibold">MURAL®</span> – 
                    and it's how we've helped brands like Thomson Reuters, Adidas, and Sisense achieve 
                    breakthrough results.
                  </p>
                  <p>
                    Today, we're the agency that brands with brains trust when they need words that work 
                    and creativity that converts.
                  </p>
                </div>
              </div>

              {/* Methodology Highlight */}
              <div className="bg-gradient-to-br from-primary/5 via-transparent to-primary/10 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary tracking-wider uppercase">
                    Our Secret Weapons
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/20 rounded-lg border border-primary/10">
                    <div className="text-lg font-bold text-primary">Design strategy</div>
                    <div className="text-xs text-muted-foreground">Blueprint Framework</div>
                  </div>
                  <div className="text-center p-4 bg-card/20 rounded-lg border border-primary/10">
                    <div className="text-lg font-bold text-primary">Experience Matrics</div>
                    <div className="text-xs text-muted-foreground">UI/UX Methodology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Values & Stats */}
            <div className="space-y-8">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group bg-card/30 backdrop-blur-sm border border-muted/20 rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] pulse-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-glow transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">What Drives Us</h3>
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-card/20 backdrop-blur-sm border border-muted/20 rounded-xl hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="text-center bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl border border-primary/20 p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                We Don't Just design websites.
                <br />
                <span className="text-glow">We Craft Conversion Engines.</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every headline, every call-to-action, every piece of content is engineered to move your 
                audience from curious visitor to loyal customer. Because at the end of the day, 
                beautiful designs that don't convert are just expensive art.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Ready to see what we can do?</div>
                  <div className="text-sm text-muted-foreground">Let's turn your brand into a conversion machine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;