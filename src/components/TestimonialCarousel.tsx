import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Working with Trinayan and Tricone Agency was an absolute delight. He truly understood our agency's vision and translated it into a website that perfectly represents our brand. The attention to detail, creativity, and seamless execution made the entire process effortless.",
    author: "Deep Kurmi",
    role: "Founder, Deeu Production Agency"
  },
  {
    id: 2,
    content: "Trinayan's approach is exceptional. He not only understood our interior design business needs but also provided strategic inputs that enhanced our online presence. The website he created is visually stunning and user-friendly.",
    author: "Kingkar Choudhury",
    role: "CEO, Room Editors"
  },
  {
    id: 3,
    content: "From concept to launch, Trinayan handled everything with professionalism and expertise. He grasped our requirements quickly and delivered a website that exceeded our expectations. The design reflects our style perfectly.",
    author: "Dimpu Baruah",
    role: "Founder, Room Editors"
  },
  {
    id: 4,
    content: "Trinayan's work on my landing page was outstanding. He understood the marketing goals behind my funnel and designed a page that's both visually appealing and highly conversion-focused.",
    author: "Aayan Siddqiue",
    role: "Content Creator"
  },
  {
    id: 5,
    content: "Trinayan and Tricone Agency transformed the way our villa is presented online. The website is elegant, easy to navigate, and the booking system works flawlessly. Professional, reliable, and innovative.",
    author: "Rahul Agarwal",
    role: "Owner, Pine Vialla"
  },
  {
    id: 6,
    content: "Trinayan's expertise in web design is unmatched. He built a website for our roofing business that not only looks professional but also builds trust with potential clients. His process is collaborative and efficient.",
    author: "John Roe",
    role: "Owner, AtoZ Roofing"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-80 h-80 bg-card rounded-lg border border-border/20 p-6 flex flex-col justify-between">
    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
    <div>
      <p className="font-medium text-foreground mt-4">{testimonial.author}</p>
      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPosition = useRef(0);
  const scrollSpeed = 1;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!container || isPaused) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }

      scrollPosition.current += scrollSpeed;
      const maxScroll = container.scrollWidth / 2;
      
      if (scrollPosition.current >= maxScroll) {
        scrollPosition.current = 0;
      }
      
      container.scrollLeft = scrollPosition.current;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Duplicate testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="py-8 w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="flex space-x-6 py-4 overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {doubledTestimonials.map((testimonial, index) => {
          // Create a unique key by combining the original id and the index in the doubled array
          const uniqueKey = `${testimonial.id}-${index}-${index >= testimonials.length ? 'dupe' : 'orig'}`;
          return (
            <TestimonialCard 
              key={uniqueKey}
              testimonial={testimonial} 
            />
          );
        })}
      </div>
    </div>
  );
};

// Add styles for hiding scrollbar
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
  document.head.appendChild(style);
}

export default TestimonialCarousel;
