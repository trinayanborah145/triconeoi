import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const RoomEditorsDetail = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Button 
        variant="ghost" 
        className="mb-8"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
      </Button>

      <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
        {/* Project Header */}
        <div className="p-8 md:p-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Interior Designers
          </span>
          <h1 className="text-4xl font-bold mb-4">Room Editors</h1>
          <p className="text-xl text-muted-foreground">From Instagram Presence to Industry Authority</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              Room Editors, founded by renowned Assamese YouTuber Dimpu Baruah, had built a strong social media following but faced a critical business problem. Despite offering comprehensive interior design services including false ceiling, modular kitchens, TV unit designs, and more, they were struggling to convert their Instagram audience into paying customers.
            </p>
          </section>

          {/* Project Images */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Images</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {[
                  "/Screenshot 2025-08-24 151105.png",
                  "/Screenshot 2025-08-24 151125.png",
                  "/Screenshot 2025-08-24 151137.png"
                ].map((image, index) => (
                  <div key={`project-image-${index}`} className="w-full overflow-hidden rounded-lg border border-border/50">
                    <img 
                      src={image}
                      alt={`Room Editors - Project ${index + 1}`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <div className="grid md:grid-cols-1 gap-8">
              {[
                "Brand Storytelling Website: Created a compelling narrative around Dimpu Baruah's journey and vision, showcasing the personal touch that sets Room Editors apart. Built emotional connection through authentic brand storytelling.",
                "Service-Focused Architecture: Developed dedicated pages for each service (False Ceiling, Modular Kitchen, TV Units, etc.) with professional portfolio galleries and clear service descriptions with pricing transparency.",
                "Conversion-Optimized Design: Implemented strategic call-to-action placement throughout the site, Instagram integration to leverage existing social proof, and mobile-first responsive design.",
                "Local SEO Domination: Executed comprehensive keyword research for 'interior designers in Guwahati', on-page SEO optimization for all service pages, local business schema markup, and Google My Business integration."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                { value: "300%", label: "Increase in online engagement and inquiries" },
                { value: "85%", label: "Reduction in client acquisition costs" },
                { value: "4.9/5", label: "Average client satisfaction rating" },
                { value: "2.5x", label: "Increase in average project value" }
              ].map((result, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-2">{result.value}</h3>
                  <p className="text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Client Quote */}
          <section className="mb-12 bg-muted/30 p-8 rounded-lg">
            <blockquote className="relative">
              <div className="text-primary text-6xl font-serif leading-none">"</div>
              <p className="text-lg italic text-muted-foreground mb-6 relative z-10 pl-8">
                We had thousands of followers on Instagram, but we weren't getting the high-quality leads we deserved. People would see our work, get excited, but then... nothing. We needed a way to turn that interest into actual business.
              </p>
              <footer className="font-medium text-foreground pl-8">
                — Room Editors Team
              </footer>
            </blockquote>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Services Delivered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Brand Strategy & Positioning",
                "Custom Website Design & Development",
                "Service Page Architecture",
                "Portfolio Gallery System",
                "Local SEO Implementation",
                "Google My Business Optimization"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoomEditorsDetail;
