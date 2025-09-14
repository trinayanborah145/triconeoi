export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  services: string[];
  challenge: string;
  about?: string;
  problem?: string[];
  solution: string[];
  results: { value: string; label: string }[];
  strategy?: string[];
  servicesDelivered?: string[];
  testimonial: string;
  clientQuote?: string;
  images?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Deeu Production Agency",
    description: "Portfolio Website",
    category: "Video Production Agency",
    image: "/Screenshot 2025-08-24 150628.png",
    services: ["Custom Website Design", "Brand Storytelling", "Local SEO", "Lead Generation"],
    challenge: "Veritas Media is a newly established marketing agency based in Jorhat, Assam. Despite being new, they quickly started receiving a lot of interest and DMs from potential clients. However, they lacked a professional website to showcase their portfolio and past work, which made it difficult to convert inquiries into paying clients.",
    images: [
      "/Screenshot 2025-08-24 150628.png",
      "/Screenshot 2025-08-24 150628.png",
      "/Screenshot 2025-08-24 150628.png"
    ],
    problem: [
      "No professional online presence beyond social media",
      "Zero visibility in Google searches for interior designers in Guwahati",
      "Missed conversion opportunities from Instagram traffic",
      "Lack of brand storytelling to build deeper client connections",
      "No way to showcase their full range of services professionally"
    ],
    solution: [
      "Minimalist Portfolio-Centric Website: Designed a clean, distraction-free website that puts Veritas Media’s portfolio and client collaborations at the center, aligning with the founders’ vision of simplicity and professionalism.",
      "Client Showcase Section: Created a dedicated space to highlight the brands and businesses Veritas Media has worked with, building instant credibility and social proof.",
      "Interactive Portfolio Gallery: Developed a modern gallery layout where potential clients can easily browse past work, making their creative capabilities clear at first glance.",
      "Mobile-First Responsive Design: Ensured the website is seamless across devices, especially mobile, as most inquiries originated from Instagram DMs.",
      "Fast & Easy Navigation: Built with a lightweight structure for speed, with clear CTAs to encourage client inquiries and portfolio viewing."
    ],
    results: [
      { value: "#1", label: "Veritas Media can now confidently share a professional website instead of sending PDFs or replying manually to every inquiry." },
      { value: "250%", label: "Improved Credibility Having a clean, structured website immediately elevated them above competitors without a web presence." },
      { value: "180%", label: "Increase in premium project inquiries" },
      { value: "5x", label: "Faster Client Conversions Portfolio and client work available online 24/7 reduces back-and-forth and builds trust instantly." },
      { value: "40%", label: "Stronger Online Identity The website now acts as their digital headquarters, aligning with their brand story." },
      { value: "300%", label: "Increase in organic search visibility" },
      { value: "3 months", label: "Future-Ready Growth The website structure allows easy addition of new clients, services, and portfolio projects." },
      { value: "3 months", label: "Professional Brand Perception – Helped Veritas Media position themselves as a serious, reliable agency in the local market."},
    ],
    strategy: [
      "Phase 1: Research & Strategy (Week 1-2) - Analyzed local competition, identified customer pain points, developed brand positioning",
      "Phase 2: Design & Development (Week 3-6) - Created wireframes, developed brand storytelling, built responsive website",
      "Phase 3: SEO & Optimization (Week 7-8) - Implemented local SEO, mobile optimization, tracking setup",
      "Phase 4: Launch & Monitor (Ongoing) - Continuous optimization and monthly performance reviews"
    ],
    servicesDelivered: [
      "Custom Website Design & Development",
      "Brand Storytelling & Content Strategy",
      "Local SEO Optimization",
      "Mobile Responsive Design",
      "Lead Generation System",
      "Google My Business Setup",
      "Analytics & Tracking Setup",
      "Ongoing Support & Maintenance"
    ],
    testimonial: "\"Tricone Agency helped us transform our online presence. Earlier, we struggled to share our portfolio with potential clients. Now, with our new website, we can showcase our work in a professional and minimal way. It has already made our client conversations smoother and more impactful.\" - Vertias Media's Founders",
    clientQuote: "\"We had thousands of followers on Instagram, but we weren't getting the high-quality leads we deserved. People would see our work, get excited, but then... nothing. We needed a way to turn that interest into actual business.\" - Room Editors Team"
  },
  {
    id: 2,
    title: "Room Editors",
    description: "From Instagram Presence to Industry Authority",
    category: "Interior Designers",
    image: "/Screenshot 2025-08-24 150628.png",
    services: ["E-commerce Website", "Brand Storytelling", "Global SEO Strategy"],
    challenge: "Room Editors, founded by renowned Assamese YouTuber Dimpu Baruah, had built a strong social media following but faced a critical business problem. Despite offering comprehensive interior design services including false ceiling, modular kitchens, TV unit designs, and more, they were struggling to convert their Instagram audience into paying customers.",
    solution: [
      "Brand Storytelling Website: Created a compelling narrative around Dimpu Baruah's journey and vision, showcasing the personal touch that sets Room Editors apart. Built emotional connection through authentic brand storytelling.",
      "Service-Focused Architecture: Developed dedicated pages for each service (False Ceiling, Modular Kitchen, TV Units, etc.) with professional portfolio galleries and clear service descriptions with pricing transparency.",
      " Conversion-Optimized Design: Implemented strategic call-to-action placement throughout the site, Instagram integration to leverage existing social proof, and mobile-first responsive design.",
      "Local SEO Domination: Executed comprehensive keyword research for 'interior designers in Guwahati', on-page SEO optimization for all service pages, local business schema markup, and Google My Business integration."
    ],
    results: [
      { value: "300%", label: "Increase in online engagement" },
      { value: "Global Reach", label: "First international orders from US & UK" },
      { value: "Brand Authority", label: "Positioned as premium Assamese ethnic wear" },
      { value: "Media Attention", label: "Featured in local media as cultural pioneer" }
    ],
    testimonial: "\"Building the Sadoriya website was more than just about design—it was about telling a story the right way. Today, we're proud that our brand carries Assam's cultural pride into wardrobes across the world.\" - Sadoriya Team"
  },
  {
    id: 3,
    title: "Minimalist Office Space",
    description: "Designed a productive and inspiring workspace with clean lines and natural elements.",
    category: "Commercial",
    image: "/placeholder.svg",
    services: ["Office Design", "Furniture Selection", "Brand Integration"],
    challenge: "Creating a workspace that balances functionality with aesthetic appeal while maintaining brand identity.",
    
    solution: [
      "Open-plan layout with flexible work zones",
      "Ergonomic furniture selection for employee comfort",
      "Brand-consistent color scheme and materials",
      "Integration of biophilic design elements"
    ],
    results: [
      { value: "40%", label: "Increase in employee satisfaction" },
      { value: "25%", label: "Boost in productivity" },
      { value: "100%", label: "Utilization of natural light" },
      { value: "5/5", label: "Client satisfaction rating" }
    ],
    testimonial: "\"The new office space has completely transformed how our team works together. The design perfectly balances form and function.\" - Client Name"
  },
  {
    id: 4,
    title: "Hotel Lobby",
    description: "A luxurious and welcoming entrance that makes a lasting first impression.",
    category: "Hospitality",
    image: "/placeholder.svg",
    services: ["Lobby Design", "Lighting Design", "Brand Experience"],
    challenge: "Designing a lobby that reflects luxury while maintaining a warm, inviting atmosphere for all guests.",
    solution: [
      "Grand entrance with dramatic lighting",
      "Luxurious yet durable materials",
      "Comfortable seating areas for various group sizes",
      "Seamless check-in experience"
    ],
    results: [
      { value: "95%", label: "Guest satisfaction rate" },
      { value: "4.8/5", label: "Average review score" },
      { value: "30%", label: "Increase in lobby usage" },
      { value: "20%", label: "Growth in repeat guests" }
    ],
    testimonial: "\"Our guests consistently compliment the lobby design. It's become a destination in itself.\" - Hotel Manager"
  }
];
