import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const VeritasMediaDetail = () => {
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
            Video Production Agency
          </span>
          <h1 className="text-4xl font-bold mb-4">Deeu Production Agency</h1>
          <p className="text-xl text-muted-foreground">Portfolio Website</p>
        </div>

        {/* Hero Image - Removed as requested */}

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              Deeu Production Agency, a creative video production house based in Jorhat, Assam, was struggling to gain trust and credibility with potential clients. Despite having great work, they lacked a professional website to represent their brand. Without a central hub to showcase their services and portfolio, most of their inquiries went cold, and prospects often hesitated to move forward.
            </p>
          </section>

          {/* Project Images */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Images</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "/Screenshot 2025-09-10 161006.png",
                  "/Screenshot 2025-09-10 161021.png",
                  "/Screenshot 2025-09-10 161119.png",
                  "/Screenshot 2025-09-10 161135.png",
                  "/Screenshot 2025-09-10 161155.png",
                  "/Screenshot 2025-09-10 161210.png",
                  "/Screenshot 2025-09-10 161238.png",
                  "/Screenshot 2025-09-10 161248.png"
                ].map((image, index) => (
                  <div key={`project-image-${index}`} className="w-full overflow-hidden rounded-lg border border-border/50">
                    <img 
                      src={image}
                      alt={`Veritas Media - Project ${index + 1}`}
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
                "Brand-Centric Website Design: Created a visually striking yet minimalist website that communicates Deeu's creative identity and highlights their storytelling expertise.",
                "Trust-Building Structure: Added sections like About Us and Why Choose Us to emphasize professionalism and build confidence in new visitors.",
                "Portfolio Showcase: Developed a dedicated space for their video projects, enabling prospects to instantly experience their quality and creativity.",
                "Responsive & Mobile-First Design: Ensured smooth performance across all devices, especially mobile, as most traffic came from social media platforms like Instagram.",
                "Clear CTAs for Client Inquiries: Strategically placed 'Work With Us' buttons and contact forms to make it easy for potential clients to reach out."
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
                { value: "✓", label: "Instant Credibility Boost – Deeu can now confidently share their professional website instead of relying only on social media links." },
                { value: "220%", label: "Increase in Client Trust – Having a polished website instantly elevated them above competitors who lacked a professional digital presence." },
                { value: "✓", label: "Faster Lead Conversion – Prospects no longer needed multiple back-and-forth conversations, as the website answered most questions upfront." },
                { value: "✓", label: "Stronger Brand Identity – The website now speaks for their brand and positions them as a reliable, creative video production agency in Jorhat." }
              ].map((result, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-2">{result.value}</h3>
                  <p className="text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <blockquote className="relative">
              <div className="text-primary text-6xl font-serif leading-none">"</div>
              <p className="text-lg italic text-muted-foreground mb-6 relative z-10 pl-8">
                "We always had great work to show but struggled to present it professionally. Thanks to Tricone Agency, our new website speaks for our brand and makes us look much more credible. It has already helped us build trust with clients and made our conversations easier."
              </p>
              <footer className="font-medium text-foreground pl-8">
                — Deeu Production Agency Team
              </footer>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VeritasMediaDetail;
