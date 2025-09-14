import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RoomEditorsCard from './case-studies/RoomEditorsCard';
import DeeuProductionCard from './case-studies/MinimalistOfficeCard';
import VideoProductionCard from './case-studies/VideoProductionCard';

const CaseStudySection = () => {

  return (
    <section className="py-20 bg-background text-foreground w-full">
      <div className="max-w-[95%] 2xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>
            <span className="text-glow"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Every business has a story, and we bring that story to life through clean, modern, and conversion-focused web design. Here are some of the projects we’ve crafted for our clients.
          </p>
        </div>

        {/* Scrollable Projects Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-6 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div className="flex space-x-8 w-max min-w-full px-4">
              <RoomEditorsCard />
              <DeeuProductionCard />
              <VideoProductionCard />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CaseStudySection;