import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const VideoProductionDetail = () => {
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
            Video Production
          </span>
          <h1 className="text-4xl font-bold mb-4">Vertias Media</h1>
          <p className="text-xl text-muted-foreground">Marketing Agency</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
            Veritas Media is a newly established marketing agency based in Jorhat, Assam. Despite being new, they quickly started receiving a lot of interest and DMs from potential clients. However, they lacked a professional website to showcase their portfolio and past work, which made it difficult to convert inquiries into paying clients.
            </p>
          </section>

          {/* Project Images */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {[
                  "/Screenshot 2025-08-31 103331.png",
                  "/Screenshot 2025-08-31 103430.png",
                  "/Screenshot 2025-08-31 103442.png",
                  "/Screenshot 2025-08-31 103511.png",
                  "/Screenshot 2025-08-31 103529.png",
                  "/Screenshot 2025-08-31 103541.png"
                ].map((image, index) => (
                  <div key={`project-image-${index}`} className="w-full overflow-hidden rounded-lg border border-border/50">
                    <img 
                      src={image}
                      alt={`Video Production - Project ${index + 1}`}
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
                "Minimalist Portfolio-Centric Website: Designed a clean, distraction-free website that puts Veritas Media's portfolio and client collaborations at the center, aligning with the founders' vision of simplicity and professionalism.",
                "Client Showcase Section: Created a dedicated space to highlight the brands and businesses Veritas Media has worked with, building instant credibility and social proof.",
                "Interactive Portfolio Gallery: Developed a modern gallery layout where potential clients can easily browse past work, making their creative capabilities clear at first glance.",
                "Creative Storytelling: Developed compelling narratives that effectively communicate the client's message and brand values.",
                "Mobile-First Responsive Design: Ensured the website is seamless across devices, especially mobile, as most inquiries originated from Instagram DMs."
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { value: "200+", label: "Videos produced for various clients" },
                { value: "5M+", label: "Total video views across platforms" },
                { value: "85%", label: "Increase in audience engagement" },
                { value: "4.8/5", label: "Average client satisfaction rating" },
                { value: "3x", label: "Higher conversion rates for video content" },
                { value: "98%", label: "Client retention rate" }
              ].map((result, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-2">{result.value}</h3>
                  <p className="text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Corporate Video Production",
                "Product Demos",
                "Brand Storytelling",
                "Social Media Videos",
                "Event Coverage",
                "Testimonial Videos",
                "Animated Explainer Videos",
                "Live Streaming",
                "Video Editing & Post-Production"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <blockquote className="relative">
              <div className="text-primary text-6xl font-serif leading-none">"</div>
              <p className="text-lg italic text-muted-foreground mb-6 relative z-10 pl-8">
                Working with the team was a game-changer for our brand. Their attention to detail and creative approach helped us create video content that truly represents our vision. The results exceeded our expectations in every way.
              </p>
              <footer className="font-medium text-foreground pl-8">
                — Satisfied Client
              </footer>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VideoProductionDetail;
