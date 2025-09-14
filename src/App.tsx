import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VeritasMediaDetail from "./components/case-studies/VeritasMediaDetail";
import RoomEditorsDetail from "./components/case-studies/RoomEditorsDetail";
import VideoProductionDetail from "./components/case-studies/VideoProductionDetail";
import AnimatedText from "./components/AnimatedText";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  
  // Initialize smooth scroll
  useSmoothScroll();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <main data-scroll-container>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Skip to main content
        </a>
        <Routes>
          <Route path="/" element={<Index animationComplete={animationComplete} />} />
          {/* Individual case study routes */}
          <Route path="/case-studies/1" element={<VeritasMediaDetail />} />
          <Route path="/case-studies/2" element={<RoomEditorsDetail />} />
          <Route path="/case-studies/3" element={<VideoProductionDetail />} />
          {/* Redirect old case study URLs to the new ones */}
          <Route path="/case-studies/:id" element={<Navigate to="/404" replace />} />
          {/* 404 Route - Keep this last */}
          <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
      {!animationComplete && <AnimatedText onComplete={handleAnimationComplete} />}
      <CustomCursor />
    </QueryClientProvider>
  );
};

export default App;
