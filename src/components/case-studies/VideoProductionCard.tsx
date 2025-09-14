import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const VideoProductionCard = () => {
  const navigate = useNavigate();
  
  const handleViewCaseStudy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/case-studies/3');
  };

  return (
    <div 
      onClick={() => navigate('/case-studies/3')}
      className="group relative w-[360px] flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="h-6 w-6 ml-1 text-white" fill="currentColor" />
          </div>
        </div>
        <img
          src="/placeholder.svg"
          alt="Project screenshot for Brand Video Production"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            Marketing Agency
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Veritas Media</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          Modern website for Veritas Media, a marketing agency. Featuring a clean landing page with minimal design and compelling storytelling.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {["Landing Page", "Minimal Design", "Storytelling"].map((service, i) => (
            <span key={i} className="text-xs px-2.5 py-1 bg-muted/50 rounded-full">
              {service}
            </span>
          ))}
        </div>
        
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors"
          onClick={handleViewCaseStudy}
        >
          <span>View Project Details</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default VideoProductionCard;
