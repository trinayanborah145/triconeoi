import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DeeuProductionCard = () => {
  const navigate = useNavigate();
  
  const handleViewCaseStudy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/case-studies/1');
  };

  return (
    <div 
      onClick={() => navigate('/case-studies/1')}
      className="group relative w-[360px] flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Deeu Production Agency - Marketing Agency"
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
        <h3 className="text-xl font-semibold mb-2">Deeu Production Agency</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          A premier marketing agency from Jorhat, crafting custom-coded modern websites.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {["Custom Coded Websites", "Portfolio Showcase", "Brand Storytelling", "Digital Marketing"].map((service, i) => (
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
          View Our Work
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default DeeuProductionCard;
