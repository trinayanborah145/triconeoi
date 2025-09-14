import { Award, BarChart3, Users, Zap } from 'lucide-react';

const ResultsSection = () => {
  const achievements = [
    {
      icon: BarChart3,
      number: '14%',
      label: 'Sales Increase',
      description: 'Adidas campaign results',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      number: '85%',
      label: 'Click-through Rate',
      description: 'Geox Instagram improvement',
      color: 'text-yellow-400'
    },
    {
      icon: Award,
      number: '45%',
      label: 'Volume Targets',
      description: 'Thomson Reuters exceeded',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      number: '100+',
      label: 'Brands Served',
      description: 'Across tech to retail',
      color: 'text-green-400'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-dark-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">
                Results to
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-glow">RAVE ABOUT</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Results matter. And we don't believe in creativity without a cause.
              </p>
              
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our campaign for <span className="text-primary font-semibold">Adidas</span> ramped up 
                  sales by 14%. We improved <span className="text-primary font-semibold">Geox's</span> Instagram 
                  click-through rate by a whopping 85%. And we smashed volume 
                  targets for <span className="text-primary font-semibold">Thomson Reuters</span> in record time.
                </p>
              </div>

              <button className="btn-neon">
                View All Results
              </button>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm border border-muted/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] text-center"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Number */}
                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${achievement.color} group-hover:text-primary transition-colors duration-300`}>
                  {achievement.number}
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>

                {/* Description */}
                <div className="text-xs text-muted-foreground">
                  {achievement.description}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 group-hover:animate-pulse transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px w-full mb-12"></div>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-8 leading-relaxed">
              "From hot headlines to a killer call to action, we know what works – and when 
              – across web copy, social media, conversion copywriting...
              <span className="text-glow"> and the whole shebang.</span>"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">The Creative Team</div>
                <div className="text-sm text-muted-foreground">13 LENSES® Specialists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;