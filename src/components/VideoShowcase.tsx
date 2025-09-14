import { ArrowLeft, ArrowRight } from 'lucide-react';

const CaseStudiesShowcase = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Room Editors',
      industry: 'Interior Designers',
      image: '/api/placeholder/400/300',
      description: 'Modern interior design website with dynamic portfolio showcase'
    },
    {
      id: 2,
      title: 'Spain Academy',
      industry: 'EdTech',
      timeline: 'Ongoing',
      image: '/api/placeholder/400/300',
      description: 'Educational platform with student management system'
    },
    {
      id: 3,
      title: 'Prestige',
      industry: 'Construction',
      timeline: '2 months',
      image: '/api/placeholder/400/300',
      description: 'Professional construction company with project galleries'
    },
    {
      id: 4,
      title: 'TechFlow Solutions',
      industry: 'SaaS',
      timeline: '3 weeks',
      image: '/api/placeholder/400/300',
      description: 'B2B software platform with advanced analytics dashboard'
    },
    {
      id: 5,
      title: 'Green Earth Co',
      industry: 'Sustainability',
      timeline: '1 month',
      image: '/api/placeholder/400/300',
      description: 'Eco-friendly company with carbon footprint calculator'
    },
    {
      id: 6,
      title: 'FitLife Wellness',
      industry: 'Health & Fitness',
      timeline: '6 weeks',
      image: '/api/placeholder/400/300',
      description: 'Wellness platform with booking and nutrition tracking'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-dark-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real websites, real results, real growth
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-8 pb-4">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group relative flex-shrink-0 w-80 md:w-96 bg-secondary/30 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-slide-in-up border border-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Website Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                  
                  {/* Mock Browser Frame */}
                  <div className="absolute top-3 left-3 flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  
                  {/* Animated Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-glow mb-1">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {study.industry}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {study.timeline}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* View Project Link */}
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium story-link">
                      View Project →
                    </button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button className="w-10 h-10 bg-secondary/50 hover:bg-secondary/70 rounded-full flex items-center justify-center transition-colors border border-primary/20 hover:border-primary/40">
              <ArrowLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="w-10 h-10 bg-secondary/50 hover:bg-secondary/70 rounded-full flex items-center justify-center transition-colors border border-primary/20 hover:border-primary/40">
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesShowcase;