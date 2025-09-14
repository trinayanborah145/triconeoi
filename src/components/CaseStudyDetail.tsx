import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { caseStudies, type CaseStudy } from '@/data/caseStudies';

const CaseStudyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Find the project by ID from the URL
  const project = caseStudies.find(study => study.id === parseInt(id || '1')) || caseStudies[0];
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl text-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-6">The requested case study could not be found.</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

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
            {project.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* Project Images */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Images</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-0 border rounded-lg overflow-hidden">
                {[
                  "/Screenshot 2025-09-10 161006.png",
                  "/Screenshot 2025-09-10 161021.png",
                  
                  "/Screenshot 2025-09-10 161119.png",
                  "/Screenshot 2025-09-10 161135.png",
                  "/Screenshot 2025-09-10 161155.png",
                  "/Screenshot 2025-09-10 161210.png",
                  "/Screenshot 2025-09-10 161238.png",
                  "/Screenshot 2025-09-10 161248.png"
                ].map((screenshot, index) => (
                  <div key={`project-image-${index}`} className="w-full overflow-hidden border-b last:border-b-0">
                    <img 
                      src={screenshot}
                      alt={`${project.title} - Image ${index + 1}`}
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
            <div className="grid md:grid-cols-2 gap-8">
              {project.solution.map((item, index) => (
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
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {project.results.map((result, index) => (
                <div key={index} className="bg-muted/30 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{result.value}</p>
                  <p className="text-sm text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="bg-muted/30 p-8 rounded-xl mb-12">
            <blockquote className="italic text-lg text-muted-foreground">
              "{project.testimonial}"
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
